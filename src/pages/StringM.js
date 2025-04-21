// Core Imports
import FNavbar from "../components/FNavbar"; // (Imported but not used - possibly for mobile/fallback nav)
import Navbar from "../components/Navbar"; // Top navbar
import "../css/Theory.css"; // Custom styling for theory pages
import { animate, delay, motion } from "framer-motion"; // Animation library
import StrMatchImg from "../img/string-matching.webp"; // (Imported but not used - possibly an old visual)
import { Link, useNavigate } from "react-router-dom"; // Routing components
import Footer from "../components/Footer"; // Footer for the page
import StringMatchSVG from "../img/string_match.svg" // Image used to illustrate string matching example

export default function StrMatch() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Function to navigate to a route dynamically
    const naviTo = (toLink) => {
        navigate("/" + toLink);
    }

    return (
        <>
            <Navbar /> {/* Renders the navigation bar */}
            <div className="fullbg fullbgHOME dcontainer"> {/* Main container with background styling */}
                <section className="sectionsT">
                    
                    {/* Animated title */}
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        id="title"
                        className="title1"
                    >
                        String Matching
                    </motion.p>

                    {/* Main content animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >

                        {/* Overview / Introduction */}
                        <p className="f1-5 mUpL">
                            <b className="hightText1">String matching</b> operation is a core part in many text processing applications.
                            The objective of this algorithm is to find pattern P from given text T.
                        </p>

                        {/* Link to specific algorithms */}
                        <p className="f1-3 mUpL">
                            <b>Links to:</b>
                            <button name="insertion" className="sButton" onClick={() => { naviTo("rabinkarp") }}>
                                Rabinkarp<span></span>
                            </button>
                            {/* Other buttons commented out — possibly for future use */}
                        </p>

                        {/* Re-emphasis of definition & importance */}
                        <p className="f1-5 mUpL">
                            String matching operation is a core part in many text processing applications.
                            The objective of this algorithm is to find pattern P from given text T.
                            In the design of compilers and text editors, string matching operation is crucial.
                            So locating P in T efficiently is very important.
                        </p>

                        {/* Problem definition */}
                        <p className="f1-5 mUpL">
                            The problem is defined as follows: “Given some text string T[1….n] of size n,
                            find all occurrences of pattern P[1…m] of size m in T.”
                        </p>

                        {/* Mathematical explanation */}
                        <p className="f1-4 mUpL">
                            We say that P occurs in text T with number of shifts s, if 0 ≤ s ≤ n – m
                            and T[ (s + 1) … (s + m) ] = P[1…m].
                        </p>

                        {/* Example section intro */}
                        <div className="mUpL">
                            <b className=" f1-4 hightText">
                                Consider the following example
                            </b>
                        </div>

                        {/* Image for visualization */}
                        <div className="divf mUpM">
                            <img src={StringMatchSVG} className="im2" />
                        </div>

                        {/* Explanation + implications */}
                        <p className="f1-5 mUpL">
                            <ul className="ols f1-3">
                                <li>
                                    In this example, pattern P = ARE is found in text T after four shifts.
                                </li>
                                <li>
                                    The classical application of such algorithms are to find particular protein pattern in DNA sequence.
                                </li>
                                <li>
                                    Strings may be encoded using sets like:
                                    {"{a, b, …, z}"}, binary {"{0, 1}"}, decimal {"{0, 1, 2, …, 9}"}, or DNA {"{A, C, G, T}"}.
                                    The choice of encoding directly affects search performance.
                                </li>
                                <li>
                                    In the next sections, we will discuss and analyze a few string-matching algorithms.
                                </li>
                            </ul>
                        </p>

                        {/* Applications */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Applications of String Matching</b>
                            <ul className="ols mUpS f1-3">
                                <li>
                                    <b>Plagiarism Detection:</b> Used to compare documents based on string patterns.
                                </li>
                                <li>
                                    <b>Bioinformatics and DNA Sequencing:</b> Matches patterns in genetic sequences.
                                </li>
                                <li>
                                    <b>Digital Forensics:</b> Helps locate important keyword strings in large forensic text dumps.
                                </li>
                            </ul>
                        </p>

                    </motion.div>
                </section>
            </div>
            <Footer /> {/* Bottom footer */}
        </>
    )
}

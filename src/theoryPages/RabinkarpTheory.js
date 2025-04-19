
// import necessary components

import { useNavigate } from "react-router-dom";
import FNavbar from "../components/FNavbar";
import Navbar from "../components/Navbar";
import "../css/Theory.css";
import { motion } from "framer-motion";
import Footer from "../components/Footer.js";
import rkp1 from "../img/rabinkarp/rkp1.png";
import rkp2 from "../img/rabinkarp/rkp2.png";
import rkp3 from "../img/rabinkarp/rkp3.png";
import { AppState } from "../context/appContext";
import { expR } from "../data/expRoutes";

//  Main function which contains the theory of the Rabin-Karp Algorithm
export default function RabinkarpTheory() {

    // Page navigations

    const navigate = useNavigate();
    // Function to navigate to the simulator page
    const naviTo = (toLink) => {
        navigate("/" + toLink + "/simulator");
    };
    // AppState hook to access the current experiment
    const { cuE, algoT } = AppState();
    const [currE, setCE] = cuE;

    // Return statement to return the JSX of the Rabin-Karp Algorithm Theory page
    return (
        <>
            <Navbar />
            <FNavbar />
            <div className="fullbg fullbgHOME dcontainer">

                {/* Theory for Rabin Karp Algorithm */}

                <section className="sectionsT mUpL">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="f1-5 mUpL">
                            <b className="hightText1">String Matching Algorithms</b> have greatly influenced computer science and play an essential role in various real-world problems. These algorithms help perform time-efficient tasks in multiple domains, especially for searching a string within another string.
                        </p>
                        <button className="goToSim mUpL" onClick={() => { naviTo(expR[currE[0]][currE[1]][1]) }}>Go to Simulator</button>
                        <p className="mUpM f1-5 hightText"><b>Algorithm for Rabin-Karp</b></p>
                        <div className="algorithm mUpM">
                            <p>
                                Step 1: n ← length [T] <br />
                                Step 2: m ← length [P] <br />
                                Step 3: h ← d^(m-1) mod q <br />
                                Step 4: p ← 0 <br />
                                Step 5: t₀ ← 0 <br />
                                Step 6: for i ← 1 to m <br />
                                Step 7: do p ← (dp + P[i]) mod q <br />
                                Step 8: t₀ ← (dt₀ + T[i]) mod q <br />
                                Step 9: for s ← 0 to n-m <br />
                                Step 10: do if p = tₛ <br />
                                Step 11: then if P[1.....m] = T[s+1.....s + m] <br />
                                Step 12: then "Pattern occurs with shift" s <br />
                                Step 13: If s &lt; n-m <br />
                                Step 14: then tₛ₊₁ ← (d(tₛ - T[s+1]h) + T[s+m+1]) mod q <br />
                            </p>
                        </div>

                        <p className="f1-5 mUpL">
                            <b className="hightText">Theory</b>
                            <ol className="ols mUpS f1-3">
                                <li>
                                    <div className="mUpL"></div>
                                    
                                    <p className="mUpM">Comparing numbers is both faster and more efficient than comparing strings. The Rabin-Karp algorithm simplifies the process by converting strings into numerical representations through hashing.</p>
                                <p className="mUpM">
                                    The algorithm computes a hash value for the pattern and for each M-length substring of the text. If the hash values don't match, it quickly moves to the next substring. However, if the hash values are the same, the algorithm performs a detailed comparison between the pattern and the current substring.
                                </p>

                                <div className="f1">
                                    <p className="mUpM">
                                        This approach ensures that only one comparison is made per text substring, and character-by-character matching is done only when the hash values match. This saves computational time and resources.
                                    </p>
                                        {/* <img className="navImg" src={Fst2}></img> */}
                                        <p className="mUpM">rabinkarp/
                                            Means if the hash values match then only it starts
                                            matching individual characters.</p>
                                            </div>
                                            <b className="hightText">Example</b>
                                    <div className="mUpL">
                                        <b className="f1-3">
                                            Let's say we have this Example of "HELLO" and "ELL":
                                        </b>
                                    </div>
                                    <p className="mUpM">
                                        <b>Step 1: Choose Two Strings</b> <br />
                                        Begin by choosing the two strings, the pattern `P` and the text `T`. These are the two inputs to the algorithm, and the goal is to find the pattern `P` in the text `T`. In this step, the algorithm computes the hash values of the pattern and the first `m`-length substring of the text.
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                        <img className="im1 kim1" src={rkp1} alt="Step 1: Choosing Strings" />
                                    </div>
                                </li>

                                <li>
                                    <div className="mUpL"></div>
                                    <p className="mUpM">
                                        <b>Parse the Text</b> <br />
                                        The algorithm slides the pattern over the text, comparing the hash values. If the hash values match, it performs a character-by-character comparison to check for an exact match of the pattern. If not, it moves to the next substring by updating the hash value.
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                        <img className="im1 kim1" src={rkp2} alt="Step 2: Parsing Text" />
                                    </div>
                                </li>

                                <li>
                                    <div className="mUpL"></div>
                                    <p className="mUpM">
                                        <b>If Match Found, Return the Index</b> <br />
                                        If a match is found (i.e., the hash values and character comparisons are equal), the algorithm returns the index where the pattern starts in the text (here, we return index 1). If no match is found, the algorithm continues sliding through the text until all substrings are checked.
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                        <img className="im1 kim1" src={rkp3} alt="Step 3: Match Found" />
                                    </div>
                                </li>
                            </ol>
                        </p>

                        {/* Time complexity and Applications */}

                        <p className="f1-5 mUpL">
                            <b className="hightText">Time Complexity</b>
                            <p className="ols mUpS f1-3">
                                The average and best-case running time of the Rabin-Karp algorithm is O(n+m), but its worst-case time is O(nm). The worst case occurs when the hash values for all substrings match but the strings themselves are not the same, causing the algorithm to perform character-by-character comparison every time.
                            </p>
                        </p>

                        <p className="f1-5 mUpL">
                            <b className="hightText">Applications of Rabin-Karp Algorithm</b>
                            <ul className="ols mUpS f1-3">
                                <li>Pattern matching in strings</li>
                                <li>Searching for a string in a larger text</li>
                            </ul>
                        </p>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    );
}

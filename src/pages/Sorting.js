// Importing necessary components and libraries
import FNavbar from "../components/FNavbar"; // (Imported but not used — might be for future/fallback navigation)
import Navbar from "../components/Navbar"; // Top navigation bar
import "../css/Theory.css"; // Page-specific styles
import { animate, delay, motion } from "framer-motion"; // For animations
import Sorting1 from "../img/sorting.svg"; // SVG image for sorting visualization
import { Link, useNavigate } from "react-router-dom"; // Routing components
import Footer from "../components/Footer"; // Footer section

export default function Sorting() {
    const navigate = useNavigate(); // Hook to programmatically navigate routes

    // Function to navigate to the given path
    const naviTo = (toLink) => {
        navigate("/" + toLink); // Constructs and navigates to the route
    }

    return (
        <>
            <Navbar /> {/* Render top navigation bar */}
            <div className="fullbg fullbgHOME dcontainer"> {/* Container with background styles */}
                <section className="sectionsT"> {/* Main content section */}
                    
                    {/* Animated page title */}
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        id="title" className="title1">Sorting</motion.p>
                    
                    {/* Animated body content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >

                        {/* Definition of sorting */}
                        <p className="f1-5 mUpL">
                            <b className="hightText1">Sorting</b> is the process of <b>arranging items</b> in a specific order or <b>sequence</b>. 
                            It is a common algorithmic problem in computer science and is used in various applications such as searching, data analysis, and information retrieval.
                        </p>

                        {/* Navigation buttons to specific sorting algorithms */}
                        <p className="f1-3 mUpL">
                            <b>Links to:</b>
                            <button name="insertion" className="sButton" onClick={() => { naviTo("insertion") }}>Insertion<span></span></button>
                            <button name="selection" className="sButton" onClick={() => { naviTo("selection") }}>Selection<span></span></button>
                            <button name="bubble" className="sButton" onClick={() => { naviTo("bubble") }}>Bubble<span></span></button>
                        </p>

                        {/* Sorting algorithm considerations (duplicated section) */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Three things to consider while choosing sorting algorithms for application:</b>
                            <ol className="ols mUpS f1-3">
                                <li><b>Number of elements</b> in list</li>
                                <li><b>Number of different orders</b> of list required</li>
                                <li><b>The amount of time</b> required to move the data or not move the data</li>
                            </ol>
                        </p>
                        {/* Duplicate content: same as above — consider removing */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Three things to consider while choosing sorting algorithms for application:</b>
                            <ol className="ols mUpS f1-3">
                                <li><b>Number of elements</b> in list</li>
                                <li><b>Number of different orders</b> of list required</li>
                                <li><b>The amount of time</b> required to move the data or not move the data</li>
                            </ol>
                        </p>

                        {/* Use cases: Ascending vs Descending */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Sorting Algorithms are done for Two main reasons:</b>
                            <ol className="ols mUpS f1-3">
                                {/* Ascending */}
                                <li>
                                    <div className="mUpL"></div>
                                    <b className="headMain">Ascending Sorting</b>
                                    <p className="mUpM">
                                        Data sorted from smallest to largest.
                                    </p>
                                    <div className="mUpM">
                                        <b className="headMain">Benefits:</b>
                                        <ul className="ols mUpS f1-3">
                                            <li><b>Improved Readability:</b> Easier to read and find elements.</li>
                                            <li><b>Efficient Searching:</b> Enables binary search.</li>
                                            <li><b>Optimized Algorithmic Performance:</b> Helps in other algorithms like merge sort.</li>
                                        </ul>
                                    </div>
                                    <div className="mUpM">
                                        <b className="headMain">Disadvantages:</b>
                                        <ul className="ols mUpS f1-3">
                                            <li><b>Increased Complexity for Dynamic Data:</b> Frequent updates can cause re-sorting overhead.</li>
                                            <li><b>Preprocessing Overhead:</b> Sorting can be computationally intensive.</li>
                                        </ul>
                                    </div>
                                </li>

                                {/* Descending */}
                                <li>
                                    <b className="headMain">Descending Sorting</b>
                                    <p className="mUpM">
                                        Data sorted from largest to smallest.
                                    </p>
                                    <div className="mUpM">
                                        <b className="headMain">Advantages:</b>
                                        <ul className="ols mUpS f1-3">
                                            <li><b>Convenience in Ranking:</b> Useful for ranking systems.</li>
                                            <li><b>Compatibility with Some Data Structures:</b> Some structures prefer descending order.</li>
                                        </ul>
                                        <b className="headMain">Disadvantages:</b>
                                        <ul className="ols mUpS f1-3">
                                            <li><b>Reduced Readability:</b> Not always intuitive to users.</li>
                                            <li><b>Limited Algorithmic Optimization:</b> Many algorithms are designed for ascending order by default.</li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </p>

                        {/* Example: Sorting characters by ASCII value */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Example</b>
                            <p className="mLeS mUpS f1-3">
                                The list of characters below is sorted by increasing ASCII value.
                            </p>
                        </p>

                        {/* Sorting illustration image */}
                        <div className="divf">
                            <img src={Sorting1} className="im1" />
                        </div>

                        {/* Applications of sorting in real-life */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Applications of Sorting</b>
                            <ul className="ols mUpS f1-3">
                                <li><b>Contact List:</b> Alphabetically sorted for easy lookup.</li>
                                <li><b>Book Index:</b> Keywords sorted lexicographically for reference.</li>
                                <li>
                                    <b>Paper Sorting Example:</b> Teachers sorting papers by name is similar to sorting by key fields in algorithms like bucket sort.
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

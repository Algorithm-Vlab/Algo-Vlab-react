// Importing required components and dependencies
import FNavbar from "../components/FNavbar"; // Optional navbar component (not used here)
import Navbar from "../components/Navbar"; // Top navigation bar
import "../css/Theory.css"; // Styles specific to theory pages
import { animate, delay, motion } from "framer-motion"; // Animation components from Framer Motion
import Greedy1 from "../img/fractionalKnapsackNew.svg"; // Image illustrating fractional knapsack
import { Link, useNavigate } from "react-router-dom"; // Routing hooks and components
import Footer from "../components/Footer"; // Footer component

// Main functional component for the Greedy Algorithm theory page
export default function Greedy() {

    const navigate = useNavigate(); // Hook to enable programmatic navigation

    // Function to navigate to a specified route
    const naviTo = (toLink) => {
        navigate("/" + toLink); // Navigates to the path corresponding to 'toLink'
    }

    return (
        <>
            <Navbar /> {/* Renders the Navbar at the top */}
            <div className="fullbg fullbgHOME dcontainer"> {/* Main container with background styling */}
                <section className="sectionsT"> {/* Section containing the content */}
                    {/* Animated title */}
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        id="title" className="title1">Greedy</motion.p>

                    {/* Animated content section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Introductory paragraph explaining greedy algorithm */}
                        <p className="f1-5 mUpL">
                            A <b className="hightText1">greedy</b> algorithm is an approach for solving a problem by <b>selecting</b> the <b>best option available at the moment.</b> It doesn't worry whether the current best result will bring the overall optimal result.
                        </p>

                        {/* Explanation on non-reversibility and top-down nature */}
                        <p className="f1-5 mUpL">
                            The algorithm never reverses the earlier decision even if the choice is wrong. It works in a <b>top-down approach</b>.
                        </p>

                        {/* Buttons linking to greedy algorithm examples */}
                        <p className="f1-3 mUpL">
                            <b>Links to:</b>
                            <button name="job-scheduling" className="sButton " onClick={() => { naviTo("job-scheduling") }}>Job Scheduling<span></span></button>
                            <button name="dijkstra" className="sButton " onClick={() => { naviTo("dijkstra") }}>Dijkstra<span></span></button>
                            <button name="kruskals" className="sButton " onClick={() => { naviTo("kruskals") }}>Kruskal's<span></span></button>
                        </p>

                        {/* When to use a greedy approach */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">We can use Greedy approach:</b>
                            <ol className="ols mUpS f1-3">
                                <li>
                                    If an optimal solution to the problem can be found by choosing the best choice at each step without reconsidering the previous steps once chosen, then problem can be solved using a greedy approach. This property is called greedy choice property.
                                </li>
                            </ol>
                        </p>

                        {/* Advantages of the greedy method */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Advantages of Greedy Approach</b>
                            <ol className="ols mUpS f1-3">
                                <li>
                                    The algorithm is easier to describe.
                                </li>
                                <li>
                                    This algorithm can perform better than other algorithms (but, not in all cases).
                                </li>
                            </ol>
                        </p>

                        {/* Example use case: Fractional Knapsack */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Example</b>
                            <p className="mLeS mUpM f1-3">
                                Consider the <b>Fractional Knapsack Problem</b>. The local optimal strategy is to choose the item that has maximum value vs weight ratio. This strategy also leads to a globally optimal solution because we are allowed to take fractions of an item.
                            </p>
                        </p>

                        {/* Image illustrating the greedy example */}
                        <div className="divf mUpM">
                            <img src={Greedy1} className="im2" />
                        </div>

                        {/* Applications of the greedy algorithm */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Applications of Greedy Approach</b>
                            <ul className="ols mUpS f1-3">
                                <li>
                                    It is used in finding the <b>shortest path</b>.
                                </li>
                                <li>
                                    It is used to find the <b>minimum spanning tree using the prim's algorithm or the Kruskal's algorithm</b>.
                                </li>
                                <li>
                                    It is used in a <b>job sequencing with a deadline</b>.
                                </li>
                                <li>
                                    This algorithm is also used to solve the <b>fractional knapsack problem</b>.
                                </li>
                            </ul>
                        </p>
                    </motion.div>
                </section>
                {/* </motion.div> */} {/* Possibly leftover from a previous wrap, commented out */}
            </div>
            <Footer /> {/* Footer displayed at the bottom */}
        </>
    )
}

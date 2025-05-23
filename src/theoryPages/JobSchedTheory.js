// Importing required modules and components
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import FNavbar from "../components/FNavbar"; // Custom floating/sticky navbar component
import Navbar from "../components/Navbar"; // Main navbar component
import "../css/Theory.css"; // CSS specific to theory pages
import { motion } from "framer-motion"; // Library for animations
import Footer from "../components/Footer.js"; // Footer component

// Importing job scheduling images
import jss1 from "../img/Jobschedimg/jss1.png";
import jss2 from "../img/Jobschedimg/jss2.png";
import jss3 from "../img/Jobschedimg/jss3.png";
import jss4 from "../img/Jobschedimg/jss4.png";
import jss5 from "../img/Jobschedimg/jss5.png";
import jss6 from "../img/Jobschedimg/jss6.png";
import jss7 from "../img/Jobschedimg/jss7.png";
import jss8 from "../img/Jobschedimg/jss8.png";

// Context for accessing app state
import { AppState } from "../context/appContext";

// Importing route data for experiment simulations
import { expR } from "../data/expRoutes";

// Component: JobSchedTheory
export default function JobSchedTheory() {

    // Hook for navigation
    const navigate = useNavigate();

    // Function to navigate to a simulation route
    const naviTo = (toLink) => {
        navigate("/" + toLink + "/simulator");
    }

    // Destructuring current experiment state from context
    const { cuE } = AppState();
    const [currE] = cuE;

    // Component return JSX
    return (
        <>
            {/* Navigation bars */}
            <Navbar />
            <FNavbar />

            {/* Main content container */}
            <div className="fullbg fullbgHOME dcontainer">
                <section className="sectionsT mUpL">
                    {/* Animated container using Framer Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} // Animation starts from slightly below and transparent
                        animate={{ opacity: 1, y: 0 }} // Ends fully visible and in place
                        transition={{ duration: 0.3 }} // Transition time
                    >
                        {/* Introduction to Job Scheduling */}
                        <p className="f1-5 mUpL">
                            <b className="hightText1">Job Scheduling</b> is a technique to schedule jobs from a set of N jobs onto a single processor to maximize the profit.
                        </p>

                        {/* Button to navigate to simulator */}
                        <button className="goToSim mUpL" onClick={() => { naviTo(expR[currE[0]][currE[1]][1]) }}>
                            Go to Simulator
                        </button>

                        {/* Algorithm description section */}
                        <div className="f1-5 mUpL">
                            <b className="hightText">Algorithm for Job Scheduling</b>
                            <ul className="algorithm intro f1-3 mUpM">
                                <li><b>Step 1:</b> Sort jobs in descending order of profits.</li>
                                <li><b>Step 2:</b> Create a Gantt chart with size: min(number of jobs, max deadline).</li>
                                <li><b>Step 3:</b> For each job, repeat steps 4-7:</li>
                                <li><b>Step 4:</b> Copy, j {"<-"} current Deadline.</li>
                                <li><b>Step 5:</b> While j{">="}0 and the Gantt slot at deadline j is occupied, decrement j.</li>
                                <li><b>Step 6:</b> Place the job in the earliest available slot if empty.</li>
                            </ul>
                        </div>

                        {/* Theory explanation section */}
                        <p className="f1-5 mUpL">
                            <b className="hightText">Theory</b>
                            <ol className="ols mUpS f1-3">
                                <li>
                                    {/* Textual explanation */}
                                    <div className="mUpL"></div>
                                    <p className="mUpM">
                                        In job scheduling, the objective is to schedule jobs to maximize the total profit while adhering to deadlines. The greedy strategy selects jobs with the highest profit, ensuring that no job's deadline is violated.
                                    </p>
                                    <p className="mUpM">This method outputs the subset of jobs that yield the highest possible profit within the constraints.</p>

                                    {/* Summary of steps */}
                                    <div className="f1">
                                        <p className="mUpM" style={{ marginLeft: "2rem" }}>
                                            <ul>
                                                &nbsp;<li>Find the maximum deadline among jobs.</li>
                                                &nbsp;<li>Sort jobs based on their profits.</li>
                                                &nbsp;<li>Select jobs for the schedule respecting their deadlines.</li>
                                            </ul>
                                        </p>

                                        {/* Step-by-step visual example */}
                                        <p className="mUpM"><b>Example</b></p>
                                        <p className="mUpM">Given the following jobs, deadlines, and profits:</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1em" }}>
                                            <img className="im1 kim1" src={jss1} alt="Job Scheduling Example"></img>
                                        </div>

                                        {/* Images with each scheduling step */}
                                        <p className="mUpM"><b>Step 1:</b> Sort jobs by profit.</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1" src={jss2} alt="Sorted Jobs by Profit"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 2:</b> Draw a Gantt chart with maximum time equal to the highest deadline (5 in this case).</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1" src={jss3} alt="Gantt Chart"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 3:</b> Schedule Job J4 at its latest possible slot before the deadline (2).</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1"  src={jss4} alt="Job J4 Scheduled"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 4:</b> Schedule Job J1 at its deadline (5).</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1"  src={jss5} alt="Job J1 Scheduled"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 5:</b> Schedule Job J3 at the first available slot before its deadline (3).</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1"  src={jss6} alt="Job J3 Scheduled"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 6:</b> Schedule Job J2 before its deadline (3).</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1" src={jss7} alt="Job J5 Scheduled"></img>
                                        </div>

                                        <p className="mUpM"><b>Step 7:</b> Schedule Job J5 before its deadline (4) in the available slot.</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1" src={jss8} alt="Job J2 Scheduled"></img>
                                        </div>

                                        {/* Final result */}
                                        <p className="mUpM"><b>Maximum Earned Profit = 990 units.</b></p>
                                    </div>
                                </li>

                                {/* Time complexity explanation */}
                                <li>
                                    <div className="mUpL"></div>
                                    <b>Time Complexity</b>
                                    <p className="mUpM">The time complexity of the job scheduling algorithm is O(n²) in the worst case, where all slots must be checked for each job.</p>
                                </li>
                            </ol>
                        </p>
                    </motion.div>
                </section>
            </div>

            {/* Footer component */}
            <Footer />
        </>
    );
}

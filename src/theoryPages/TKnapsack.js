import { useNavigate } from "react-router-dom";
import FNavbar from "../components/FNavbar";
import Navbar from "../components/Navbar";
import "../css/Theory.css";
import { motion } from "framer-motion";
import Footer from "../components/Footer.js";
import kss1 from "../img/knapsack/kss1.png";
import { AppState } from "../context/appContext";
import { expR } from "../data/expRoutes";

export default function TKnapsack() {

    const navigate = useNavigate();

    const naviTo = (toLink) => {
        navigate("/" + toLink + "/simulator");
    }

    const { cuE, algoT } = AppState();
    const [currE, setCE] = cuE;

    return (
        <>
            <Navbar />
            <FNavbar />
            <div className="fullbg fullbgHOME dcontainer">
                <section className="sectionsT mUpL">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="f1-5 mUpL">
                            <b className="hightText1">Knapsack Problem</b> involves determining the most valuable combination of items that can be included in a knapsack without exceeding its weight capacity. It’s an optimization problem where we aim to maximize profit.
                        </p>
                        <button className="goToSim mUpL" onClick={() => { naviTo(expR[currE[0]][currE[1]][1]) }}>Go to Simulator</button>
                        <div className="mUpL"></div>
                        <b className="mUpL f1-5">Algorithm</b>
                        <div className="mUpM algorithm">
                            <p>
                                Dynamic-0-1-knapsack (v, w, n, W)<br />
                                for w = 0 to W do<br />
                                &nbsp;&nbsp;c[0, w] = 0<br />
                                for i = 1 to n do<br />
                                &nbsp;&nbsp;c[i, 0] = 0<br />
                                for w = 1 to W do<br />
                                &nbsp;&nbsp;    if wi ≤ w then<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;        if vi + c[i-1, w-wi] then<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            c[i, w] = vi + c[i-1, w-wi]<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;        else c[i, w] = c[i-1, w]<br />
                                &nbsp;&nbsp;    else<br />
                                &nbsp;&nbsp; &nbsp;       c[i, w] = c[i-1, w]<br />
                            </p>
                        </div>
                        <p className="f1-5 mUpL">
                            <b className="hightText">Theory</b>
                            <ol className="ols mUpS f1-3">
                                <li>
                                    <div className="mUpL"></div>

                                    <p className="mUpM">In this problem, we are given items with specific weights and values. The goal is to maximize the profit while ensuring that the total weight of selected items does not exceed the knapsack's capacity.</p>
                                    <p className="mUpM">
                                        <ul>
                                            <li>The items are indivisible, meaning you cannot take fractions of items.</li>
                                            <li>You either take an item in full or leave it entirely.</li>
                                            <li>The problem is solved using dynamic programming.</li>
                                        </ul>
                                    </p>
                                    <p className="mUpM">For example, if the knapsack has a weight capacity of 20 kg, we must select items in such a way that the total weight does not exceed 20 kg, and the profit is maximized.</p>

                                    <div className="f1">
                                        <p className="mUpM">Consider-<br />
                                            Knapsack weight capacity = W<br />
                                            Number of items, each with specific weights and values = n<br />
                                            Step-01:<br />
                                            Draw a table with (n+1) rows and (W+1) columns.<br />
                                            Initialize the 0th row and 0th column with zeroes.<br />
                                            Example:</p>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                            <img className="im1 kim1" style={{ width: "55vw" }} src={kss1} alt="Knapsack Table"></img>
                                        </div>
                                        <p className="mUpM">Step-02:<br />
                                            Fill the table row by row from top to bottom and left to right using this formula:<br />
                                            T(i, j) = max [ T(i-1, j), valuei + T(i-1, j – weighti) ]<br />
                                            T(i, j) gives the maximum value if we can take items 1 to i, and j is the weight limit.<br />
                                            Once the table is fully filled, the last cell gives the maximum possible profit for the knapsack.<br />
                                        </p>

                                        <p className="mUpM">Step-03:<br />
                                            <ul>
                                                <li>Examine the last column from bottom to top.</li>
                                                <li>If the value differs from the entry immediately above it, that item should be included in the knapsack.</li>
                                                <li>Repeat this until the necessary items are identified.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="mUpL"></div>
                                    <b>Time Complexity</b>
                                    <p className="mUpM">This algorithm runs in O(nW) time, where n is the number of items and W is the knapsack capacity. Each entry in the table is computed in constant time, making it efficient for larger problems.</p>
                                </li>
                            </ol>
                        </p>

                        <p className="f1-5 mUpL">
                            <b className="hightText">Applications of Dynamic Programming</b>
                            <ul className="ols mUpS f1-3">
                                <li>Machine scheduling</li>
                                <li>Space allocation</li>
                                <li>Asset optimization</li>
                            </ul>
                        </p>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    );
}

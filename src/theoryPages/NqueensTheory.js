import { useNavigate } from "react-router-dom";
import FNavbar from "../components/FNavbar";
import Navbar from "../components/Navbar";
import "../css/Theory.css";
import { motion } from "framer-motion";
import Footer from "../components/Footer.js";
import queen4 from "../img/nqueens/4queen.png"
import Fst1 from "../img/nqueens/4st1.png"

import allst from "../img/nqueens/allstep4.webp"
import queen8 from "../img/nqueens/8queen.png"
import { AppState } from "../context/appContext";
import { expR } from "../data/expRoutes";

export default function NqueensTheory() {

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
                <b className="hightText1">Backtracking</b> is a recursive algorithmic technique used to solve problems by trying to construct a solution incrementally, step by step, and removing solutions that fail to meet the problem’s constraints at any given point.
            </p>

            <p className="f1-5 mUpL">
                <b className="hightText">N-Queens Problem</b>
                <ol className="ols mUpS f1-3">
                    <li>
                        The N-Queens problem involves placing N queens on an N×N chessboard such that no two queens can attack each other.
                    </li>
                </ol>
            </p>

            <p className="nUpM hightText f1-5"><b>Algorithm for N-Queens</b></p>
            <div className="algorithm mUpM">
                <p>
                    function solveNQueens(board, col, n):<br />
                    if col {">="} n:<br />
                    &nbsp; &nbsp;  print the board<br />
                    &nbsp; &nbsp;  return true<br />
                    for each row from 0 to n-1:<br />
                    &nbsp; &nbsp;  if isSafe(board, row, col, n):<br />
                    &nbsp; &nbsp; &nbsp;  place the queen at board[row][col] = 1<br />
                    &nbsp; &nbsp; &nbsp;  if solveNQueens(board, col+1, n):<br />
                    &nbsp; &nbsp; &nbsp; &nbsp;  return true<br />
                    &nbsp; &nbsp; &nbsp;  remove queen at board[row][col] = 0<br />
                    return false<br />

                    function isSafe(board, row, col, n):<br />
                    &nbsp; &nbsp;  for i from 0 to col-1:<br />
                    &nbsp; &nbsp; &nbsp;  if board[row][i] == 1:<br />
                    &nbsp; &nbsp; &nbsp; &nbsp;  return false<br />
                    &nbsp; &nbsp;  for i, j from row-1, col-1 to 0, 0 (diagonal check):<br />
                    &nbsp; &nbsp; &nbsp;  if board[i][j] == 1:<br />
                    &nbsp; &nbsp; &nbsp; &nbsp;  return false<br />
                    &nbsp; &nbsp;  for i, j from row+1, col-1 to n-1, 0 (diagonal check):<br />
                    &nbsp; &nbsp; &nbsp;  if board[i][j] == 1:<br />
                    &nbsp; &nbsp; &nbsp; &nbsp;  return false<br />
                    &nbsp; &nbsp;  return true<br />

                    board = empty NxN chessboard<br />
                    solveNQueens(board, 0, N)
                </p>
            </div>

            <p className="f1-5 mUpL">
                <b className="hightText">Explanation of the N-Queens Problem with 4x4 and 8x8 Chessboards</b>
                <ol className="ols mUpS f1-3">
                    <li>
                        <div className="mUpL"></div>
                        <b>4x4 Queen Example</b>
                        <p className="mUpM">
                            In a 4x4 chessboard, the task is to place 4 queens such that none of them share the same row, column, or diagonal. The problem requires exploring different possibilities and backtracking when a solution isn't valid.
                        </p>
                        <p className="mUpM">
                            Starting with the first queen in the first row and column, each subsequent queen must be placed in a different row and column while avoiding diagonals.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                            <img className="im1 kim1" src={Fst1}></img>
                        </div>
                        <div className="f1">
                            <p className="mUpM">
                                If the second queen is placed in a conflicting position, such as on the same diagonal, it’s necessary to backtrack and reposition the previous queen. This ensures all queens are safely placed.
                            </p>
                            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                                <img className="navImg" style={{ width: "55vw" }} src={allst}></img>
                            </div> */}
                        </div>
                        <div className="mUpM">
                            <p><b>Final Solution:</b></p>
                            <img className="im1 mUpM" src={queen4}></img>
                        </div>
                    </li>

                    <li>
                        <div className="mUpL"></div>
                        <div className="mUpL"></div>
                        <b>8x8 Queen Example</b>
                        <p className="mUpM">
                            The 8-Queens problem extends the same logic to an 8x8 board. The objective is to place 8 queens so that none of them can attack each other. The algorithm follows the same pattern as the 4-Queens problem, using recursive backtracking to place each queen in a valid position.
                        </p>
                        <p className="mUpM">
                            If two queens are placed at positions (i, j) and (k, l), they are considered on the same diagonal if |i-k| equals |j-l|, which is checked during the placement process.
                        </p>
                        <div className="mUpM" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5em" }}>
                            <img className="im1 kim1"    src={queen8}></img>
                        </div>
                    </li>

                    <li>
                        <div className="mUpL"></div>
                        <div className="mUpL"></div>
                        <b>Time Complexity</b>
                        <p className="mUpM">
                            The N-Queens algorithm has a time complexity of O(N!), as the recursive function explores all possible configurations and backtracks when necessary. The time complexity arises from the factorial nature of the problem, where the number of possible placements decreases with each recursive call.
                        </p>
                        <p className="mUpM">
                            The recurrence relation for this algorithm is: T(n) = O(n²) + n * T(n-1).
                        </p>
                    </li>
                </ol>
            </p>

            <p className="f1-5 mUpL">
                <b className="hightText">Applications of the N-Queens Algorithm</b>
                <ul className="ols mUpS f1-3">
                    <li>Road network design</li>
                    <li>Railway network planning</li>
                    <li>Airline network optimization</li>
                </ul>
            </p>

                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    )
}
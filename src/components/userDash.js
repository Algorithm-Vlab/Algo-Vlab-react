import { useNavigate } from "react-router-dom";
import { AppState } from "../context/appContext";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { animate, color, delay, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCross, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AlgoPer } from "../funcs/AlgoP";
import { algosData } from "../data/algos";

export default function UserDash() {
    const { cuE, algoT, userD } = AppState();
    const [currE, setCE] = cuE;
    const [algoTC, setAlgoT] = algoT;
    const [uDY, setuDY] = useState();
    const [feedD, setFeedD] = useState();
    const navigate = useNavigate();
    const timer = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        const updateUser = async () => {
            await timer(500);
            await axios.get("http://localhost:5013/y/user/g", {
                withCredentials: true
            })
                .then((data) => {
                    setuDY(data.data);
                    // console.log(data.data);
                })
                .catch((err) => {
                    // setuDY(false);
                })
        }
        updateUser();
    }, []);

    return (
        <>
            <Navbar />
            <div className="fullbg fullbgHOME dcontainer ">
                <section className="sectionsT">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {uDY ?
                            <>
                                <div className="divf divudInfo">
                                    <div className="uDashInfo">
                                        <p className="f2 cNavy"><b>Welcome {uDY.name}</b></p>
                                        <p className="f1-3"><b>{uDY.email}</b></p>
                                    </div>


                                    <div className="uDashInfo">
                                        <p className="f1-5 mUpM"><span style={{ color: "black" }}>Institute</span>: <b>{uDY.institution}</b></p>
                                        <p className="f1-5"><span style={{ color: "black" }}>Department</span>: <b>{uDY.department}</b></p>
                                    </div>
                                </div>


                                <div className="dividerT1 mUpS"></div>
                                {uDY.algoPerformed && uDY.algoPerformed.length > 0 ?

                                    <>
                                        <p className="mUpM f2">No. of Experiments Performed: {uDY.algoPerformed.length}</p>
                                    </>
                                    : <>
                                        <p className="mUpM f2">No. of Experiments Performed: 0</p>
                                    </>
                                }
                                <div className="ftContainer">
                                    <table className="feedT">
                                        <thead className="bgHead">
                                            <td className="f1-5"><b>Algorithm</b></td>
                                            <td className="f1-5"><b>Performed</b></td>
                                            <td className="f1-5"><b>Feedback</b></td>
                                        </thead>
                                        {algosData.map((el, index) => {
                                            return (
                                                <tr>
                                                    <td><b>{el}</b></td>
                                                    {uDY.algoPerformed.includes(el) ?
                                                        <td><FontAwesomeIcon icon={faCheck} /></td>
                                                        :
                                                        <td><FontAwesomeIcon icon={faXmark} /></td>
                                                    }
                                                    {uDY.feedP.includes(algosData[index]) ?
                                                        <td><FontAwesomeIcon icon={faCheck} /></td>
                                                        : <td><FontAwesomeIcon icon={faXmark} /></td>
                                                    }

                                                </tr>
                                            )

                                        })}

                                    </table>
                                </div>
                                {/* <button onClick={() => { AlgoPer({ algoName: "N-Queens" }) }}>Submit</button> */}
                            </>
                            :
                            <div className="divf loader1">
                                <div class="lds-dual-ring"></div>
                            </div>
                        }
                    </motion.div>
                </section>

            </div >
            <Footer />
        </>

    );
}
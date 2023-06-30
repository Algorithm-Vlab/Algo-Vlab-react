import { useNavigate } from "react-router-dom";
import { AppState } from "../../context/appContext";
import { useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useState } from "react";
import "../../css/dash.css";
import Footer from "../Footer";
import download from "downloadjs";

export default function AFeedbacks() {
    const { cuE, algoT, userD } = AppState();
    const [currE, setCE] = cuE;
    const [algoTC, setAlgoT] = algoT;
    const [uD, setUD] = userD;

    const [fData, setFData] = useState();
    const timer = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeeds = async () => {
            await timer(300);
            await axios.get("http://localhost:5013/y/admin/dash", {
                withCredentials: true
            })
                .then((data) => {
                    // console.log(data.data);
                    setFData(data.data);
                })
                .catch((err) => {

                });
        }

        fetchFeeds();
    }, []);


    const downEx = async () => {
        try {
            const authA = await axios.get("http://localhost:5013/y/admin/auth", { withCredentials: true })
                .then(async (data) => {
                    // console.log(data.data);
                    const res = await fetch("http://localhost:5013/y/admin/exportE")
                    const blob = await res.blob();
                    download(blob, 'exportd.xlsx');
                })
                .catch((err) => {
                    // 
                })
        } catch (error) {
            // 
        }

    }

    return (
        <>
            <Navbar />
            <div className="fullbgHOME dashBg">
                {uD ?
                    <section className="divf dashS1">
                        <p className="f2 cNavy tCenter"><b>Welcome {uD.name}[Admin]</b></p>
                        <p className="f1-3"><b>{uD.email}</b></p>
                        <div className="divf mUpL">
                            <button className="spec" onClick={() => { navigate("/admin/user-details") }}>User Details</button>
                            <button className="spec" onClick={() => { navigate("/admin/feedbacks") }}>Feedback</button>
                        </div>
                        <div className="divider"></div>
                        <p className="f3 mUpL"><b>Feedbacks</b></p>

                        {fData ?
                            <>
                                <p className="f1-5 mUpM"><b>Total Feedbacks: {fData.length}</b></p>
                                <button className="spec floR mUpL" onClick={() => { downEx() }}>Download Excel</button>
                                <div className="ftContainer">
                                    <table className="feedT">
                                        <thead className="bgHead">
                                            <td className="f1-5"><b>Sr.No.</b></td>
                                            <td className="f1-5"><b>Name</b></td>
                                            <td className="f1-5"><b>Email</b></td>
                                            <td className="f1-5"><b>Date</b></td>
                                            <td className="f1-5"><b>Institute</b></td>
                                            <td className="f1-5"><b>Department</b></td>
                                            <td className="f1-5"><b>Designation</b></td>
                                            <td className="f1-5"><b>Algorithm</b></td>
                                            <td className="f1-5"><b>Ease of understanding of concept using virtual lab</b></td>
                                            <td className="f1-5"><b>Simulation is easy and step by step</b></td>
                                            <td className="f1-5"><b>Relevant theory is provided for all experiments</b></td>
                                            <td className="f1-5"><b>Operating the website is easy and convenient </b></td>
                                            <td className="f1-5"><b>Any difficulties during performing the experiments?</b></td>
                                            <td className="f1-5"><b>Suggestions for further improvement </b></td>
                                            <td className="f1-5"><b>Experiment that can be added and not available in existing Algorithms VLAB.</b></td>
                                        </thead>
                                        {fData && fData.map((el, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{el.userId.name}</td>
                                                <td>{el.userId.email}</td>
                                                <td>{el.dateP}</td>
                                                <td>{el.institute}</td>
                                                <td>{el.department}</td>
                                                <td>{el.designation}</td>
                                                <td>{el.algoName}</td>
                                                <td>{el.q1}</td>
                                                <td>{el.q2}</td>
                                                <td>{el.q3}</td>
                                                <td>{el.q4}</td>
                                                <td>{el.q5}</td>
                                                <td>{el.q6}</td>
                                                <td>{el.q7}</td>
                                            </tr>
                                        })
                                        }
                                    </table>


                                </div>
                            </>
                            :
                            <div className="divf loader1">
                                <div class="lds-dual-ring"></div>
                            </div>
                        }
                    </section>

                    :
                    <></>
                }
            </div>
            <Footer />
        </>

    );
}
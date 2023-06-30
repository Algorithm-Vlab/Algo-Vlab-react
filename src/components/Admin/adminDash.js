import { useNavigate } from "react-router-dom";
import { AppState } from "../../context/appContext";
import { useEffect } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useState } from "react";
import "../../css/dash.css";
import Footer from "../Footer";
import download from "downloadjs";

export default function AdminDash() {
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
            const res = await fetch("http://localhost:5013/y/admin/exportE")
            const blob = await res.blob();
            download(blob, 'exportd.xlsx');
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
                    </section>
                    :
                    <></>
                }
            </div>
            <Footer />
        </>

    );
}
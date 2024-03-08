import axios from "axios";
import { useState } from "react"
import { Form, useNavigate } from "react-router-dom";
import { AppState } from "../../context/appContext";
import { useEffect } from "react";
import "../../css/Theory.css";
import "../../css/login.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
<<<<<<< HEAD
=======
import Swal from "sweetalert2";
import { ErrNoti, SuccNoti } from "../../funcs/swals";
>>>>>>> frontend

export default function FPUser() {
    const [uemail, setuemail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const { userD } = AppState();

    const [uD, setUD] = userD;

    useEffect(() => {
        const fetchCPExists = async () => {
            const cpExists = await axios.get("")
        }
    }, [])

    async function reqPassChange(uData) {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        if (!uData.email) {
            window.alert("Please enter email id!");
            return;
        }
        try {
<<<<<<< HEAD
            await axios.post("http://localhost:5013/y/user/auth/account/login/forgot-password/send-mail", uData, {
=======
            retId("changePL").setAttribute("disabled", "disabled");
            await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/y/user/auth/account/login/forgot-password/send-mail`, uData, {
>>>>>>> frontend
                withCredentials: true
            }, config)
                .then((data) => {
                    console.clear();
<<<<<<< HEAD
                    window.alert("Link has been sent to your email!");
                    navigate("/login");
                })
                .catch((err) => {
                    console.clear();
                    const errs = err.response.data.error;
                    for (var i = 0; i < errs.length; i++) {
                        window.alert(errs[i]);
                    }
                })
        }
        catch (err) {
            console.clear();
            window.alert(err);
=======
                    const doN = async () => {
                        const resultS = await SuccNoti({ title: "Link has been sent to your email!", message: "Please check your inbox!" })
                        if (resultS.isConfirmed) {
                            navigate("/login");
                        }
                        else {
                            navigate("/login");
                        }
                    }
                    doN();
                })
                .catch((err) => {
                    retId("changePL").removeAttribute("disabled");
                    console.clear();
                    if (!err.response) {
                        ErrNoti({ errMessage: "Some error occurred, Please try again!" })
                        return;
                    }
                    const errs = err.response.data.error;
                    ErrNoti({ errMessage: errs })
                })
        }
        catch (err) {
            retId("changePL").removeAttribute("disabled");
            console.clear();
            ErrNoti({ errMessage: "Some error occurred, Please try again!" })
>>>>>>> frontend
        }
    }

    function subForm(e, tId) {
        var f = document.getElementsByTagName('form')[0];
        var em = uemail;
        if (f.reportValidity()) {
            e.preventDefault();
            reqPassChange({
                email: em,
            });
        }
        else {
            e.preventDefault();
            return;
        }
    }

    useEffect(() => {
        if (uD) {
            navigate("/");
        }
    }, [uD]);

    function retId(idName) {
        return document.getElementById(idName);
    }

    useEffect(() => {
        if (!uemail) {
            retId("iduemail").classList.remove("valid");
            retId("iduemail").classList.add("notValid");
            retId("changePL").setAttribute("disabled", "disabled");
        }
        else {
            retId("iduemail").classList.add("valid");
            retId("iduemail").classList.remove("notValid");
            retId("changePL").removeAttribute("disabled");
        }
    }, [uemail]);

    return (
        <>
            <Navbar />
            <div className="fullbgHOME divf loginBG">
                <div className="divf loginCard fpCard">
                    <div className="lOptions">
                        <button id="studentS"
                            className="wFullBL"
                        >Student</button>
                    </div>
                    <div id="userForm">
                        <form className="divf logC" id="uForm">
<<<<<<< HEAD
                            <p className="f1-5 wLogin"><b>Forgot Password? Enter email id, and change the password from the link you receive in your mailbox!</b></p>
=======
                            <p className="f1-5 wLogin"><b>Forgot Password? Enter email id</b></p>
>>>>>>> frontend
                            <div className="takeInD" id="userI1">
                                <input required pattern="[^ @]*@[^ @]*" value={uemail} placeholder="email" type="email" id="iduemail" className="lIns" onChange={(e) => { setuemail(e.target.value); }} ></input>
                                <b className="hideL">email</b>
                            </div>
<<<<<<< HEAD
=======
                            <div>
                                <p className="wLogin"><b>You will receive a link in your mailbox for changing your password</b></p>
                            </div>
>>>>>>> frontend
                            <button type="submit" id="changePL" className="goLogB fpBut" onClick={(e) => { subForm(e, e.target.id) }}>Send me a Mail</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
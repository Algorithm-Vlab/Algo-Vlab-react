// This page contains the logic for verifying account

// importing components
import { useNavigate, useParams } from "react-router-dom";

// import UI Components and icons
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import giphC from "../../img/giphy.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ErrNoti, SuccNoti } from "../../funcs/swals";

export default function VAccount() {
    // state declarations
    const pToken = useParams();
    const [texist, setTExist] = useState(0);
    const [aVerified, setAVerified] = useState(0);

    // handle navigations
    const navigate = useNavigate();

    // verify token
    useEffect(() => {
        const fetchTT = async () => {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/y/user/auth/account/verify/g`, { token: pToken.tt })
                .then((data) => {
                    console.clear();
                    setTExist(1);
                })
                .catch((err) => {
                    console.clear();
                    setTExist(0);
                })
        }
        fetchTT();
    }, []);

    // verify account logic
    const doVerifyAcc = async () => {
        await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/y/user/auth/account/verify/g/do`, { token: pToken.tt })
            .then((data) => {
                console.clear();
                const doN = async () => {
                    const resultS = await SuccNoti({ title: "Account Verified!", message: "Your account has been successfully verified! You can proceed to Login!" })
                    if (resultS.isConfirmed) {
                        navigate("/login");
                    }
                    else {
                        // navigate("/login");
                    }
                }
                doN();
                setAVerified(1);
            })
            .catch((err) => {

                // handle errors
                console.clear();
                if (!err.response) {
                    ErrNoti({ errMessage: "Some error occurred, Please try again!" })
                    return;
                }
                const errs = err.response.data.error;
                ErrNoti({ errMessage: errs })
            })
    }

    // JSX Components declarations

    return (
        <>
            <Navbar />
            <div className="fullbg fullbgHOME">
                {texist ?
                    <>
                        {aVerified ?
                            // if account verified then show this
                            <>
                                <p className="f2 tCenter"><b>Your Account has been successfully verified, you can proceed to Login</b></p>
                                <button className="spec" onClick={() => { navigate("/login") }}>Login</button>
                            </>
                            : <>
                                <p className="f2 tCenter"><b>Thank you for registering, please verify your account by clicking here</b></p>
                                <div className="mUpM divVA1 divf">
                                    <img src={giphC} className="inVA1"></img>
                                    <button onClick={doVerifyAcc} className="inVBut">Verify</button>
                                </div>
                            </>
                        }

                    </>
                    :
                    // if account not verified then show this
                    <>
                        <FontAwesomeIcon className="f4" icon={faSadTear} />
                        <p className="f2 mUpL"><b>Either Verification link doesn't exist, or is expired!</b></p>

                    </>
                }
            </div >

            {/* Footer Component */}
            <Footer />
        </>
    )
}
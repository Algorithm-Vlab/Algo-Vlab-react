import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { animate, delay, motion } from "framer-motion";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import algo1 from "../img/algo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArrowUpShortWide, faAtom, faBackwardFast, faEquals, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import AboutUs from "../components/aboutus";

function Home() {


    const navigate = useNavigate();

    const naviTo = (toLink) => {
        navigate("/" + toLink);
    }

    function retElId(idname) {
        return document.getElementById(idname);
    }

    function scrollTo(id) {
        // retElId(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Navbar />
            <motion.div className="fullbg fullbgHOME">
                <motion.section className="homeSect sect1"
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img className="algoPic" src={algo1}></img>
                    <div className="divTitle">
                        <p className="homeTitle">Welcome to Virtual Lab for Algorithms
                            <span className="effect"></span>
                        </p>
                    </div>
                </motion.section>
                <motion.section className="homeSect sect2"
                    initial={{ opacity: 0, }}
                    // animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    whileInView={{opacity: 1}}
                >
                    <div className="boxS">
                        <button className="cards" name="sorting" onClick={() => { naviTo("sorting") }}>
                            <FontAwesomeIcon icon={faArrowUpShortWide} className="algoIcon" />
                            <p className="algoName">Sorting</p>
                        </button>
                        <button className="cards" name="greedy" onClick={() => { naviTo("greedy") }}>
                            <FontAwesomeIcon icon={faPersonRunning} className="algoIcon" />
                            <p className="algoName">Greedy</p>
                        </button>
                        <button className="cards" name="dynamic-pro" onClick={() => { naviTo("dynamic") }}>
                            <FontAwesomeIcon icon={faAtom} className="algoIcon" />
                            <p className="algoName">Dynamic Programming</p>
                        </button>
                        <button className="cards" name="dynamic-pro" onClick={() => { naviTo("backtracking") }}>
                            <FontAwesomeIcon icon={faBackwardFast} className="algoIcon" />
                            <p className="algoName">Backtracking</p>
                        </button>
                        <button className="cards" name="dynamic-pro" onClick={() => { naviTo("string-match") }}>
                            <FontAwesomeIcon icon={faEquals} className="algoIcon" />
                            <p className="algoName">String Matching</p>
                        </button>
                    </div>

                </motion.section>
                
                <AboutUs />
            </motion.div>
            
            <Footer />
        </>
    );
}

export default Home;
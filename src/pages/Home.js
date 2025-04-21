// Importing required dependencies and components
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import { animate, delay, motion } from "framer-motion"; // Animation library for React
import "../css/Home.css"; // CSS file for Home page styling
import Navbar from "../components/Navbar"; // Navbar component
import algo1 from "../img/acLogo3.png"; // Image used in the homepage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for icons
import { faAddressCard, faArrowUpShortWide, faAtom, faBackwardFast, faEquals, faPersonRunning } from "@fortawesome/free-solid-svg-icons"; // Specific icons used
import Footer from "../components/Footer"; // Footer component
import AboutUs from "../components/aboutus"; // AboutUs section component

function Home() {

    const navigate = useNavigate(); // Hook for navigating between routes

    // Helper function to navigate to the specific route
    const naviTo = (toLink) => {
        navigate("/" + toLink); // Navigates to path like "/sorting", "/greedy", etc.
    }

    // Returns an element by ID (not currently used)
    function retElId(idname) {
        return document.getElementById(idname);
    }

    // Smooth scroll to a section (commented out)
    function scrollTo(id) {
        // retElId(id).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Navbar /> {/* Top navbar component */}
            <motion.div className="fullbg fullbgHOME"> {/* Page container with background */}
                
                {/* Section 1: Title and welcome message */}
                <motion.section className="homeSect sect1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <img className="algoPic" src={algo1}></img> {/* Logo image */}
                    <div className="divTitle">
                        <p className="homeTitle">
                            Welcome to Virtual Lab for Algorithms
                            <span className="effect"></span> {/* Decorative animation effect */}
                        </p>
                    </div>
                </motion.section>

                {/* Section 2: Cards for different algorithm categories */}
                <motion.section className="homeSect sect2">
                    <div className="boxS">
                        {/* Card 1: Sorting */}
                        <motion.button className="cards" name="sorting" onClick={() => { naviTo("sorting") }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faArrowUpShortWide} className="algoIcon" />
                            <p className="algoName">Sorting</p>
                        </motion.button>

                        {/* Card 2: Greedy */}
                        <motion.button className="cards" name="greedy" onClick={() => { naviTo("greedy") }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faPersonRunning} className="algoIcon" />
                            <p className="algoName">Greedy</p>
                        </motion.button>

                        {/* Card 3: Dynamic Programming */}
                        <motion.button className="cards" name="dynamic-pro" onClick={() => { naviTo("dynamic") }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faAtom} className="algoIcon" />
                            <p className="algoName">Dynamic Programming</p>
                        </motion.button>

                        {/* Card 4: Backtracking */}
                        <motion.button className="cards" name="dynamic-pro" onClick={() => { naviTo("backtracking") }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faBackwardFast} className="algoIcon" />
                            <p className="algoName">Backtracking</p>
                        </motion.button>

                        {/* Card 5: String Matching */}
                        <motion.button className="cards" name="dynamic-pro" onClick={() => { naviTo("string-match") }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FontAwesomeIcon icon={faEquals} className="algoIcon" />
                            <p className="algoName">String Matching</p>
                        </motion.button>
                    </div>
                </motion.section>

                {/* Optional middle section for responsiveness info (currently commented out) */}
                {/* 
                <section className="sectM divf">
                    <div className="divf ddM">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.p className="mt1">Be it a 15 inch Laptop or</motion.p>
                            <motion.p className="mt1">a 6 inch Mobile Phone</motion.p>
                        </motion.div>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            className="mt2 mUpL"
                        >
                            Access the simulators on any device, <span className="hightText">there should be no hindrance to learning!</span>
                        </motion.p>
                    </div>
                </section> 
                */}

                <AboutUs /> {/* About Us section */}
            </motion.div>

            <Footer /> {/* Footer section */}
        </>
    );
}

export default Home;

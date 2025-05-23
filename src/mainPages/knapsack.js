// This is Knapsack Page

// import components
import FNavbar from "../components/FNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// export JSX Component
export default function Knapsack() {
    return (
        <>
            <Navbar />
            <FNavbar />
            <div className="fullbg">
                <h1>Aim: 0/1 Knapsack</h1>
            </div>
            <Footer />
        </>
    )
}
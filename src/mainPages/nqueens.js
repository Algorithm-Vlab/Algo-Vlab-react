// This is N Queens Page

// import components
import FNavbar from "../components/FNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// export JSX Component
export default function Nqueens() {
    return (
        <>
            <Navbar />
            <FNavbar />
            <div className="fullbg">
                <h1>Aim: N-queens</h1>
            </div>
            <Footer />
        </>
    )
}
// In case of 404 error show this not found page

// importing UI components, icons and assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FNavbar from "../components/FNavbar";
import Navbar from "../components/Navbar";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import "../css/Home.css"
import Footer from "./Footer";
import notf1 from "../img/404I1.png";


// Not Found Page JSX
export default function PageNotFound() {
    return (
        <>
            <Navbar />
            <div className="fullbgHOME notFound divf divfC">
                <p className="f1-5"><b>Error 404</b></p>
                <img src={notf1} className="nfound1" />
                <p className="f1-5"><b>Page Not Found!</b></p>
            </div>

            {/* Footer Component */}
            <Footer />
        </>
    )
}
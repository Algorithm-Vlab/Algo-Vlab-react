// Arrow component logic

// import icons and components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// JSX Logic
function Arrow() {
    return (
        <FontAwesomeIcon className="upArrow" icon={faArrowUp} />
    )
}

// export as JSX component
export default Arrow;

import React from "react";
import ReactDOM from "react-dom";
function Overlay() {
    return ReactDOM.createPortal((
        <div
            className="fixed left-0 top-0 right-0 bottom-0 bg-sky-100"
            style={{ backgroundColor: "rgba(9, 30, 66, 0.54)" }}

        ></div>
    ),document.getElementById('overlay'));
}

export default Overlay;

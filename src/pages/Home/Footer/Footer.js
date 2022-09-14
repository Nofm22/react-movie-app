import React from "react";
import "../../../assets/Img/footer-bg.jpg";
function Footer() {
    return (
        <footer className="h-screen w-screen relative">
            <div
                className="w-full h-[3rem] bg-top bg-cover bg-no-repeat p-64"
                id="footer"
                style={{
                    backgroundImage:
                        "url(" +
                        require("../../../assets/Img/footer-bg.jpg") +
                        ")",
                }}
            ></div>
        </footer>
    );
}

export default Footer;

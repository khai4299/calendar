import React from "react";
const logo = require("../../../assets/logo.png");

const Logo = () => {
    return (
        <div className="head">
            <img src={logo} alt="" className="logo" />
            <div className="title">
                <span>DIGITAL</span>
                <small>management</small>
            </div>
        </div>
    );
};

export default Logo;

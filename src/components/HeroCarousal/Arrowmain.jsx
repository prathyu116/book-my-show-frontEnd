import React from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (

        <RiArrowRightSLine
            className={className}
            style={{ ...style,  color: "white", background: "grey", width: "50px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", zIndex: "99", marginRight: "-3%", padding: "10px",top:"40%" }}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <RiArrowLeftSLine
            className={className}
            style={{ ...style, top:"40%",color: "white", background: "grey", width: "50px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", zIndex: "99", marginLeft: "-3%", padding: "10px" }}
            onClick={onClick}
        />
    );
}
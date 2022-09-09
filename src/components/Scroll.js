import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "0.5px solid gray", height: "900px"}}>
            {props.children}
        </div>
    )
};

export default Scroll;
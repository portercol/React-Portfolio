import React from "react";

function Button(props) {
    return (
        <div className="d-flex justify-content-center mt-5">
            <a href={props.link}>
                <button className="btn btn-lg btn-dark">
                {props.btnText}
                </button>
            </a>
        </div>
    );
}

export default Button;
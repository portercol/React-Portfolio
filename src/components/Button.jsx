// import React
import React from "react";

// create Button functional component and use props to set properties on the btn
function Button(props) {

    // return data to the page using props.link and props.btnText
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

// export Button component
export default Button;
import React from "react";
import Button from "../Button";

function About() {
    
    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="card mt-3 p-4 w-50">
                    <h1 className="card-title text-center">Collin Porter</h1>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <img src="/images/IMG_2720.jpeg" className="img-fluid w-75 about-img" alt="Profile Pic"></img>
                    </div>
                    <hr/>
                    <div className="card-body text-center">
                       
                    </div>
                </div>
            </div>
            <Button btnText="portfolio" link={"/portfolio"}/>
        </div>
    );
}

export default About;
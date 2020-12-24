import React from "react";
import Button from "../Button";

function About() {

    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="card mt-3 p-4 w-50">
                    <h2 className="card-title text-center">Collin Porter</h2>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <img src="/images/IMG_2720.jpeg" className="img-fluid w-75 about-img" alt="Profile Pic"></img>
                    </div>
                    <hr />
                    <div className="card-body text-center">
                        <p className="card-text">I'm an outdoor enthusiast who loves to adventure all over the state of Utah.</p>
                        <p className="card-text">I have 6+ years experience in the Behavioral Health Industry.</p>
                        <p className="card-text">I’m pursuing a career as a Full Stack Web Developer.</p>
                    </div>
                </div>
            </div>
            <Button btnText="portfolio" link={"/portfolio"} />
        </div>
    );
}

export default About;
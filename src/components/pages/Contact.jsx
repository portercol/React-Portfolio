// import React and Button component
import React from "react";
import Button from "../Button";

// create Contact functional component
function Contact() {
    
    // return data to page using cards that hold email, location, name, github link, linkedIn link, resume and buttons to take user to those links
    return (
        <div className="container">
            <div className="row">
                <div className="contact-me card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                            <div className="contact-me-card">
                                <h2 className="text-capitalize"><i className="fa fa-envelope"></i> Contact Me</h2>
                                <hr></hr>
                                <p><strong>Collin Porter</strong></p>
                                <p>Salt Lake City, UT</p>
                                <p>385.222.1530</p>
                                <a href="mailto:cporter.dev@gmail.com">
                                    <button id="email" className="btn btn-secondary btn-dark contact-button mb-3">
                                        cporter.dev@gmail.com
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                                <h2 className="text-capitalize"><i className="fa fa-github"></i> Github</h2>
                                <hr></hr>
                                    <a href="https://github.com/portercol" target="_blank" rel="noopener noreferrer" >
                                        <button id="github" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                                <h2 className="text-capitalize"><i className="fa fa-linkedin"></i> LinkedIn</h2>
                                <hr></hr>
                                    <a href="https://www.linkedin.com/in/collin-porter-7b65311a8" target="_blank" rel="noopener noreferrer">
                                        <button id="linkedin" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                                <h2 className="text-capitalize"><i className="fa fa-file-text-o"></i> Resume</h2>
                                <hr></hr>
                                    <a href="https://docs.google.com/document/d/1ntZxjSIBELqvqXeJtNiKjHUHoYsBll2aQQ2I90YVXig/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <button id="resume" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Button btnText="about" link={"/"}/>
            <br></br>
            <br></br>
        </div>
    );
}

// export Contact component
export default Contact;
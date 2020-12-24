import React from "react";
import Button from "../Button";

function Contact() {
    
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
                                <a href="mailto:colls.potta@gmail.com">
                                    <button id="email" className="btn btn-secondary btn-dark contact-button mb-3">
                                        colls.potta@gmail.com
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
// import React and deconstruct Link from react-router-dom to use link navigation
import React from "react";
import { Link } from "react-router-dom";

// create Header functional component
function Header() {
    
    // return data to the page using a Navbar-toggler with links to each section of the portfolio
    // also create icon links for github, linkedIn and resume
    return (   
        <nav className="navbar navbar-expand-lg navbar-dark position-sticky">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to={"./"}>About</Link>
                    <Link className="nav-item nav-link" to={"./portfolio"}>Portfolio</Link>
                    <Link className="nav-item nav-link" to={"./contact"}>Contact</Link>
                </div>
                <div className="ref-links ml-auto">
                    <div className="row">
                        <a className="nav-item nav-link" href="https://github.com/portercol" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" id="github" ></i>
                        </a>
                        <a className="nav-item nav-link" href="https://www.linkedin.com/in/collin-porter-7b65311a8/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin" id="linkedin" ></i>
                        </a>
                        <a className="nav-item nav-link" href="https://docs.google.com/document/d/1ntZxjSIBELqvqXeJtNiKjHUHoYsBll2aQQ2I90YVXig/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-file-text-o" id="resume" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// export Header component
export default Header;
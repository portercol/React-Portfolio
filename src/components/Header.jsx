import React from "react";
import { Link } from "react-router-dom";

function Header() {
    
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
                
            </div>
        </nav>
    )
}

export default Header;
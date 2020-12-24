// import React
import React from "react";

// create Footer functional component
function Footer() {
    
    // return data to the page using footer format, store github link in footer as well
    return <footer className="footer mt-5">
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <h5 className="text-light">site designed by <a href="https://github.com/portercol" target="_blank" rel="noopener noreferrer">Collin Porter</a></h5>
            </div>
            <p className="text-light">&copy; Copyright 2020</p>
        </div>
    </footer>;
}

// export Footer component
export default Footer;
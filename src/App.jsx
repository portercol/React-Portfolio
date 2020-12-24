// import React, react-router-dom elements, Header/Footer components & ALL pages
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// create App functional component
function App() {

  // return data to the page using react-router-dom elements; Router & Route with routes wrapped in the Header
  return ( 
    <Router>
        <Header/>
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Footer/>
    </Router>
  );
}

// export App component
export default App;
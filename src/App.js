import React from "react";
// import Darkmode from "darkmode-js";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import "./App.css";
import clip from "./assets/clip.gif";
import logo from "./assets/logo.svg";
import Footer from "./components/Footer/Footer";

const App = () => {
  
  return (
    <div>
      <NavBar src={logo} alt="JSEEKR Logo" />
      <div className="container">
        <img src={clip} alt="clip image" className="clips mt-4" />
        <Tablee />
      </div>
      <Footer />
    </div>
  );
};

export default App;

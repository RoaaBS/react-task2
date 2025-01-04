import { useState } from "react";

import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/welcome";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/welcome";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

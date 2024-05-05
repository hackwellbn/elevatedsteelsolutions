import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/contact";
import Footer from "./Components/Footer/Footer";
import Services from './Pages/Services/Services';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from "./Pages/Blogs/Blogs";
import Gallery from "./Pages/Gallery/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={< Services />} />
        <Route path="/blogs" element={< Blogs />} />
        <Route path="/gallery" element={< Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

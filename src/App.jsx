import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/contact";
import Footer from "./Components/Footer/Footer";
import Services from './Pages/Services/Services';
import Blogs from "./Pages/Blogs/Blogs";
import Gallery from "./Pages/Gallery/Gallery";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import AuthForm from "./Components/AuthForm/Authform";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      {/* <Route path="/Authform" element={<AuthForm />} /> */}
      <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

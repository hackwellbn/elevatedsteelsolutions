import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Use BrowserRouter
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import About from './Pages/About/About';
import TermsOfService from './Pages/TermsOfService/TermsOfService';
import Services from './Pages/Services/Services';
import Production from './Pages/Production/Production';
import Resources from './Pages/Resources/Resources';
import Contact from './Pages/Contact/Contact';
import SignupPopup from './Components/SignupPopup/SignupPopup';
import { Helmet } from 'react-helmet';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <title>Elevated Steel Solutions</title>
          <meta name="description" content="Elevated Steel Solutions is a renowned welding and fabrication company specializing in high-quality products." />
          <meta property="og:title" content="Elevated Steel Solutions" />
          {/* Add more meta tags here as needed */}
        </Helmet>
        <Navbar />
        <ScrollToTop /> {/* Ensure ScrollToTop is used here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<TermsOfService />} />
          <Route path="/production" element={<Production />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignupPopup />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';

const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ServicesPage = () => <div>Services Page</div>;
const ContactPage = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

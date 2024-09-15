import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';

const AboutPage = () => <div>About Page</div>;
const ServicesPage = () => <div>Services Page</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

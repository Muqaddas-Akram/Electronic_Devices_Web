import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/Signup';
import Electronics from '../pages/Electronics/Electronics';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function AppRoutes() {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/signup', '/contact'];
  const showFooterRoutes = ['/', '/electronics'];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Residential from './views/Residential';
import Commercial from './views/Commercial';
import Services from './views/Services';
import Gallery from './views/Gallery';
import Contact from './views/Contact';
import Careers from './views/Careers';
import './App.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />

          {/* Products Routes */}
          <Route path="/products/home" element={<Residential />} />
          <Route path="/products/commercial" element={<Commercial />} />

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

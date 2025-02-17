import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Maintenance from './components/maintenance/Maintenance';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import TopBanner from './components/TopBanner';  
import Packages from './pages/packages/Packages';

import './App.css';

const App = () => {
  return (
    <Router>
      <TopBanner /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/reservations" element={<Maintenance />} />
        <Route path="/speakers" element={<Maintenance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

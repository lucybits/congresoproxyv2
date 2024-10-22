import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/proxylogo.png" alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item"><Link to="/">Inicio</Link></li>
        <li className="navbar-item"><Link to="/about">Acerca de</Link></li>
        <li className="navbar-item"><Link to="/packages">Paquetes</Link></li>
        <li className="navbar-item"><Link to="/speakers">Conferencistas</Link></li>
        <li className="navbar-item"><Link to="/reservations">Reservaciones</Link></li>
        <li className="navbar-item contact">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

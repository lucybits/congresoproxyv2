import { FaInstagram } from "react-icons/fa"; 
import "./ContactInfo.css"; 

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>
      <div className="contact-content">
        <div className="contact-item">
          <h2>Dirección</h2>
          <p>Av. Tecnologico, Sahuaro, 83171 Hermosillo, Son, MX. </p>
        </div>
        <div className="contact-item">
          <h2>Correo electrónico</h2>
          <p>congresoproxy@hermosillo.tecnm.mx</p>
        </div>
        <div className="contact-item">
          <h2>Teléfono</h2>
          <p>No disponible</p>
        </div>
        <div className="contact-item">
          <h2>Redes sociales</h2>
          <div className="social-links">
            <a href="https://x.com/congreso_proxy" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="devicon-twitter-original"></i>  
            </a>
            <a href="https://www.instagram.com/congresoproxy/?hl=es" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />  
            </a>
            <a href="https://www.facebook.com/congresoproxy?locale=es_LA" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="devicon-facebook-plain"></i>  
            </a>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <p>CONGRESO PROXY</p>
      </div>
    </div>
  );
};

export default ContactInfo;

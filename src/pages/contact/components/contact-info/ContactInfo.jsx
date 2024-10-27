import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Información de Contacto</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Dirección</h3>
          <p>Instituto Tecnológico de Hermosillo</p>
          <p>Av. Tecnológico S/N, Col. El Sahuaro</p>
          <p>Hermosillo, Sonora, México</p>
          <p>C.P. 83170</p>
        </div>

        <div className="contact-item">
          <h3>Correo Electrónico</h3>
          <p>congresoproxy@hermosillo.tecnm.mx</p>
        </div>

        <div className="contact-item">
          <h3>Teléfono</h3>
          <p>(662) 260-6500</p>
        </div>

        <div className="contact-item">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/TecNMHermosillo" target="_blank" rel="noopener noreferrer" className="tag facebook">Facebook</a>
            <a href="https://twitter.com/TecNMHermosillo" target="_blank" rel="noopener noreferrer" className="tag twitter">Twitter</a>
            <a href="https://www.instagram.com/tecnmhermosillo" target="_blank" rel="noopener noreferrer" className="tag instagram">Instagram</a>
            <a href="https://www.tiktok.com/@tecnmhermosillo" target="_blank" rel="noopener noreferrer" className="tag tiktok">TikTok</a>
          </div>
        </div>

        <div className="contact-item">
          <h3>Horario de Atención</h3>
          <p>Lunes a Viernes</p>
          <p>8:00 AM - 4:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
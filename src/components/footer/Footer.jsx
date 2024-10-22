import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Hecho con{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="heartbeat"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>{" "}
          por Congreso PROXY
        </p>
        <div className="footer-links">
          <a href="/about" className="footer-link">
            Sobre nosotros
          </a>
          <a href="/contact" className="footer-link">
            Contacto
          </a>
          <a href="/policy" className="footer-link">
            Política de Privacidad
          </a>
          <a href="/reservations" className="footer-link">
            Reservaciones
          </a>
          <a href="/packages" className="footer-link">
            Paquetes
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="sponsors-section">
        {/* seccion para logos de patrocinadores */}
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Congreso PROXY. Todos los derechos
          reservados.
        </p>
        <p>
          Próxima edición: <span style={{ color: "aqua" }}>2025</span> -
          ¡Reserva tu lugar ahora!
        </p>
        <p className="footer-tagline">
          ¡Promoviendo la excelencia en la investigación y el desarrollo
          tecnológico!
        </p>
      </div>
    </footer>
  );
};

export default Footer;

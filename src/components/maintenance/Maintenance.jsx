import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div className="maintenance">
      <img src="/paintbrush.webp" alt="En construcción" />
      <h2>Página en mantenimiento</h2>
      <p>
        Esta sección se encuentra actualmente en desarrollo. Agradecemos su
        paciencia mientras nos encontramos trabajando en ella.
      </p>
      <a href="/" className="return-button">Regresar al inicio</a>
    </div>
  );
};

export default Maintenance;
import "./Vision.css";

const Vision = () => {
  return (
    <div className="vision-container">
      <h2 className="vision-title">Quiénes somos</h2>

      <div className="vision-section">
        <div className="vision-content">
          <img
            src="public/018273.jpg"
            alt="Estudiantes"
            className="vision-image"
          />
          <div className="vision-text">
            <h3>-- Estudiantes</h3>
            <p>
              Somos un grupo de estudiantes provenientes del Instituto
              Tecnológico de Hermosillo, apasionados por la tecnología, de las
              carreras de Ingeniería en Sistemas Computacionales e Ingeniería en
              Informática. Nos dedicamos a organizar eventos anuales, talleres,
              conferencias, proyectos de entretenimiento, etc, a través de
              nuestro congreso para compartir conocimientos con el mundo,
              fomentar y crear una comunidad tecnológica dentro y fuera de
              nuestra universidad.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-section reverse">
        <div className="vision-content">
          <img
            src="public/346271.jpg"
            alt="Workshops"
            className="vision-image"
          />
          <div className="vision-text">
            <h3>-- Visitas</h3>
            <p>
              Organizamos visitas empresariales para los asistentes interesados
              del Congreso Proxy, donde pueden conocer de primera mano el
              ambiente laboral en empresas tecnológicas locales y foránea,
              dichas experiencias permiten a los participantes establecer
              posibles contactos y obtener una perspectiva real del sector
              tecnológico en la industria.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <div className="vision-content">
          <img
            src="public/275648.jpg"
            alt="Hackathons"
            className="vision-image"
          />
          <div className="vision-text">
            <h3>-- Talleres y conferencias</h3>
            <p>
              Desarrollamos talleres prácticos y conferencias impartidas por
              expertos en diferentes áreas tecnológicas, donde los participantes
              pueden adquirir nuevos conocimientos y habilidades. Algunas de estas
              experiencias son sumamente enriquecedoras para el aprendizaje y el
              desarrollo de nuevas habilidades, como el desarrollo de software,
              inteligencia artificial, análisis de datos, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

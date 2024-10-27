import "./Overview.css"; 

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="logo-and-description">
        <div className="pattern-left"></div>
        <div className="pattern-right"></div>
          <img src="/logosoft.png" alt="Logo" className="logo-image" />
          <div className="overview-description">
            <p>
              Desde su inicio en <span className="highlight">2011</span>, el
              <span className="highlight"> Congreso Proxy </span> se ha
              convertido en un evento en el ámbito académico y tecnológico,
              promoviendo el
              <span className="highlight"> aprendizaje </span> y el
              <span className="highlight"> networking </span> entre estudiantes
              y profesionales del sector. En cada edición, ofrecemos
              <span className="highlight">
                {" "}
                conferencias, talleres y visitas empresariales
              </span>
              , dirigidas a universidades y personas interesadas en la
              tecnología y la innovación.
            </p>
            <p>
              A los estudiantes de preparatoria, les ofreceremos actividades
              específicas, como{" "}
              <span className="highlight"> conferencias </span>y{" "}
              <span className="highlight"> talleres</span>, para fomentar su
              desarrollo académico y profesional. Nuestro objetivo para la
              siguiente edición <span className="highlight">2025</span> es hacer
              de Proxy un evento aún más{" "}
              <span className="highlight">grande</span> y
              <span className="highlight"> diverso</span>, fortaleciendo lazos
              entre la academia, la industria y el público en general.
            </p>
          </div>
        </div>

        <div className="counters-container">
          <div className="counter">
            <h2 className="counter-number">+10</h2>
            <p className="counter-text">Años de antigüedad</p>
            <hr className="divider" />
          </div>
          <div className="counter">
            <h2 className="counter-number">+12</h2>
            <p className="counter-text">Congresos efectuados</p>
            <hr className="divider" />
          </div>
          <div className="counter">
            <h2 className="counter-number">+200</h2>
            <p className="counter-text">Media de asistentes</p>
            <hr className="divider" />
          </div>
          <div className="counter">
            <h2 className="counter-number">+30</h2>
            <p className="counter-text">Integrantes del comité</p>
            <hr className="divider" />
          </div>
          <div className="counter">
            <h2 className="counter-number">+40</h2>
            <p className="counter-text">Conferencistas invitados</p>
            <hr className="divider" />
          </div>
          <div className="counter">
            <h2 className="counter-number">+15</h2>
            <p className="counter-text">Empresas colaboradoras</p>
            <hr className="divider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
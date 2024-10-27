import "./Details.css";

const Details = () => {
  return (
    <div className="details-grid">
      <div className="details-card">
        <h2>El Congreso</h2>
        <p>
          El Congreso PROXY es un evento anual organizado por estudiantes del Instituto Tecnológico de
          Hermosillo, diseñado para reunir a estudiantes, académicos y profesionales
          en el campo de la tecnología e ingeniería.
        </p>
      </div>
      <div className="details-card">
        <h2>Objetivo</h2>
        <p>
          Crear un espacio de intercambio de conocimientos y experiencias en el ámbito
          tecnológico, deseamos fomentar la innovación y desarrollo profesional.
        </p>
      </div>
      <div className="details-card">
        <h2>Beneficios</h2>
        <p>
          Nuestros participantes tendrán la oportunidad de asistir a conferencias,
          talleres y actividades prácticas que estarán fortaleciendo sus habilidades
          técnicas y profesionales, incluso la posibilidad de establecer conexiones valiosas
          en la industria.
        </p>
      </div>
    </div>
  );
};

export default Details;
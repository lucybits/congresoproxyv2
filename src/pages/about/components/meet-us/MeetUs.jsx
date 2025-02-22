import './MeetUs.css';

const MeetUs = () => {
  return (
    <div className="meet-us">
      <div className="watermark">
        {Array.from({ length: 15 }).map((_, row) => (
          <div key={row} className="watermark-row">
            {Array.from({ length: 13 }).map((_, col) => (
              <span key={col}>PROXY</span>
            ))}
          </div>
        ))}
      </div>

      <h2 className="title">Conócenos</h2>
      <p className="introduction">
        Somos un evento innovador que reúne a profesionales, estudiantes y entusiastas de la tecnología para compartir conocimientos y experiencias en el campo del desarrollo de software, ciberseguridad y tecnologías emergentes como IA. Como objetivo tenemos diseñar un espacio de aprendizaje colaborativo donde los participantes puedan conectar, aprender y crecer juntos.
      </p>
    </div>
  );
};

export default MeetUs;

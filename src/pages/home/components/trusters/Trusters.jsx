import './Trusters.css'; 

const Trusters = () => {
  return (
    <div className="trusters-section">
      <h2 className="trusters-header">Patrocinadores que nos impulsan.</h2>
      <div className="trusters-logos">
        <img src="/aviada.png" alt="Logo Aviada" className="truster-logo" />
        <img src="/interlogic.png" alt="Logo Interlogic" className="truster-logo" />
        <img src="/fumidic.png" alt="Logo Fumidic" className="truster-logo" />
        <img src="/intugo.png" alt="Logo Intugo" className="truster-logo" />
        <img src="/necodex.png" alt="Logo Necodex" className="truster-logo" />
      </div>
    </div>
  );
};

export default Trusters;

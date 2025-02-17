import 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="headline">
        <img className="star-icon" src="https://www.svgrepo.com/show/431290/sparkles.svg" alt="star" />
        Nuestros paquetes
      </div>
      <div className="subtitle">
        Elige el paquete que mejor se adapte a ti.
      </div>
    </div>
  );
};

export default Banner;
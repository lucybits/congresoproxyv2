  import Lottie from 'lottie-react';
  import animationData from '../../../../data/Animation - 1727574432451.json'; 
  import './Banner.css';

  const Banner = () => {
    return (
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-subtitle">CONGRESO PROXY</h1>
          <h2 className="banner-title">Tu puerta de enlace al futuro.</h2>
          <p className="banner-description">
            Únete a nosotros para una experiencia inolvidable llena de aprendizaje y networking.
          </p>
          <div className="banner-buttons">
            <button className="banner-button">Ver paquetes</button>
            <button className="banner-button">Contacto</button>
          </div>
        </div>
        <div className="banner-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    );
  };

  export default Banner;
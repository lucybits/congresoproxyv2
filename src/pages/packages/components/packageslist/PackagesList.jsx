import "react";
import "./PackagesList.css";
import { Link } from "react-router-dom";

const PackagesList = () => {
  return (
    <div className="packages-container">
      <div className="offer-tag">Encuentra la mejor oferta</div>
      <div id="phrase">
        Paquetes simples, beneficios máximos, sin complicaciones.
        <div>El primer paso hacia una experiencia única comienza aquí</div>
      </div>
      <div className="packages-grid">
        <div className="package-item">
          <h3>MEGABYTE</h3>
          <p>Diseñado principalmente para estudiantes de preparatoria</p>
          <ul>
            <li>Acceso a todas las conferencias con expertos del sector</li>
            <li>Aprende sobre tendencias y tecnologías emergentes</li>
            <li>Descuento especial para alumnos con promedio +95</li>
          </ul>
          <p className="price">$400</p>
        </div>

        <div className="package-item gigabyte-package">
          <span className="bestseller-badge">Más popular</span>
          <h3 className="gigabyte-text">GIGABYTE</h3>
          <p className="gigabyte-text">
            Diseñado principalmente para universitarios y mentes visionarias
          </p>
          <ul>
            <li className="gigabyte-text">
              Acceso total: conferencias, visitas empresariales y talleres
              especializados
            </li>
            <li className="gigabyte-text">
              Talleres exclusivos: Flutter, Keras y Machine Learning, WordPress
              y Bootstrap, Desarrollo Backend y más
            </li>
            <li className="gigabyte-text">
              Conéctate con expertos y adentrate en el mundo tecnológico
            </li>
          </ul>
          <p className="price gigabyte-text">$800</p>
        </div>

        <div className="package-item">
          <h3>EXTERNOS</h3>
          <p>Para egresados y público general</p>
          <ul>
            <li>
              Flexibilidad total: elige entre Paquete GIGABYTE o MEGABYTE según
              tu interés
            </li>
            <li>Alterna entre experiencias y personaliza tu participación</li>
            <li>Conéctate con la comunidad tecnológica sin restricciones</li>
          </ul>
          <p className="price-text">Costo según el paquete elegido</p>
        </div>
      </div>
      <div className="purchase-info">
        Si deseas adquirir un paquete de carnet, acude al edificio de Sistemas
        (L55) del Instituto Tecnológico de Hermosillo, ubicado en Av.
        Tecnológico, Sahuaro, 83171 Hermosillo, Sonora, México, antes del 31 de
        marzo al 4 de abril. Las ventas estarán sujetas a disponibilidad de
        cupos y los paquetes se venderán hasta agotar existencias. Consulta
        disponibilidad con anticipación. Si necesitas más información, contacta
        al equipo de Proxy a través de nuestras <Link to="/contact" style={{ color: '#FF00FF' }}>redes sociales</Link>.
      </div>
    </div>
  );
};

export default PackagesList;
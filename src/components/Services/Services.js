import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="services-bar">
        <div className="services-text">
          <div className="services-line-title">
            <img
              className="services-line"
              src="./images/icons/linea_servicios.png"
              alt="Linea Diagonal Blanca"
            />
            <h2 className="services-title">Servicios</h2>
          </div>
          <div className="services-paragraph">
            <p>
              <b>Warehousing & Picking: </b> Mantener un stock constante no sólo
              nos permite brindar respuestas más ágiles, sino también optimizar
              costos, suprimiendo traslados innecesarios.
            </p>
            <br />
            <p className="last-mile-paragraph">
              <b>Last mile: </b> Nos adaptamos con gran versatilidad en función
              de sus necesidades, ofreciendo tanto envíos
              <b> Same day y Programados.</b>
            </p>
          </div>
        </div>
      </div>
      <img
        src="../images/pictures/foto_servicios.png"
        alt="Hombre hablando por Walkie Talkie"
        className="img-services"
      />
    </section>
  );
};

export default Services;

import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="services-bar">
        <div className="services-text">
          <div className="services-line-title">
            <img
              className="services-line"
              src="./images/icons/linea servicios.png"
              alt=""
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
            <p>
              <b>Last mile: </b> Nos adaptamos con gran versatilidad en función
              de sus necesidades, ofreciendo tanto envíos{" "}
              <b>Same day y Programados.</b>
            </p>
          </div>
        </div>
      </div>
      <img
        src="../images/pictures/foto servicios-sinBarra.png"
        alt=""
        className="img-services"
      />
    </section>
  );
};

export default Services;

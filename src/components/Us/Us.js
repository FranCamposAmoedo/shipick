import "./Us.css";

const Us = () => {
  return (
    <section id="us">
      <div className="container-us">
        <div
          id="carouselExampleControls"
          className="carousel slide img-us"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../images/pictures/foto_nosotros1.png"
                className="d-block w-100"
                alt="Trabajadores de Shipick"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../images/pictures/foto_nosotros2.png"
                className="d-block w-100"
                alt="Choferes de Shipick"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="us-bar">
          <div className="us-text">
            <div className="us-line-title">
              <img
                className="us-line"
                src="./images/icons/linea_nosotros.png"
                alt="Línea Diagonal Amarilla"
              />
              <h2 className="us-title">Nosotros</h2>
            </div>
            <div className="us-paragraph">
              <span>
                Somos una startup joven e innnovadora, y venimos a solucionar de
                manera ágil y eficiente la logística del ecommerce.
              </span>
              <p>
                Contamos con una flota variada, para adaptarnos de manera óptima
                a las distintas escalas y necesidades de nuestros clientes.
              </p>
            </div>
          </div>
          <a className="btn-home" href="#home">
            <img
              src="../images/icons/icono_flechaNegra.png"
              alt="Flecha Negra"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Us;

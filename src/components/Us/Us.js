import "./Us.css";

const Us = () => {
  return (
    <section id="us">
      <div className="container-us">
        <img
          src="../images/pictures/foto 1 nosotros-sinBarra.png"
          className="img-us"
          alt="..."
        />
        <div className="us-bar">
          <div className="us-text">
            <div className="us-line-title">
              <img
                className="us-line"
                src="./images/icons/linea nosotros.png"
                alt=""
              />
              <h2 className="us-title">Nosotros</h2>
            </div>
            <p className="us-paragraph">
              <span>
                Somos una startup joven e innnovadora, y venimos a solucionar de
                manera ágil y eficiente la logística del ecommerce.
              </span>
              <br />
              Contamos con una flora variada, para adaptarnos de manera óptima a
              las distintas escalas y necesidades de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Us;

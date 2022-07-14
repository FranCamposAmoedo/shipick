import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="parallax-content">
        <h2>
          ¡Somos la
          <b>{" "}
            logística <br />
            para tu ecommerce!
          </b>
        </h2>
        <img src="../images/icons/linea_titulo.png" alt="Línea Amarilla" />
        <p>
          Te ayudamos a llevar a cabo tu proyecto <br />
          <b> de manera ágil y eficiente.</b>
        </p>
      </div>
      <div className="parallax-content-mobile">
        <h2>
          ¡Somos la <br />
          <b> logística para tu ecommerce!</b>
        </h2>
        <img src="../images/icons/linea_titulo.png" alt="Línea Amarilla" />
        <p>
          Te ayudamos a llevar a cabo tu proyecto
          <b> de manera ágil y eficiente.</b>
        </p>
      </div>
    </>
  );
};

export default Home;

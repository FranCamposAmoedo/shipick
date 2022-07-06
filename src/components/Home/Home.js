import "./Home.css";

const Home = () => {
  return (
    <div className="parallax-content">
      <h2>
        ¡Somos la <b>logística para tu ecommerce!</b>
      </h2>
      <img
        src="../images/icons/línea para titulo.png"
        alt=""
        style={{ marginTop: 50, marginBottom: 50 }}
      />
      <p>
        Te ayudamos a llevar a cabo tu proyecto{" "}
        <b>de manera ágil y eficiente.</b>
      </p>
    </div>
  );
};

export default Home;

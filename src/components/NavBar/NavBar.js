import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container-navbar">
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark col-12">  
          <a className="navbar-brand" href="#home"><img src="../images/logos/logo shipick.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#home">Inicio</a>          
              <a className="nav-link" href="#us">Nosotros</a>
              <a className="nav-link" href="#services">Servicios</a>
              <a className="nav-link" href="#clients">Clientes</a>
              <a className="nav-link" href="#contact">Contacto</a>  
            </div>
            <div className="social-container">
              <a className="social" href="https://www.facebook.com/Shipick-Logi%CC%81stica-Fulfillment-102784304895854">
                <img src="./images/icons/icono face.png" alt="" />
              </a>
              <a className="social" href="https://www.instagram.com/shipicklog/">
                <img src="./images/icons/icono insta.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default NavBar;

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="links-footer-container">
        <a className="footer-item" href="#home">
          Inicio
        </a>

        <a className="footer-item" href="#us">
          Nosotros
        </a>

        <a className="footer-item" href="#services">
          Servicios
        </a>

        <a className="footer-item" href="#clients">
          Clientes
        </a>

        <a className="footer-item" href="#contact">
          Contacto
        </a>
      </div>
      <div className="contacts-footer">
        <div className="tel-email">
          <h6 className="tel-email-item">Contacto</h6>
          <a href="tel:+541126719754">
            <img
              className="tel-email-item"
              src="./images/icons/icono cel.png"
              alt=""
            />
          </a>
          <a className="tel-email-item contact-text" href="tel:+541126719754">
            +54 11 2671-9754
          </a>
          <span className="tel-email-item">|</span>
          <a href="mailto:info@shipick.com.ar">
            <img
              className="tel-email-item"
              src="./images/icons/icono mail.png"
              alt=""
            />
          </a>
          <a
            className="tel-email-item contact-text"
            href="mailto:info@shipick.com.ar"
          >
            info@shipick.com.ar
          </a>
        </div>
        <div className="follow-us">
          <h6 className="follow-us-item">Seguinos</h6>
          <a
            className="follow-us-item"
            href="https://www.facebook.com/Shipick-Logi%CC%81stica-Fulfillment-102784304895854"
          >
            <img src="./images/icons/icono face_1.png" alt="" />
          </a>
          <a
            className="follow-us-item"
            href="https://www.instagram.com/shipicklog/"
          >
            <img src="./images/icons/icono insta_1.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

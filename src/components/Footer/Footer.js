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
          <a href="tel:+541126719754" target="_blank" rel="noreferrer">
            <img
              className="tel-email-item"
              src="./images/icons/icono_cel.png"
              alt="Icono Celular"
            />
          </a>
          <a className="tel-email-item contact-text" href="tel:+541126719754" target="_blank" rel="noreferrer">
            +54 11 2671-9754
          </a>
          <span className="tel-email-item">|</span>
          <a href="mailto:info@shipick.com.ar" target="_blank" rel="noreferrer">
            <img
              className="tel-email-item"
              src="./images/icons/icono_email.png"
              alt="Icono Sobre"
            />
          </a>
          <a
            className="tel-email-item contact-text"
            href="mailto:info@shipick.com.ar"
            target="_blank" rel="noreferrer"
          >
            info@shipick.com.ar
          </a>
        </div>
        <div className="follow-us">
          <h6 className="follow-us-item">Seguinos</h6>
          <a
            className="follow-us-item fui"
            href="https://www.facebook.com/Shipick-Logi%CC%81stica-Fulfillment-102784304895854"
            target="_blank" rel="noreferrer"
          >
            <img src="./images/icons/icono_fbFooter.png" alt="Icono Facebook" />
          </a>
          <a
            className="follow-us-item fui"
            href="https://www.instagram.com/shipicklog/"
            target="_blank" rel="noreferrer"
          >
            <img src="./images/icons/icono_igFooter.png" alt="Icono Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

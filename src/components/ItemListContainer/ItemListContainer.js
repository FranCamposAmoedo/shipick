import "./ItemListContainer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemListContainer = () => {
  const imgLine = "../images/icons/linea_subtitulos.png";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="item-list-container">
      <h2 className="different">
        ¿Qué nos hace <b>diferentes?</b>
      </h2>
      <div className="item-product">
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list"
            src="../images/icons/icono_horarios.png"
            alt="Icono Reloj"
          />
          <h5 className="item-list">HORARIOS PERSONALIZABLES</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            <b>Su cliente elige la ventana horaria </b>en la que quiere recibir.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list"
            src="../images/icons/icono_liveTracking.png"
            alt="Icono Ubicación"
          />
          <h5 className="item-list">LIVE TRACKING</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            <b>Seguimiento en vivo</b> del estado de su pedido y la ubicación
            del chofer.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list img-avisos"
            src="../images/icons/icono_avisosSms.png"
            alt="Icono Celular"
          />
          <h5 className="item-list">AVISOS POR SMS</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            Su cliente <b>recibe un último</b> aviso minutos antes de recibir su
            pedido.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list"
            src="../images/icons/icono_firmaDigital.png"
            alt="Icono Firma Digital"
          />
          <h5 className="item-list">FOTO Y FIRMA DIGITAL</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            Se encuentra almacenada junto al comprobante digital.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list"
            src="../images/icons/icono_logisticaInversa.png"
            alt="Icono Flechas Cruzadas"
          />
          <h5 className="item-list">LOGÍSTICA INVERSA</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            Acompañamos a su cliente en el proceso de
            <b> cambios y devoluciones.</b>
          </p>
        </div>
        <div data-aos="zoom-out-up" className="container-list">
          <img
            className="item-list"
            src="../images/icons/icono_servicioIntegral.png"
            alt="Icono Círculos"
          />
          <h5 className="item-list">SERVICIO INTEGRAL</h5>
          <img className="item-list" src={imgLine} alt="Linea Amarilla" />
          <p className="item-list">
            Ofrecemos <b>Warehousing & Picking,</b> ideal para el servicio de
            <b> Last Mile.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;

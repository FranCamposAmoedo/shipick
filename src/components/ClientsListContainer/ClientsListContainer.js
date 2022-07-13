import "./ClientsListContainer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientsListContainer = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="clients">
      <h2 className="clients-title">
        <b>Clientes</b> que confían <br /> en nosotros
      </h2>
      <img
        className="clients-line"
        src="../images/icons/linea_clientes.png"
        alt="Línea amarilla"
      />
      <div className="clients-list-container">
        {props.clients.map((client) => (
          <div key={client.id} data-aos="fade-up" className="client-container">
            <img src={client.img} alt={client.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsListContainer;

import "./Services.css";

const Services = () => {
    return (
        <section id="services">
            <div className="services-text">
                <h2>Servicios</h2>
                <p>
                    <b>Warehousing & Picking: </b> Mantener un stock constante no sólo nos permite brindar 
                    respuestas más ágiles, sino también optimizar costos, suprimiendo traslados innecesarios.
                </p><br />
                <p>
                    <b>Last mile: </b> Nos adaptamos con gran versatilidad en función de sus necesidades,  
                    ofreciendo tanto envíos <b>Same day y Programados.</b>
                </p>
                </div>
            <img src="../images/pictures/foto servicios.png" alt="" className="img-services" />
        </section>
    )
}

export default Services;
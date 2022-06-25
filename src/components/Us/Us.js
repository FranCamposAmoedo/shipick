import "./Us.css";

const Us = () => {
    return (
        <section id="us">
            <div className="container-us">
                <div id="carouselExampleSlidesOnly" className="carousel slide img-us" /* data-bs-ride="carousel" */ data-bs-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../images/pictures/foto 1 nosotros.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../images/pictures/foto 2 nosotros.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="us-text">
                    <h2>Nosotros</h2>
                    <p>
                        <b>Somos una startup joven e innnovadora, y venimos a solucionar de manera ágil y eficiente la logística del ecommerce.</b><br />
                        Contamos con una flora variada, para adaptarnos de manera óptima a las distintas escalas y necesidades de nuestros clientes. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Us;
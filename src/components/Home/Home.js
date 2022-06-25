import "./Home.css";

const Home = () => {
    return (
        <section id="home">
            <div className="background-parallax">
                <div className="parallax-content">
                    <h2>¡Somos la <b>logística para tu ecommerce!</b></h2>
                    <img src="../images/icons/línea para titulo.png" alt="" style={{marginTop: 50, marginBottom: 50}}/>
                    <p>Te ayudamos a llevar a cabo tu proyecto <b>de manera ágil y eficiente.</b></p>
                </div>                
            </div>
        </section>
    )
}

export default Home;
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="menu-container">
                <li><a className="list-item" href="#home">Inicio</a></li>
                <li><a className="list-item" href="#us">Nosotros</a></li>
                <li><a className="list-item" href="#services">Servicios</a></li>
                <li><a className="list-item" href="#clients">Clientes</a></li>
                <li><a className="list-item" href="#contact">Contacto</a></li>
            </div>
            <div className="social-container">
                <a className="social" href="https://www.facebook.com/Shipick-Logi%CC%81stica-Fulfillment-102784304895854"><img src="./images/icons/icono face.png" alt="" /></a>
                <a className="social" href="https://www.instagram.com/shipicklog/"><img src="./images/icons/icono insta.png" alt="" /></a>
            </div>            
        </nav>
    )
}

export default NavBar;
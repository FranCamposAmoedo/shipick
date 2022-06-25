import './Header.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header className="header">
            <img src="../images/logos/logo shipick.png" alt="" />
            <NavBar />
        </header>
    )
}

export default Header;
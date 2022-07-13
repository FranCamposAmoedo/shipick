import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

const Header = () => {
  return (
    <header id="home" className="background-parallax">
      <NavBar />
      <Home />
    </header>
  );
};

export default Header;

import "./navbar.css";
import plantalogo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="logo" src= {plantalogo} alt="" />
      
      <ul className="categories">
        <li>Fertilizantes</li>
        <li>Semilas</li>
        <li>Riego</li>
      </ul>


    <CartWidget />

    </div>
  )
}

export default NavBar;


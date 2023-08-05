import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="./images/logohygge.png"
            alt="Hygge Clothes"
            className="logo-image img-fluid p-1"
          />
          Hygge Clothes
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/category/home`} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/prendas`} className="nav-link">
                Prendas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/accesorios`} className="nav-link">
                Accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/SobreNosotros`} className="nav-link">
                Sobre Nosotros
              </NavLink>
            </li>
          </ul>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

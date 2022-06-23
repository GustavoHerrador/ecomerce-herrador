import "./CustomNavBar.css";
import { Navbar } from "react-bootstrap";
import logo from "../images/logobar.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function CustomNavBar() {
  return (
    <div className="navbar">
      <Navbar className="nav" bg="blue" variant="dark">
        <Navbar.Brand className="brand">
          <Link to="/">
            {" "}
            <img src={logo} className="logo" alt="pepe" />
          </Link>
          <span>Ecommerce-Herrador</span>
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="Productos">
            <Link to="/category/te">
              {" "}
              <NavDropdown.Item href="productos/te"> Te </NavDropdown.Item>
            </Link>
            <Link to="/category/cafe">
              {" "}
              <NavDropdown.Item href="productos/cafe"> Cafe </NavDropdown.Item>
            </Link>
            <Link to="/category/chocolate">
              {" "}
              <NavDropdown.Item href="productos/chocolate">
                {" "}
                Chocolate{" "}
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="productos/promociones">
              {" "}
              Descuentos{" "}
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="blog"> Blog</Nav.Link>
          <Nav.Link href="Acerca de nosotros."> Informacion</Nav.Link>
          <Nav.Link href="contactos"> Contactanos</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar>
    </div>
  );
}
export default CustomNavBar;

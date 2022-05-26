import "./CustomNavBar.css";
import { Navbar } from "react-bootstrap";
import logo from "../images/logobar.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function CustomNavBar() {
  return (
    <div className="navbar">
      <Navbar className="nav" bg="blue" variant="dark">
        <Navbar.Brand className="brand">
          <img src={logo} className="logo" />
          <spam>Ecommerce-Herrador</spam>
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="Productos">
            <NavDropdown.Item href="productos/te"> Te </NavDropdown.Item>
            <NavDropdown.Item href="productos/cafe"> Cafe </NavDropdown.Item>
            <NavDropdown.Item href="productos/chocolate">
              {" "}
              Chocolate{" "}
            </NavDropdown.Item>
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

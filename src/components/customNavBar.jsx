import './CustomNavBar.css';
import { Navbar } from "react-bootstrap";
import logo from "../images/logobar.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function CustomNavBar() {
  return (
    <div className="App">
      <Navbar bg="blue" variant="dark" fixed="top">
        <Navbar.Brand>
          <img src={logo} className="logo" />
          Ecommerce-Herrador
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
      </Navbar>
      ;<div className="content"> Aca va el contenido. </div>
    </div>
  );
}
export default CustomNavBar
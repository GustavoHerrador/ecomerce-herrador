import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { VscTrash } from "react-icons/vsc";
import swal from "sweetalert";
import { useNavigate } from "react-router";

function Cart() {
  const { deleteItem, getItemPrice, emptyCart, cart } = useContext(CartContext);
  let navigate = useNavigate();
  const handleClik = () => {
    if (cart.length === 0) {
      swal("No hay productos en el carrito");
      navigate("/");
    }
  };
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nombreProducto}</td>
              <td>{item.productQuantity}</td>
              <td>${item.price}</td>
              <td>
                {cart.length > 0 ? (
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    {" "}
                    <VscTrash>X</VscTrash>{" "}
                  </Button>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
          <h1>Precio Total: ${getItemPrice()}</h1>
        </tbody>

        <Button
          variant="info"
          onClick={() => {
            emptyCart();
          }}
        >
          <Link to="/" style={{ color: "black" }}>
            Volver a comprar
          </Link>
        </Button>
        <Button variant="success" onClick={handleClik}>
          <Link to="/checkout" style={{ color: "white" }}>
            Finalizar la compra
          </Link>{" "}
        </Button>
      </Table>
    </>
  );
}

export default Cart;

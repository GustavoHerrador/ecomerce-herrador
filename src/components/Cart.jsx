import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { VscTrash } from "react-icons/vsc";

function Cart() {
  const { deleteItem, getItemPrice, emptyCart, cart, getItemQty } =
    useContext(CartContext);
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nombreProducto}</td>
              <td>{getItemQty()}</td>
              <td>${getItemPrice()}</td>
            </tr>
          ))}
        </tbody>
        {cart.length > 0 ? (
          <Button
            variant="danger"
            onClick={() => {
              deleteItem();
            }}
          >
            {" "}
            <VscTrash>X</VscTrash>{" "}
          </Button>
        ) : (
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
        )}
        <Button variant="success">Finalizar la compra</Button>
      </Table>
    </>
  );
}

export default Cart;

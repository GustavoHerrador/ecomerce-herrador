import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { VscTrash } from "react-icons/vsc";

function Cart() {
  const { deleteItem, getItemPrice, emptyCart, cart } = useContext(CartContext);
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
        <Button variant="success">Finalizar la compra</Button>
      </Table>
    </>
  );
}

export default Cart;

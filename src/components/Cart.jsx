import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Cart() {
  const { deleteItem, getItemPrice, emptyCart, cart, addItem, getItemQty } =
    useContext(CartContext);
  return (
    <>
      <Table
        striped
        bordered
        hover
        variant="blue
      "
      >
        {cart.length > 0 && <div></div>}
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{cart.nombreProducto}</td>
            <td>{getItemQty()}</td>
            <td>{getItemPrice()}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Cart;

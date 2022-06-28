import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export default function CheckOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const { cart, getItemPrice } = useContext(CartContext);
  let navigate = useNavigate();

  const db = getFirestore();
  const ticketCollection = collection(db, "tickets");

  const handleClick = () => {
    const ticket = {
      buyer: { name, email, phone },
      items: cart,
      total: getItemPrice(),
    };
    if (cart >= 0) {
      alert("No hay productos en el carrito");
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
    if (name === "" || email === "" || phone === "") {
      alert("Todos los campos son obligatorios");
    } else {
      swal({
        title: "La compra fue un exito",
        text: "Toca el boton para seguir comprando",
        icon: "success",
        button: "Continuar",
      });
      navigate("/");
    }
    addDoc(ticketCollection, ticket).then(({ nombreProducto, id }) => {
      console.log(name, id);
    });
  };

  return (
    <>
      <h1>Complete los datos para terminar su compra</h1>;
      <Form>
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="name"
          placeholder="Ingrese su nombre completo"
          onChange={(e) => setName(e.target.value)}
        />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese un email valido"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Ingrese su telefono o celular"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button
          variant="primary"
          onClick={handleClick}
          disabled={disabledButton}
        >
          Comprar
        </Button>
      </Form>
    </>
  );
}

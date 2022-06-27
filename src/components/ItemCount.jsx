import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ stock, nombreProducto, initial, onAdd, price }) {
  const [productQuantity, setProductQuantity] = useState(initial);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableRemoveButton, setDisableRemoveButton] = useState(false);
  const [addCartButton, setAddCartButton] = useState(true);
  const { isInCart, addItem } = useContext(CartContext);

  useEffect(() => {
    if (productQuantity >= stock) {
      setDisableAddButton(true);
    } else {
      setDisableAddButton(false);
    }

    if (productQuantity <= 0) {
      setDisableRemoveButton(true);
    } else {
      setDisableRemoveButton(false);
    }
  }, [productQuantity, stock]);

  return (
    <div className="item">
      <h2>
        {nombreProducto}:{productQuantity}
      </h2>{" "}
      <button
        className="plus"
        disabled={disableAddButton}
        onClick={() => {
          setProductQuantity(productQuantity + 1);
        }}
      >
        Agregar
      </button>
      <button
        className="remove"
        disabled={disableRemoveButton}
        onClick={() => {
          setProductQuantity(productQuantity - 1);
        }}
      >
        Quitar{" "}
      </button>
      <br />
      {addCartButton ? (
        <button
          className="add"
          onClick={(e) => {
            onAdd(nombreProducto, productQuantity, stock);
            setAddCartButton(false);
            if (productQuantity === 0) {
              setAddCartButton(true);
            } else {
              isInCart(initial.id);
              addItem(initial, productQuantity, price);
            }
          }}
        >
          Agregar al carrito
        </button>
      ) : (
        <Button>
          <Link to="/cart" style={{ color: "white" }}>
            {" "}
            Finalizar la compra{" "}
          </Link>
        </Button>
      )}
    </div>
  );
}
export default ItemCount;

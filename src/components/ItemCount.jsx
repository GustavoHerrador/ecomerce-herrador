import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

function ItemCount({ stock, nombreProducto, initial, onAdd }) {
  const [productQuantity, setProductQuantity] = useState(initial);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableRemoveButton, setDisableRemoveButton] = useState(false);
  const [addCartButton, setAddCartButton] = useState(true);

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
            }
          }}
        >
          Agregar al carrito
        </button>
      ) : (
        <Link to="/cart"> Finalizar la compra </Link>
      )}
    </div>
  );
}
export default ItemCount;

import { useState, useEffect } from "react";
import "./ItemCount.css";

function ItemCount({ stock, nombreProducto, initial, onAdd }) {
  const [productQuantity, setProductQuantity] = useState(initial);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableRemoveButton, setDisableRemoveButton] = useState(false);

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
      <button
        className="add"
        onClick={() => onAdd(nombreProducto, productQuantity, stock)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;

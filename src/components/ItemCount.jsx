import { useState, useEffect } from "react";
import "./ItemCount.css";

function ItemCount({ stock, nombreProducto, initial }) {
  const [productQuantity, setProductQuantity] = useState(initial);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableRemoveButton, setDisableRemoveButton] = useState(false);
  const onAdd = () => {
    if (productQuantity == 0) {
      alert("Cargue al menos un producto");
      return;
    } else if (productQuantity > stock) {
      alert("No hay stock suficiente");
      return;
    } else {
      alert(`Se agregaron ${productQuantity} ${nombreProducto}(s)`);
    }
  };
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
      <button className="add" onClick={() => onAdd()}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;

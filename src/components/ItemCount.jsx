import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAdd, nombreProducto }) {
  const [initial, setInitial] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [stockCount, setStockCount] = useState(stock);
  return (
    <div className="item">
      <h2>
        {nombreProducto}:{initial}
      </h2>{" "}
      <button
        className="plus"
        disabled={disableButton}
        onClick={() => {
          setInitial(initial + 1);
          if (stockCount == 0) {
            setDisableButton(true);
          } else {
            setStockCount(stockCount - 1);
          }
        }}
      >
        Agregar
      </button>
      <button
        className="remove"
        onClick={() => setInitial(initial - 1, setDisableButton(false))}
      >
        Quitar{" "}
      </button>
      <br />
      <button className="add" onClick={() => onAdd(initial)}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;

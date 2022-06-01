import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ saludo }) => {
  const onAdd = (nombreProducto, productQuantity, stock) => {
    if (productQuantity === 0) {
      alert("Cargue al menos un producto");
      return;
    } else if (productQuantity > stock) {
      alert("No hay stock suficiente");
      return;
    } else {
      alert(`Se agregaron ${productQuantity} ${nombreProducto}(s)`);
    }
  };
  return (
    <>
      <h1 className="saludo"> {saludo}</h1>
      <ItemCount nombreProducto="Te" stock={4} initial={1} onAdd={onAdd} />
      <ItemCount nombreProducto="Cafe" stock={4} initial={1} onAdd={onAdd} />
      <ItemCount
        nombreProducto="Chocolate"
        stock={4}
        initial={1}
        onAdd={onAdd}
      />
    </>
  );
};

export default ItemListContainer;

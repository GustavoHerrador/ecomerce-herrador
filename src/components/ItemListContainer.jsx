import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ saludo }) => (
  <>
    <h1 className="saludo"> {saludo}</h1>
    <ItemCount nombreProducto="Te" stock={4} initial={1} />
    <ItemCount nombreProducto="Cafe" stock={4} initial={1} />
    <ItemCount nombreProducto="Chocolate" stock={4} initial={1} />
  </>
);

export default ItemListContainer;

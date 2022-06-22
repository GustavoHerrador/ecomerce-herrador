import { useContext } from "react";
import { Cart3 } from "react-bootstrap-icons";
import { CartContext } from "../Context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);
  return (
    <>
      <Cart3 className="carrito" />
      <div className="cartnumber"> {getItemQty} </div>
    </>
  );
}
export default CartWidget;

import { Cart3 } from "react-bootstrap-icons";
import "./CartWidget.css";

function CartWidget() {
  return (
    <>
      <Cart3 className="carrito" />
      <div className="cartnumber"> 4 </div>
    </>
  );
}
export default CartWidget;

import "././ItemDetail.css";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
  const onAdd = (nombreProducto, productQuantity, stock) => {
    if (productQuantity === 0) {
      alert("Cargue al menos un producto");
      return;
    } else if (productQuantity > stock) {
      alert("No hay stock suficiente");
    }
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={detail.pictureUrl}
          alt={detail.nombreProducto}
          className="card-img-top"
        />
        <ItemCount
          nombreProducto={detail.nombreProducto}
          stock={4}
          initial={1}
          onAdd={onAdd}
        />
        <div className="card-body">
          <p>{detail.description}</p>
          <h3>Valor: ${detail.price}</h3>
          <p>stock: {detail.stock}</p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

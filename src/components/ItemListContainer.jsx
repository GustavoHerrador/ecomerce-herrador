import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const promiseItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombreProducto: "Te",
            price: 50,
            pictureUrl:
              "https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup.png",
            description: "Te de la casa",
          },
          {
            id: 2,
            nombreProducto: "Cafe",
            price: 100,
            pictureUrl:
              "https://e7.pngegg.com/pngimages/701/428/png-clipart-coffee-beans-coffee-coffee-beans.png",
            description:
              "Cafe extraido desde la mismisima Colombia, tierra del café",
          },
          {
            id: 3,
            nombreProducto: "Chocolate",
            price: 150,
            pictureUrl:
              "https://img.lovepik.com/original_origin_pic/19/01/05/8e0e44815647049ee62623d2b755d66b.png_wh860.png",
            description:
              "Chocolate realizado por nuestros mejores chocolateros.",
          },
        ]);
      }, 500);
    });
    promiseItems
      .then((data) => {
        if (id) {
          const filteredItems = data.filter(
            (d) => d.nombreProducto.toLowerCase() === id.toLowerCase()
          );

          setItems(filteredItems);
        } else {
          setItems(data);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (nombreProducto, productQuantity, stock) => {
    if (productQuantity === 0) {
      alert("Cargue al menos un producto");
      return;
    } else if (productQuantity > stock) {
      alert("No hay stock suficiente");
      return;
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
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;

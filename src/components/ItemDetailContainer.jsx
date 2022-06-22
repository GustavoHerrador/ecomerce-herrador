import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const promiseDetail = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombreProducto: "Te",
            price: 50,
            pictureUrl:
              "https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup.png",
            description:
              "Te elaborado con finas hierbas, maceradas y estacionadas.",
            stock: 4,
          },
          {
            id: 2,
            nombreProducto: "Cafe",
            price: 50,
            pictureUrl:
              "https://e7.pngegg.com/pngimages/701/428/png-clipart-coffee-beans-coffee-coffee-beans.png",
            description:
              "Cafe extraido desde la mismisima Colombia, tierra del café",
            stock: 4,
          },
          {
            id: 3,
            nombreProducto: "Chocolate",
            price: 50,
            pictureUrl:
              "https://img.lovepik.com/original_origin_pic/19/01/05/8e0e44815647049ee62623d2b755d66b.png_wh860.png",
            description:
              "Chocolate realizado por nuestros mejores chocolateros.",
            stock: 4,
          },
        ]);
      }, 500);
    });
    promiseDetail.then((itemDetail) => {
      if (id) {
        const foundDetail = itemDetail.find((d) => d.id === parseInt(id));
        setDetail(foundDetail);
      }
    });
    promiseDetail.catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
}

export default ItemDetailContainer;

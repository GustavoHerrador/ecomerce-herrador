import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const promiseDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          nombreProducto: "Te",
          price: 50,
          pictureUrl:
            "https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup.png",
          description:
            "Te elaborado con finas hierbas, maceradas y estacionadas.",
          stock: 10,
        });
      }, 2000);
    });
    promiseDetail.then((itemDetail) => setDetail(itemDetail));
    promiseDetail.catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail detail={detail} />;
    </>
  );
}

export default ItemDetailContainer;

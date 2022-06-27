import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "Item", id);
    getDoc(productRef)
      .then((snapshot) => {
        setDetail({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
}

export default ItemDetailContainer;

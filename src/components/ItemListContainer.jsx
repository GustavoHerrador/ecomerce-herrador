import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "Item");

    if (id) {
      const q = query(productsCollection, where("nombreProducto", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;

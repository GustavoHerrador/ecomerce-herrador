import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ItemCount from "./components/ItemCount";
import CustomNavbar from "./components/customNavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <CustomNavbar />
      <ItemListContainer saludo="Bienvenido a mi primer e-commerce" />
    </>
  );
}
export default App;

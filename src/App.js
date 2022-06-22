import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import CustomNavbar from "./components/customNavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import MyProvider from "./Context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <CustomNavbar />
          {/* <ItemListContainer saludo="Bienvenido a mi primer e-commerce" /> */}
          {/* <ItemDetailContainer /> */}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </>
  );
}
export default App;

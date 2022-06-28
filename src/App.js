import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import CustomNavbar from "./components/customNavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import MyProvider from "./Context/CartContext";
import { initializeApp } from "firebase/app";
import CheckOut from "./components/CheckOut";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA6u02Ml3CVCb_qjJp6AU2sqJ3u0pm0mzs",
    authDomain: "ecommerce-herrador.firebaseapp.com",
    projectId: "ecommerce-herrador",
    storageBucket: "ecommerce-herrador.appspot.com",
    messagingSenderId: "253277358755",
    appId: "1:253277358755:web:ff35356e145911b4980d16",
  };

  initializeApp(firebaseConfig);

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
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </>
  );
}
export default App;

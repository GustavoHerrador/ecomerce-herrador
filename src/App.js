import "./index.css";
import React from "react";
import CustomNavbar from "./components/customNavBar";
import MyProvider from "./Context/CartContext";
import { initializeApp } from "firebase/app";

import MyRoutes from "./Routes/MyRoutes";

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
      <MyProvider>
        <div className="app">
          <MyRoutes />
        </div>
      </MyProvider>
    </>
  );
}

export default App;

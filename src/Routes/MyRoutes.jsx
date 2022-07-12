import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import RequireAuth from "./RequireAuth";
import RequireNoAuth from "./RequireNoAuth";
import Main from "../components/Main";
import CustomNavBar from "../components/customNavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import CheckOut from "../components/CheckOut";
import LogOutUsers from "../components/LogOutUsers";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <RequireNoAuth>
              <Login />
            </RequireNoAuth>
          }
        />
        <Route
          path="/item-list"
          element={
            <RequireAuth>
              <ItemListContainer />
            </RequireAuth>
          }
        />
        <Route
          path="/category/:id"
          element={
            <RequireAuth>
              <ItemListContainer />
            </RequireAuth>
          }
        />
        <Route
          path="item/:id"
          element={
            <RequireAuth>
              <ItemDetailContainer />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />{" "}
        <Route path="/logoutusers" element={<LogOutUsers />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MyRoutes;

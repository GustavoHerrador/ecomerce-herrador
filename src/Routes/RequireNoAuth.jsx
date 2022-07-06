import React from "react";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

export default function RequireNoAuth({ children }) {
  if (!localStorage.getItem("jwt_access_token")) {
    return children;
  } else {
    swal("Ya esta logueado", "", "warning");
    return <Navigate to="/item-list" />;
  }
}

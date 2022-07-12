import React from "react";
import swal from "sweetalert";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function RequireNoAuth({ children }) {
  if (!localStorage.getItem("jwt_access_token")) {
    return children;
  }
  swal("Ya estas logueado", "", "warning");
  return <Navigate to="/item-list" />;
}

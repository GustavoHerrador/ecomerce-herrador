import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  let navigate = useNavigate();
  if (!localStorage.getItem("jwt_access_token")) {
    swal(
      "Por favor inicie sesión para ver los productos",
      "cargue sus datos",
      "error"
    );
  } else {
    navigate("/login");
  }

  return children;
}

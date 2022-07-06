import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();
  if (!localStorage.getItem("jwt_access_token")) {
    navigate("/login");
  } else {
    navigate("/item-list");
  }
}

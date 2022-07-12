import React, { useState } from "react";
import Swal from "sweetalert2";
import "./LogOutUsers.css";
import { useNavigate } from "react-router-dom";

function LogOutUsers() {
  const [authToken, setAuthToken] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const logOutUser = () => {
    localStorage.removeItem("jwt_access_token");
    setAuthToken(false);
    setCurrentUser({});
    navigate("/login");
  };

  Swal.fire({
    title: "Estas seguro que deseas salir?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si, salir",
    denyButtonText: "Seguir comprando",
    customClass: {
      actions: "my-actions",
      cancelButton: "order-1 right-gap",
      confirmButton: "order-2",
      denyButton: "order-3",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deslogueado con exito!", "", "success");
      return logOutUser(true);
    } else if (result.isDenied) {
      Swal.fire("Se descartaron los cambios", "", "info");
      return navigate("/item-list");
    }
  });
}
export default LogOutUsers;

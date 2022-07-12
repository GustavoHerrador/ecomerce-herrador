import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Logout() {
  let Navigate = useNavigate();

  const logOutUser = () => {
    Navigate("/logoutusers");
  };
  return (
    <>
      <Button variant="outline-danger" onClick={logOutUser}>
        {" "}
        Logout
      </Button>
    </>
  );
}

export default Logout;

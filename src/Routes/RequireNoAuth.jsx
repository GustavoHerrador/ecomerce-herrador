import React from 'react';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireNoAuth({ children }) {
  let navigate = useNavigate();

  useEffect(() => {}, []);
  if (!localStorage.getItem('jwt_access_token')) {
    return children;
  } else {
    swal('Ya estas logueado', '', 'warning');
    navigate('/item-list');
  }
}

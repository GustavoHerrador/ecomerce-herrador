import React from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Main() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt_access_token')) {
      console.log('prueba2');
      navigate('/login');
    } else {
      navigate('/item-list');
    }
  }, []);
}

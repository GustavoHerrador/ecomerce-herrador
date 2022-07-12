import React from 'react';
import swal from 'sweetalert';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function RequireAuth({ children }) {
  if (!localStorage.getItem('jwt_access_token')) {
    swal(
      'Por favor inicie sesión para ver los productos',
      'cargue sus datos',
      'error'
    );
    return <Navigate to='/login' />;
  }

  return children;
}

import React, { Fragment, FormEventHandler } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

const Login = () => {
  const [values, setValues] = useState({});

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  let navigate = useNavigate();
  const postToLogin = () => {
    fetch('http://192.168.1.41:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);

        localStorage.setItem('jwt_access_token', data.jwt_access_token);

        console.log(localStorage.getItem('jwt_access_token'));
        swal('Bienvenido', '', 'success');

        navigate('/item-list');
      });
    if (localStorage.setItem('jwt_access_token')) {
      navigate('/item-list');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.persist();
    postToLogin();
  };

  return (
    <>
      <Fragment>
        <h1>Acercate a conocernos, te esperamos!</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='formGridEmail'>
            <Form.Label>Usuario </Form.Label>
            <Form.Control
              name='username'
              onChange={onFormChange}
              placeholder='Ingrese su usuario'
              type='text'
              required='required'
            />
          </Form.Group>
          <Form.Group controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              onChange={onFormChange}
              placeholder='Ingrese su contraseña'
              type='password'
              required={true}
            />
          </Form.Group>

          <Button variant='primary' type='submit' icon='arrow-circle-right'>
            Submit
          </Button>
        </Form>
      </Fragment>
    </>
  );
};

export default Login;

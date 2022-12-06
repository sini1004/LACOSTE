import React from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true); //로그인되게 변경
    navigate('/'); //첫 페이지로 이동
  }

  return (
    <div className='container login_area'>
      <Form className='login_form' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
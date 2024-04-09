import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import NavbarLogin from './NavbarLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Netflix@gmail.com' && password === 'admin') {
      navigate('/Main');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container fluid className='bg1'>
       <NavbarLogin />
      <Row>
        <Col md={6} lg={6} className='d-none d-md-block'>
          <div className='login-content align-items-center justify-content-center px-5'>
            <h1 className='display-4 fw-bolder text-white pb-4 pl-5'>See What's Next!</h1>
            <h5 className='text-white'>WATCH ANYWHERE, CANCEL ANYWHERE</h5>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} className='log-col mt-5'>

          <Card className="cardbg">
            <Card.Body>
              <h1 id='h1' className='text-center text-danger fw-bolder'>NETFLIX</h1>
              <h2 className='text-center text-white'>Login Page</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter email" />
                  <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
                  <p>Demo Email: Netflix@gmail.com</p>
                  <p>Password: admin</p>
                </Form.Group>
                <Button className='button1 text-center fe-bold w-100' variant="danger" type="button" onClick={handleLogin}>
                  Submit
                </Button>
                {error && <div className="error-message">{error}</div>}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}

import React from 'react';
import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import img from '../../Images/Logo.jpg';
import { useNavigate } from 'react-router-dom';

export default function NavbarLand() {

  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/Login');
  }

  return (
    <Navbar className="navbarland" variant="dark">
      <Container fluid className='container'>
        <Row className="rowland w-100 align-items-center justify-content-between">
          <Col xs={6} lg={8}>
            <Navbar.Brand href="#Home">
              <img src={img} alt="NavLogo" className="nav-logo" />
            </Navbar.Brand>
          </Col>
          <Col xs={6} lg={4} className="d-flex justify-content-end ">
            <Button variant="danger" className='button'>English</Button>
            <Button onClick={handleOkClick} variant="danger" className='button'>Login</Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

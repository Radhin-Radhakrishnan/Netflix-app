import React from 'react';
import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import img from '../../Images/Logo.jpg';
import { useNavigate } from 'react-router-dom';

export default function NavbarLogin() {
  const navigate = useNavigate();

  const handleOkCancel = () => {
    navigate('/');
  }

  return (
    <Navbar className="Navbarlogin" variant="dark">
      <Container fluid className='Container'>
        <Row className="w-100 align-items-center justify-content-between">
          <Col xs={6} lg={6}>
            <Navbar.Brand href="#home">
              <img src={img} alt="NavLogo" className="img1"/>
            </Navbar.Brand>
          </Col>
          <Col xs={6} lg={6} className="d-flex justify-content-end">
            <Button onClick={handleOkCancel} variant="danger" className='button'>Cancel</Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

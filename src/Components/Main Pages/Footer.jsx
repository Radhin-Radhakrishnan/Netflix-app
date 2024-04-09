import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor suscipit velit.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="">Home</a></li>
              <li><a href="">Movies</a></li>
              <li><a href="">TV Shows</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>1234 Main St, New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <p className="text-center">© {new Date().getFullYear()} Netflix Clone App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
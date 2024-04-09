import React from 'react';

import {Container,Row,Col,} from 'react-bootstrap';
import NavbarLand from './NavbarLand';
export default function LandingPage() {
  return (

    <Container fluid className='bg'>
    <NavbarLand/>
        <Row className='row-land '>
          <Col className='text-center align-items-center justify-content-center'>
          <div className='header-content text-white'>
             <h1 className='display-4 fw-bolder'>Unlimited Movies,Tv shows and More.</h1>
             <h3 className='mb-3 fw-bold'>Watch anywhere,Cancel any time</h3>
             <p className='fs-2'>Ready To Watch ? Go on Subscribe!</p>
              </div>
          </Col>
        </Row>
  

    </Container>
  
  );
}

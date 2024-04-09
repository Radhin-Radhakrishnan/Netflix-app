import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MainNavbar from './MainNavbar';
import RowCards from './RowCards';
import axios from '../../axios';
import {trending,action,adventure,animation,crime,horror,romance,thriller,fiction,mystery,fantasy} from '../../urls';
import { API_KEY, imageUrl } from '../../Constants/constants';
import Features from './Features';
import Footer from './Footer';

export default function MainView() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios.get(`movie/top_rated?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      setMovie(response.data.results[0]);
    });
  }, []);
  return (
    <Container fluid className='Main'>
      <MainNavbar />
      <Row className="banner">
        <Col className="banner-img text-white pt-5" style={{ backgroundImage: `url(${movie && imageUrl + movie.backdrop_path})` }}>
          <h1 className='title display-2 fw-bolder pt-5'>{movie && movie.title}</h1>
          <div className='banner-buttons '>
            <Button className='btns mx-2'>Play</Button>
            <Button className='btns'>My List</Button>
          </div>
          <h5 className='description pt-1'>{movie && movie.overview}</h5>
        </Col>  
      </Row>
      <RowCards url={trending} title='TRENDING'/>
      <RowCards url={action} title='ACTION' isSmall/>
      <RowCards url={adventure} title='ADVENTURE' isSmall/>
      <RowCards url={animation} title='ANIMATION' isSmall/>
      <RowCards url={crime} title='CRIME' isSmall/>
      <RowCards url={horror} title='HORROR' isSmall/>
      <RowCards url={romance} title='ROMANCE' isSmall/>
      <RowCards url={thriller} title='THRILLER' isSmall/>
      <RowCards url={fiction} title='FICTION' isSmall/>
      <RowCards url={mystery} title='MYSTERY' isSmall/>
      <RowCards url={fantasy} title='FANTASY' isSmall/>
      <Features/>
      <Footer/>
    </Container>
  );
}

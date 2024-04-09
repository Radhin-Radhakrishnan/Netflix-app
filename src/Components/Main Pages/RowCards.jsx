import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { Container } from 'react-bootstrap';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/constants';
import { AiTwotoneCloseCircle } from "react-icons/ai";

export default function RowCards(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        console.error('Network Error:', err);
      });
  }, []);

  const opts = {
    height: '390',
    width: '450',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Array empty');
        }
      })
      .catch(err => {
        console.error('Error fetching video:', err);
      });
    
  };
  const handleCloseYtube= ()=>{
    setUrlId(null);
  }

  return (
    <Container fluid className='Rowcards'>
      <div className='Row'>
        <h3 className='text-white'>{props.title}</h3>
        <div className='posters'>
          {movies.map((obj, index) =>
            <img
              key={index}
              onClick={() => handleMovie(obj.id)}
              src={`${imageUrl + obj.backdrop_path}`}
              className={props.isSmall ? 'smallPoster' : 'img-fluid'}
              alt="poster"
            />
          )}
        </div>
        {urlId && (
          <div onClick={handleCloseYtube}> 
           <AiTwotoneCloseCircle/>
            <YouTube opts={opts} videoId={urlId.key} />
          </div>
        )}
      </div>
    </Container>
  );
}

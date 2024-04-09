import React from 'react'
import { Container} from 'react-bootstrap'
import Imafea1 from '../../Images/feature-1.png'
import Imafea2 from '../../Images/feature-2.png'
import Imafea3 from '../../Images/feature-3.png'
import Imafea4 from '../../Images/feature-4.png'
export default function Features() {
  return (
     <Container fluid className='fea-bg'>
       <div className='row1'>
        <div className='text-col'>
       <h2 className='fw-bold'>Enjoy On Your TV</h2>
       <p>Watch on Smart Tvs,PlayStation,Xbox,Chromecast,Apple Tv,Blu-Ray Players and More.</p>
       </div>
        <div className='img-col'>
       <img src={Imafea1} alt="" className='imgfae-1'/>
       </div>
       </div>

       <div className='row2 pl-2'>
        <div className='img-col'>
       <img src={Imafea2} alt="" className='imgfae-1'/>
       </div>
       <div className='text-col'>
       <h2 className='fw-bold'>Download your shows to watch offline</h2>
       <p>Save your favourites easily and always have something to watch. </p>
       </div>
       </div>
    
       <div className='row1'>
        <div className='text-col'>
       <h2 className='fw-bold'>Watch Everywhere</h2>
       <p>Stream unlimited movies and TV shows on your phone,tablet,laptop and TV.</p>
       </div>
       

        <div className='img-col'>
       <img src={Imafea3} alt="" className='imgfae-1'/>
       </div>
       </div>
    
       <div className='row1'>
        <div className='img-col'>
       <img src={Imafea4} alt="" className='imgfae-1'/>
       </div>
       <div className='text-col'>
       <h2 className='fw-bold'>Create profiles for Children.</h2>
       <p>Send Children on adventure with their favourite characters in a space made just for them free with your membership.</p>
       </div>
       </div>
      
     </Container>
  )
}

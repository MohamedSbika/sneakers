import React from 'react';
import Multiple from"../assets/multiple.jpg";
import "../styles/About.css";
import { AlignVerticalBottom } from '@mui/icons-material';
import Navbar from '../components/Navbar';


function About() {
  return (
    <div>
        <Navbar/>

    <div className='about'>
        <div className='aboutTop'
        style={{ backgroundImage: `url(${Multiple})` }}></div>
        <div className='aboutBottom'></div>
        <h1>About us</h1>
        <p >Lorem ipsum dolor sit amet. Aut optio nisi qui dolorem laborum id consequatur voluptatem 
            est reprehenderit tempore est numquam natus. Et voluptates nulla ut autem nobis nam consequatur
            nisi eum ipsum sint ut quisquam ipsum qui repellendus voluptatem et eligendi quaerat! Aut quasi
            sunt qui consequatur laudantium et doloribus cupiditate aut tempore sequi eos quam delectus ab
            aliquid maiores. Ut corrupti necessitatibus eos laboriosam labore non accusamus magni.</p>
       
        
            </div>
    </div>
  );
}

export default About 

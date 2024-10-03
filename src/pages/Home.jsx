// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/useAuth'; // Assurez-vous que le chemin est correct

function Home() {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log('hello');
    console.log("Current User:", currentUser); // Ajoutez ceci pour inspecter la structure

    if (currentUser) {
      console.log("User role:", currentUser.email);
    }
  }, [currentUser]);

  return (
    <div>
      <Navbar />

      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
          <h1>Cycy's shoes</h1>
          <p>Walk the Path of Awesomeness</p>
          <Link to="/menu">
            <button>Order Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import logo from "../assets/icelogo.jpg";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importer l'icône du panier

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // État pour le nombre d'articles dans le panier
  const navigate = useNavigate(); // Pour la redirection après la déconnexion

  useEffect(() => {
    // Récupérer le nombre d'articles du panier à partir du localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemCount(cart.length);
  }, []); // Mettre à jour lors du chargement du composant

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:4000/shop/auth/signout', {
        method: 'GET',
        credentials: 'include', // Envoie les cookies avec la requête
      });
      if (res.ok) {
        const response = await res.json();
        console.log(response.message); // Vérifier le message reçu du backend
        navigate('/'); // Redirection après déconnexion réussie
      } else {
        console.error('Failed to sign out:', res.statusText);
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/home">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About</Link>
          <Link onClick={handleLogout}>Logout</Link>
          <Link to="/panier"> {/* Lien vers la page du panier */}
            <div className="cartIconContainer">
              <ShoppingCartIcon fontSize="small" /> {/* Icône du panier */}
              {cartItemCount > 0 && (
                <span className="cartBadge">{cartItemCount}</span> // Affichage du nombre d'articles
              )}
            </div>
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/home">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link onClick={handleLogout}>Logout</Link>
        <Link to="/panier"> {/* Lien vers la page du panier */}
          <div className="cartIconContainer">
            <ShoppingCartIcon fontSize="small" /> {/* Icône du panier */}
            {cartItemCount > 0 && (
              <span className="cartBadge">{cartItemCount}</span> // Affichage du nombre d'articles
            )}
          </div>
        </Link>
        <button onClick={toggleNavbar}>
          <DensityMediumIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;

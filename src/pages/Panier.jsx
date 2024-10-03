import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function Panier() {
  const [cartItems, setCartItems] = useState([]);

  // Charger le panier depuis le localStorage lors de l'initialisation
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Fonction pour supprimer un article du panier
  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Supprimer l'article de l'état cartItems
    setCartItems(updatedCart); // Mettre à jour l'état avec les articles restants
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Mettre à jour le localStorage
  };

  return (
    <div>
      <Navbar />
      <h1>Votre Panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <div style={{ marginLeft: '20px' }}>
                <h2>{item.name}</h2>
                <p>Prix : {item.price} DT</p>
              </div>
              {/* Bouton pour supprimer l'article du panier */}
              <button 
                onClick={() => handleRemoveItem(index)} 
                style={{ marginLeft: 'auto', padding: '5px 10px', cursor: 'pointer', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Panier;

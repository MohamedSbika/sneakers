import React, { useState, useEffect } from 'react';
import "../styles/Menu.css";
import Navbar from '../components/Navbar';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch('http://localhost:4000/shop/sneakers/'); // Assurez-vous que cette URL est correcte
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSneakers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/shop/sneakers/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
      setSneakers(sneakers.filter((sneaker) => sneaker._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <div className='menu'>
        <h1 className='menuTitle'>Our Sneakers</h1>
        <div className='menuList'>
          {sneakers.map((sneaker) => (
            <MenuItem
              key={sneaker._id}
              id={sneaker._id}
              image={sneaker.imgUrl}
              name={sneaker.nom}
              price={sneaker.prix}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

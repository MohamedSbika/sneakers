import React from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MenuItem({ id, image, name, price, onDelete }) {
  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const newItem = { id, name, price, image };
    cart.push(newItem);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} a été ajouté au panier !`);
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} DT </p>

      <Link to={`/updateProduct/${id}`} className="updateButton">
        <FaEdit />
      </Link>

      <button className="deleteButton" onClick={onDelete}>
        <FaTrash />
      </button>

      <button className="addToCartButton" onClick={addToCart}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default MenuItem;

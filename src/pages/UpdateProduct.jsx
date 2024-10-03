import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/UpdateProduct.css"; // Ajouter les styles si nécessaire

function UpdateProduct() {
  const { id } = useParams(); // Récupérer l'ID du produit depuis l'URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nom: '',
    prix: '',
    imgUrl: '',
    Category: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/shop/sneakers/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/shop/sneakers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      navigate('/menu'); // Rediriger vers la page des produits après la mise à jour
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="updateProduct">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Name:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={product.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Price:</label>
          <input
            type="number"
            id="prix"
            name="prix"
            value={product.prix}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={product.imgUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Category">Category:</label>
          <input
            type="text"
            id="Category"
            name="Category"
            value={product.Category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;

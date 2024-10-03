import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/CreateProduct.css"; // Assurez-vous de créer et importer le fichier CSS pour le style
import Navbar from '../components/Navbar';

function CreateProduct() {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4000/shop/sneakers/', {
        nom,
        prix: parseFloat(prix),
        imgUrl,
        Category: category,
      });
      setSuccess('Produit ajouté avec succès !');
      setNom('');
      setPrix('');
      setImgUrl('');
      setCategory('');
      navigate('/Menu');
    } catch (err) {
      setError('Erreur lors de l\'ajout du produit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="create-product">
      <h1>Ajouter un Nouveau Produit</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix</label>
          <input
            type="number"
            id="prix"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">URL de l'image</label>
          <input
            type="text"
            id="imgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Choisir une catégorie</option>
            <option value="men">Hommes</option>
            <option value="women">Femmes</option>
            <option value="kids">Enfants</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Envoi en cours...' : 'Ajouter le produit'}
        </button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </div>
  );
}

export default CreateProduct;

// src/pages/Login.jsx
import React, { useState } from "react";
import Shoesleft from "../assets/Shoesleft.avif";
import "../styles/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/useAuth'; // Assurez-vous du bon chemin

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth(); // Utilisez le hook pour accéder à la fonction de login

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      await login(formData.Email, formData.Password); // Utilisez la fonction de login du contexte
      navigate("/home");
    } catch (error) {
      setResponseMessage("An error occurred while signing in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Shoesleft})` }}
      ></div>
      <div className="rightSide">
        <h1> Sign In </h1>

        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" method="POST">
          
          <label htmlFor="email">Email</label>
          <input
            {...register("Email", { required: true })}
            name="Email"
            placeholder="Enter email..."
            type="email"
          />
          {errors.Email && <span>Email is required</span>}

          <label htmlFor="password">Password</label>
          <input
            {...register("Password", { required: true })}
            name="Password"
            type="password"
          />
          {errors.Password && <span>Password is required</span>}

          <button type="submit" disabled={loading}> 
            {loading ? "Signing in..." : "Login"}
          </button>

          {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}

          <Link to="/signup">
            <p>Still not a member? Sign Up</p>          
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Signup.css";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/shop/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // setResponseMessage(data.message || "User created successfully");
      navigate("/")

    } catch (error) {
      setResponseMessage("An error occurred while signing up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact2">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} id="contact-form2" method="POST">
        <label htmlFor="name">Name</label>
        <input
          {...register("nom", { required: true })}
          name="nom"
          placeholder="Enter name..."
          type="text"
        />
        {errors.nom && <span>Name is required</span>}

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
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default SignUp;

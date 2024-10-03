// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Ajoutez ici une logique pour vérifier si un utilisateur est déjà connecté au chargement
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:4000/shop/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          userPassword: password
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setCurrentUser(data.user);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch('http://localhost:4000/shop/auth/signout', {
        method: 'POST',
      });
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

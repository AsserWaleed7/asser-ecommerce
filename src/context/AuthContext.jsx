import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking localStorage for auth token
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ id: 1, email: 'user@example.com' });
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login
    localStorage.setItem('token', 'fake-jwt-token');
    setUser({ id: 1, email });
  };

  const register = (email, password) => {
    // Simulate register
    localStorage.setItem('token', 'fake-jwt-token');
    setUser({ id: 1, email });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
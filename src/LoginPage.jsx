import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginStatus('success');

        // Delayed redirection after 5 seconds
        setTimeout(() => {
          window.location.href = '/home'; // Update '/home' with your desired route
        }, 5000); // 5000 milliseconds (5 seconds) delay
      } else {
        setLoginStatus('error');
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus('error');
    }
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #202020, #333333)',
        color: '#fff',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          background: 'rgba(0, 0, 0, 0.8)',
          textAlign: 'center',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <h2 style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>Login to Game Portal</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderBottom: '2px solid #fff',
              background: 'transparent',
              color: '#fff',
              marginBottom: '20px',
            }}
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderBottom: '2px solid #fff',
              background: 'transparent',
              color: '#fff',
              marginBottom: '20px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ff4500',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          Play Now
        </button>
        {loginStatus === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Login successful</p>}
        {loginStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Login failed. Please check your credentials.</p>}
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          <a href="/register" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>
            Create Account
          </a>
          <span>|</span>
          <a href="/forgot-password" style={{ color: '#fff', textDecoration: 'none', marginLeft: '10px' }}>
            Forgot Password?
          </a>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default LoginPage;
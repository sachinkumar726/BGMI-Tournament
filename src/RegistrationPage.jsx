import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import Axios for HTTP requests

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password
      });

      // Handle successful registration
      console.log('Registration successful:', response.data);
      setRegistrationMessage('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
      setRegistrationMessage('Registration failed. Please try again.');
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
        <h2 style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>Create an Account</h2>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <motion.button
          type="submit"
          style={buttonStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
        {registrationMessage && <p style={{ color: registrationMessage.includes('successful') ? 'green' : 'red', marginTop: '10px' }}>{registrationMessage}</p>}
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          <a href="/login" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>
            Already have an account? Login
          </a>
        </div>
      </motion.form>
    </motion.div>
  );
};

// CSS styles for form inputs and button
const inputStyle = {
  width: '100%',
  padding: '10px',
  border: 'none',
  borderBottom: '2px solid #fff',
  background: 'transparent',
  color: '#fff',
  marginBottom: '20px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#ff4500',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  letterSpacing: '1px',
};

export default RegistrationPage;
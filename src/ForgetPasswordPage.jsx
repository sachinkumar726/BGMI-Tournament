import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement client-side validation or error handling here (for demonstration purposes)
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    // If valid, handle sending reset password email (not implemented in this example)
    alert(`Sending reset password email to: ${email}`);
    setEmail('');
    setError(null);
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
        <h2 style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>Forgot Password?</h2>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <motion.button
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Password
        </motion.button>
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          <a href="/login" style={{ color: '#fff', textDecoration: 'none' }}>
            Back to Login
          </a>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ForgetPasswordPage;

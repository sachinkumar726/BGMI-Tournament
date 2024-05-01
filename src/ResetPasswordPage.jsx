import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement client-side validation or error handling here (for demonstration purposes)
    if (!password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // If valid, handle resetting password (not implemented in this example)
    alert('Password reset successfully.');
    setPassword('');
    setConfirmPassword('');
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
        <h2 style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>Reset Password</h2>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      </motion.form>
    </motion.div>
  );
};

export default ResetPasswordPage;

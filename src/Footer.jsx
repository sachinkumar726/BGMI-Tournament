import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FaFacebookF, FaTwitter, FaInstagram, FaHome, FaInfoCircle, FaCogs, FaUsers, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Import necessary icons from react-icons/fa

const Footer = () => {
  // Define an object with link names and their corresponding icons
  const iconMap = {
    'Facebook': <FaFacebookF />,
    'Twitter': <FaTwitter />,
    'Instagram': <FaInstagram />,
    'Home': <FaHome />,
    'About': <FaInfoCircle />,
    'Services': <FaCogs />,
    'Team': <FaUsers />,
    'Contact': <FaEnvelope />,
    'Terms and Conditions': <FaFileAlt />
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a, #000000)',
        color: '#fff',
        padding: '40px 20px', // Increased padding for more spacing
        textAlign: 'center',
      }}
    >
      {/* Map through the iconMap object and render links with their corresponding icons */}
      {Object.entries(iconMap).map(([name, icon]) => (
        <motion.a
          key={name}
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '10px',
            display: 'inline-block',
            fontSize: '20px',
          }}
        >
          {icon} {name}
        </motion.a>
      ))}
      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        © {new Date().getFullYear()} AbhiNexGen IT Solutions | All Rights Reserved
      </p>
    </motion.footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import React from "react";
import './ContactPage.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </motion.form>
    </div>
  );
};

export default Contact;

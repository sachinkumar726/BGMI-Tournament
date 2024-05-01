import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage'; 
import ForgetPasswordPage from './ForgetPasswordPage'; // Import the ForgetPasswordPage component
import Contact from './ContactPage';
import './Navigation.css'; 
import './Footer.css'; 
import ResetPasswordPage from './ResetPasswordPage';


function App() {
  // Determine if the current path is '/login'
  const isLoginPage = window.location.pathname === '/login';
  // Determine if the current path is '/register'
  const isRegisterPage = window.location.pathname === '/register';
  // Determine if the current path is '/forget-password'
  const isForgetPasswordPage = window.location.pathname === '/forgot-password';

  const isContactPage = window.location.pathname === '/contact';

  return (
    <div className="App">
      <Navigation />
  
      <div>
        {/* 
          Render LoginPage if current path is '/login', 
          RegistrationPage if '/register', 
          ForgetPasswordPage if '/forget-password',
          otherwise render Home 
        */}
        {isLoginPage ? <LoginPage /> : isRegisterPage ? <RegistrationPage /> : isForgetPasswordPage ? <ForgetPasswordPage /> :isContactPage ? <Contact />: <Home />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

// AuthForm.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (data) => {
    // Handle login logic
    console.log('Login:', data);
  };

  const handleSignUpSubmit = (data) => {
    // Handle sign-up logic
    console.log('Sign Up:', data);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onLoginSubmit={handleLoginSubmit} toggleForm={toggleForm} />
      ) : (
        <SignUpForm onSignUpSubmit={handleSignUpSubmit} toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthForm;

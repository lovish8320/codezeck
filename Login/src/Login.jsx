// src/Login.jsx
import React, { useState } from 'react';
import './LoginPage.css';

function Login() {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to the console
    console.log({
      email,
      password,
      rememberMe
    });
  };

  return (
    <div className="container">
      <div className="left-side">
        <img src="https://virtina.com/wp-content/uploads/2021/04/02-1.png" alt="Company Logo" />
        <h2 style={{ color: 'black' }}>Welcome Back</h2>
        <p style={{ color: 'black' }}>We're glad to see you again! Access your account and pick up right where you left off.</p>
      </div>
      <div className="right-side">
        <h2>Login</h2>
        <p>Enter your credentials to access your account</p>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <input style={{color: 'white'
            }}
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="input-group">
            <input style={{color: 'white'
            }}
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="remember-forgot">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" style={{ position: 'static', transform: 'none', color: 'var(--text-color)' }}>
                Remember Me
              </label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <small>Don't have an account? <a href="../../signup.html">Sign Up</a></small>
        </div>
      </div>
    </div>
  );
}

export default Login;
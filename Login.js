import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const hasSpecialChar = specialChars.test(password);
  const hasNumber = /\d/.test(password);

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 8) {
      setError('Password should be at least 8 characters');
      return;
    }
    
    console.log('Username:', username);
    console.log('Password:', password);

    setError('');
    navigate('/Dash');
  };

 
 
  return (
    <div className="main">
      <h4>Enter your login</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Username:</label>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="wrap">
          <button type="submit" >Submit</button>
        </div>
      </form>
      <p>
        Not registered?
        <a href="RegistrationForm" style={{ textDecoration: 'none' }}>
          Create an account
        </a>
      </p>
    </div>
  );
}

export default Login;

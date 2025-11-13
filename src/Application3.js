import React, { useState } from 'react';

const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Please enter a valid password. It should contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 7 characters long.');
      return;
    }

    
    setIsLoggedIn(true);
 };

 const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
 };

 const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
 };

 const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
 };


 return (
    <div style={containerStyle}>
      {isLoggedIn ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      )}
    </div>
 );
};

export default LoginForm;
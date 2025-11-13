import React, { useState } from 'react';

function LoginScreen() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
 };

 const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
 };

 return (
    <div style={{ margin: '20px auto', width: '400px', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '5px' }}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px', margin: '10px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', margin: '10px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}/>
        </label>
        <br />
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', margin: '10px 0', border: 'none', cursor: 'pointer', width: '100%', opacity: '0.9' }}>Login</button>
      </form>
    </div>
 );
}

export default LoginScreen;
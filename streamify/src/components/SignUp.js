import React, { useState } from 'react';
import styles from '../Css/Sign.css'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Perform sign up request
    try {
      const response = await fetch('http://localhost:9292/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Sign up successful
        console.log('Sign up successful');
        setUsername('');
        setPassword('');
        setErrorMessage('');
      } else {
        // Error occurred during sign up
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='body'>
      <h2 className='log'>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default SignUp;

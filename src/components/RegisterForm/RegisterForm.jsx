import React, { useState } from 'react';
import axios from 'axios';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/register',
        {
          name,
          email,
          password,
        }
      );

      if (response.data?.success) {
        setSuccess(true);
        setError(null);
        setEmail('');
        setPassword('');
        setName('');
      } else {
        setError(response.data.message);
        setSuccess(false);
      }
    } catch (err) {
      // console.log(err.response.data); // Log the error response
      setError(err.response.data.message);
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text" // Corrected
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email" // Add autocomplete attribute
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password" // Add autocomplete attribute
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {error && <p>{error}</p>}
      {success && <p>Successfully registered!</p>}
    </div>
  );
};

// export default RegisterForm;

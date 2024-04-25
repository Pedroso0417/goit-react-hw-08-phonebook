import { useState } from 'react';
import axios from 'axios';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-backend-url/register', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(true);
        setError(null);
        setEmail('');
        setPassword('');
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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

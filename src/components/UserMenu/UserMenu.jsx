import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const UserMenu = ({ userEmail, onLogout }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://your-backend-url/logout');

      if (response.data.success) {
        onLogout(); // Call the onLogout function passed from the parent component
        dispatch.push('/login'); // Redirect to login page after logout
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
      {error && <p>{error}</p>}
    </div>
  );
};

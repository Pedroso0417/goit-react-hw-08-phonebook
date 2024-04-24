import { NavLink } from 'react-router-dom';
import  isAuthenticated  from './AuthNav'; // Import the isAuthenticated function from Auth.js

export const AuthNav = () => {
  const isActive = isAuthenticated(); // Check if the user is authenticated

  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>

      {!isActive && (
        <>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>

          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </>
      )}
      {isActive && (
        <>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>

          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>

          <NavLink to="/logout" activeClassName="active">
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default AuthNav;

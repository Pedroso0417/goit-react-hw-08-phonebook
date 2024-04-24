import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Assuming you have a useAuth hook to check authentication

export const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Assuming isAuthenticated is a boolean indicating whether the user is authenticated

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={redirectTo} />
        )
      }
    />
  );
};

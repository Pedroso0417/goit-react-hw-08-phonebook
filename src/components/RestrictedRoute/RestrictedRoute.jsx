import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// Assuming you have an useAuth hook to check authentication

export const RestrictedRoute = ({
  component: Component,
  redirectTo,
  ...rest
}) => {
  const { isLoggedIn } = useAuth(); // Update to use the correct property name

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Navigate to={redirectTo} />
      }
    />
  );
};

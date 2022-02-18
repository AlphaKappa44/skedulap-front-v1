import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "./context/UserContext";

const AuthRequired = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(userContext);

  if (!user.email) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthRequired;
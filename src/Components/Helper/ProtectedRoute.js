import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

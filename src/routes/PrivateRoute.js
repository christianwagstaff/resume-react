import propTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("jwt");
  // If authorized, return an outlet that will render the child elem
  // Else, Redirect user to Login
  return user ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: propTypes.any,
};

export default PrivateRoute;

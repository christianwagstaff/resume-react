import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("jwt");
  return <Navigate to="/" />;
};

export default Logout;

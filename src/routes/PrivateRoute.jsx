import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("User in pravet route", user);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/**
 * -----------------
 *      STEPS
 * -----------------
 * 1. check user is logged in or not logged
 * 2. if user is logged in, then allow thm to visit the route
 * 3. Else redirect the user to the user login page
 * 4. setup the private route
 * 5. handle loading
 *
 * **/

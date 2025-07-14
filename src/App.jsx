import React from "react";
import { useState, useEffect } from "react";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";

import { authenticationStates } from "./states/authenticationState";

const App = () => {
  const { authenticatedUser, isCheckingAuthentication, authenticationCheck } =
    authenticationStates();

  useEffect(() => {
    authenticationCheck();
  }, [authenticationCheck]);

  console.log(authenticatedUser);

  return (
    <Routes>
      <Route
        path="/"
        element={authenticatedUser ? <Homepage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={authenticatedUser ? <Navigate to="/" /> : <Loginpage />}
      />
      <Route
        path="/register"
        element={authenticatedUser ? <Navigate to="/" /> : <Registerpage />}
      />
    </Routes>
  );
};

export default App;

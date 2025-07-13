import React from 'react'
import { useState, useEffect } from "react";
import LoginPage from './pages/LoginPage';
import { Routes, Route, Navigate } from "react-router-dom";

import { authenticationStates } from './states/authenticationState'; 

const App = () => {
  const { authenticatedUser, isCheckingAuthentication, authenticationCheck } = authenticationStates();

  useEffect(() => {
    authenticationCheck();
  }, [authenticationCheck]);

  console.log(authenticatedUser);

  return (
    <Routes>
      <Route path="/" element={authenticatedUser ? <Homepage /> : <Navigate to="/login" />} />
      <Route path="/login" element={authenticatedUser ? <Navigate to="/" /> : <LoginPage />} />
    </Routes>
  )
}

export default App
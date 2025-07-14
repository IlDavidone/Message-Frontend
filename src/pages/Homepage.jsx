import React from "react";
import { authenticationStates } from "../states/authenticationState";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { authenticatedUser, logout } = authenticationStates();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    }

  return (
    <div>
        <p>{authenticatedUser.username}</p>
      <p>{authenticatedUser.user.username}</p>
      <p>{authenticatedUser.user.email}</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Homepage;

import React from "react";
import { authenticationStates } from "../states/authenticationState";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";

const Homepage = () => {
  const { authenticatedUser, logout } = authenticationStates();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    }

  return (
    <div className="flex">
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default Homepage;

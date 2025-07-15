import React from "react";
import { authenticationStates } from "../states/authenticationState";
import { useState, useEffect } from "react";
import ChatroomSidebar from "../components/chatroomSidebar";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { authenticatedUser, logout } = authenticationStates();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    }

  return (
    <div className="flex">
      <ChatroomSidebar />
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Homepage;

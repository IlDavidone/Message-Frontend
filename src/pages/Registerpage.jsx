import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { authenticationStates } from "../states/authenticationState";

const Registerpage = () => {
  const { isSigningUp, authenticatedUser, signup } = authenticationStates();

  const [passwordVisiblity, setPasswordVisibility] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(data);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
          value={data.username}
          placeholder="username"
        />
        <input
          type="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          value={data.email}
          placeholder="example@mail.org"
        />
        <input
          type={passwordVisiblity ? "text" : "password"}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          placeholder="********"
          value={data.password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registerpage;

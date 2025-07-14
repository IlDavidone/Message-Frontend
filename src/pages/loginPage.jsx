import React from "react";
import { useState } from "react";
import { authenticationStates } from "../states/authenticationState";
import { Eye, EyeClosed } from "lucide-react"
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const { signin, isLoggingIn, authenticatedUser } = authenticationStates();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(data);
    if(!authenticatedUser) {
      toast.error("Incorrect Credentials!", {duration: 1000,});
    }
  };

  return (
    <div className="h-screen w-screen bg-amber-100">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black rounded-b-sm"
          type="text"
          value={data.email}
          placeholder="example@mail.org"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <div className="flex flex-row">
        <input
          type={passwordVisibility ? "text" : "password"}
          value={data.password}
          placeholder={passwordVisibility ? "12345678" : "********"}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="button" onClick={() => setPasswordVisibility(!passwordVisibility)}>
          { passwordVisibility ? (<EyeClosed />) : (<Eye />) }
        </button>
        </div>
        <button type="submit">Log in</button>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginPage;

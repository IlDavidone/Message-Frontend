import React from 'react'
import { useState, useEffect } from "react";
import { authenticationStates } from '../states/authenticationState';

const LoginPage = () => {
  const { signin, isLoggingIn } = authenticationStates();
  const [ passwordVisibility, setPasswordVisibility ] = useState(false);
  const [ data, setData ] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(data);
    console.log(data);
  }

  return (
    <div className='h-screen w-screen bg-amber-100'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={data.email} placeholder='example@mail.org' onChange={(e) => setData({ ...data, email: e.target.value})}/>
        <input type={ passwordVisibility ? "text" : "password"} value={data.password} placeholder={ passwordVisibility ? "12345678" : "********" } onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default LoginPage

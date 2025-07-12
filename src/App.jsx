import React from 'react'
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  }

  return (
    <div className='bg-emerald-200'>
      <p className='font-bold'>Test</p>
      <button className='rounded-2xl bg-amber-300 w-32 md:w-64 lg:w-2xl' onClick={handleClick}>Click to increase counter!</button>
      <p className='font-bold'>{count}</p>
    </div>
  )
}

export default App


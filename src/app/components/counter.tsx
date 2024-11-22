// In next js, react components are server components by default and react hooks(useState, useEffect) are client components only. To convert this server component to client we use "use client";
"use client";
import { useState } from 'react'

export const Counter = () => {
  console.log('Counter Component');
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count}! times</button>
  )
}


// In next js, react components are server components by default and react hooks(useState, useEffect) are client components only. To convert this server component to client we use "use client";
"use client";
import React, { useState } from 'react'

export default function Client() {
  console.log('client side component');

  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        This is a client side component.
      </main>
      <button onClick={() => setCount(count + 1)}>clicked {count}! times</button>
    </>
  )
}

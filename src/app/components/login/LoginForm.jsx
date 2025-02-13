'use client'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import UserContext from '../../context/UserContext'
import Link from 'next/link'

function LoginForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userDetails = {
      email,
      password
    };

    await fetch('/components/login/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails)
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setEmail('');
          setPassword('');
          setLoading(false);
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
          router.push('/');
        })
      } else {
        response.json().then((data) => {
          alert(data.message);
          setLoading(false);
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Email:</span>
        <input required type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
      </label>
      <label>
        <span>Password:</span>
        <input required type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
      </label>
      <button className="btn-primary mt-6">
        {loading ?
          <span>Loging In...</span> :
          <span>Log In</span>}
      </button>
      <p className="mt-4 text-center">Don&apos;t have an account? <Link className="text-primary no-underline"
        href={"./signUp"}>Sign Up</Link></p>
    </form>
  )
}

export default LoginForm

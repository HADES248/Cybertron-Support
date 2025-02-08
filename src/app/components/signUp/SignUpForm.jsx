'use client';
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";


export default function SignUp() {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const {setUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newUser = {
      username,
      email,
      password
    };

    setUser(newUser);

    await fetch('/components/signUp/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    }).then((response) => {
      if (response.ok) {
        setUsername('');
        setEmail('');
        setPassword('');
        setLoading(false);

        router.push('/');
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Username:</span>
        {/* Setting value={title} in the input tag ensures the input field is always synced with the state title */}
        <input required type="text" onChange={(e) => { setUsername(e.target.value) }} value={username} />
      </label>
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
          <span>Signing Up...</span> :
          <span>Sign Up</span>}
      </button>
    </form>
  )
}

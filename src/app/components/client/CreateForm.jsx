// In next js, react components are server components by default and react hooks(useState, useEffect, useRouter) are client components only. To convert this server component to client we use "use client";
"use client";

import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import UserContext from "@/app/context/UserContext";

export default function CreateForm() {
  // Using useRouter hook to re-direct the user after filling the form.
  const router = useRouter();

  // Using useState hook to fill the form.
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    // preventing the default action of clearing the submitted form.
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      title,
      body,
      priority,
      user_email: user.email
    };

    // To add a new ticket(document in the database) we need to create a new API(create) as client component cannot directly cannot access the database, then we send this request to that server component and wait for response
    await fetch('/components/client/create', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newTicket)
    }).then((response) => {
      // If response is okay we reset the following properties using useState
      if (response.ok) {
        setTitle('');
        setBody('');
        setPriority('low');
        setIsLoading(false);

        // Redirecting to all the tickets after the new one added.
        router.push('/components/server');
      }
    }).catch(err => console.log(err));

  }

  return (
    <>
      {user ?
        <form onSubmit={handleSubmit} className="w-1/2">
          <label>
            <span>Title:</span>
            {/* Setting value={title} in the input tag ensures the input field is always synced with the state title */}
            <input required type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} />
          </label>
          <label>
            <span>Body:</span>
            <textarea required type="text" onChange={(e) => { setBody(e.target.value) }} value={body} />
          </label>
          <label>
            <span>Title:</span>
            <select required type="text" onChange={(e) => { setPriority(e.target.value) }} value={priority} >
              <option value="low">Low priority</option>
              <option value="medium">Medium priority</option>
              <option value="high">High priority</option>
            </select>
          </label>
          <button className="btn-primary" disabled={isLoading}>
            {isLoading ?
              <span>Adding...</span> :
              <span>Add Ticket</span>}
          </button>
        </form> : <center><h1>Please Log In to create a ticket</h1></center>}
    </>
  )
}

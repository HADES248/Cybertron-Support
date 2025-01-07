"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteTicket(props) {

  const router = useRouter();
  //using id from the server side page.
  const id = props.id;

  const [isLoading, setIsLoading] = useState(false);

  const handelDelete = async () => {
    setIsLoading(true);
    await fetch('/components/server/:id/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    }).then((response) => {
      if (response.ok) {
        setIsLoading(false);
        router.push('/components/server');
      }
    }).catch(err => console.log(err));

  }
  return (
    <button className="btn-primary inline-block absolute top-4 right-3" onClick={handelDelete} disabled={isLoading}>{isLoading ? 'Deleting...' : 'Delete Me'}</button>
  )
}

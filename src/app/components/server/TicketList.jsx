'use client';
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/app/context/UserContext";
import Link from "next/link";

export default function TicketList() {

  const { user } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getTickets() {
      setLoading(true);
      if (user) {
        await fetch('/components/server/find', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: user.email })
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setTickets(data.tickets);
              setLoading(false);
            })
          }
        })
      }
    }
    getTickets();
  }, [user]);

  return (
    <>
      {loading ? (
        <p className="text-center">Please wait while we Load the tickets</p>
      ) : (
        <>
          {
            tickets.length === 0 ? (
              <>
                <p className="ml-1 text-center">No tickets found</p>
                <Link href={'../components/client'} >
                  <p className="text-primary no-underline text-center text-lg">create one?</p>
                </Link>
              </>
            ) : (
              <>
                {
                  // Generating dynamic code using tickets array
                  tickets.map((ticket) => (
                    <div key={ticket._id} className="card my-5">
                      {/* // Adding link to redirect to ticket details. */}
                      <Link href={`/components/server/${ticket._id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                      </Link>
                    </div>
                  ))
                }
              </>
            )
          }
        </>
      )
      }
    </>
  );
}

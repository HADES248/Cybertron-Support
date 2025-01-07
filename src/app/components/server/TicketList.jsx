//import { connectToDatabase, ticketModel } from '../../../db/db'
import Link from "next/link";
// Important points:- 1. All of this code is server side component meaning this page is fully loaded before reaching the browser

async function getTickets() {

  const res = await fetch("https://cybertron-support.vercel.app/components/server/find");

  const { tickets } = await res.json();

  return tickets;
}

export default async function TicketList() {
  // Creating an Instance of the function to get all the tickets.
  const tickets = await getTickets();
  return (
    <>
      {tickets.length === 0 ? (
        <p className="text-center">There are no Tickets!!</p>
      ) :
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
  );
}

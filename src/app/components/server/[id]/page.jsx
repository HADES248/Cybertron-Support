// In next js if you want to use route parameters(basically unique routes) we use dynamic segments, we create this segment by wrapping the folder name in square brackets eg:- [id] which tells the next js that this part of the route is dyanmic.

import { notFound } from "next/navigation";
import { connectToDatabase, ticketModel } from "../../../../db/db";
import DeleteTicket from './DeleteTicket';

async function getTicket(id) {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // To get back one document from the ticket collection.
  await connectToDatabase();
  
  return await ticketModel.findOne({ _id: id }) || notFound();
  // If the document does not exist we can send a 404 page using this notFound()
}

// we can get the route parameter using params property 
export default async function TicketDetails({ params }) {
  const route = await params;
  const ticket = await getTicket(route.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created By {ticket.user_email}</small>
        {/* // Passing the document id as props to client component */}
        <DeleteTicket id={route.id} />
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main >
  )
}

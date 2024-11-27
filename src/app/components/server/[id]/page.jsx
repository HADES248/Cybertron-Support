// In next js if you want to use route parameters(basically unique routes) we use dynamic segments, we create this segment by wrapping the folder name in square brackets eg:- [id] which tells the next js that this part of the route is dyanmic.

import { connectToDatabase, ticketModel } from "../TicketList";


async function getTicket(id) {
  await connectToDatabase();

  // To get back one document from the ticket collection.
  return await ticketModel.findOne({ id: id });
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
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main >
  )
}

// In next js if you want to use route parameters(basically unique routes) we use dynamic segments, we create this segment by wrapping the folder name in square brackets eg:- [id] which tells the next js that this part of the route is dyanmic.

import { notFound } from "next/navigation";
import { connectToDatabase, ticketModel } from "../TicketList";


// We can use static rendering this page (using cache of this page for a specified amount of time) to improve website speed & Inhanced SEO and Reduce server load.

// Now all next js does not have access to all the id to static render this page so we create a function which has access to all the id beforehand.

// this variable is used when we want to return a 404 page if a pre-rendered page does not exist(setting it to false) or next js tries to search for this page incase it exists in Db(running getTicket) and if not then returns 404 page(setting it to true).
export const dyanmicParams = true;

export async function generateStaticParams() {
  // Accessing the Db once
  await connectToDatabase();

  const tickets = await ticketModel.find();

  // mapping thorugh all the documents and storing an array of field "id".
  const id = tickets.map((ticket) => ({
    id: ticket.id
  }))

  // returning the array with revalidation of 60 second(meaning if this api is called again before 60s cache file will be used otherwise api call is made again.)
  return [{
    props: { id },
    revalidate: 60
  }
  ]
}
// Now in the build of this app all the routes to the specific ticket will be pre-rendered improving speed of the website.

async function getTicket(id) {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // To get back one document from the ticket collection.
  return await ticketModel.findOne({ id: id }) || notFound();
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
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main >
  )
}

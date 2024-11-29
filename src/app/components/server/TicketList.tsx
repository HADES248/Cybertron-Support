import mongoose from "mongoose";
import Link from "next/link";
// Important points:- 1. All of this code is server side component meaning this page is fully loaded before reaching the browser

// Using MongoDb to generate fetch json content

const mongoURI = 'mongodb://localhost:27017/Helpdesk';

// Define a schema and model for the 'tickets' collection, otherwise we won't be able to use ticket.id, ticket.title etc.
const Schema = mongoose.Schema;

// Designing Schema based on json file
const ticketSchema = new Schema({
  id: String,
  title: String,
  body: String,
  priority: String,
  user_email: String,
});

// Creating ticketModel to interact with the documents in the collection.
export const ticketModel = mongoose.models.ticket || mongoose.model('ticket', ticketSchema);

// Connecting to Db
export async function connectToDatabase() {
  await mongoose.connect(mongoURI).then(() => {
    console.log('Connected to Db');
  }).catch(err => err);
}

async function getTickets() {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  await connectToDatabase();
  // To get all the tickets back
  return await ticketModel.find();
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
          <div key={ticket.id} className="card my-5">
            {/* // Adding link to redirect to ticket details. */}
            <Link href={`/components/server/${ticket.id}`}>
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

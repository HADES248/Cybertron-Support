import mongoose from "mongoose";

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
const ticketModel = mongoose.models.ticket || mongoose.model('ticket', ticketSchema);

// Connect to DB only once
async function connectToDatabase() {
  await mongoose.connect(mongoURI).then(() => {
    console.log('Connected to Db');
  }).catch(err => err);
}

async function getTickets() {
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
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </div>
        ))
      }
    </>
  );
}

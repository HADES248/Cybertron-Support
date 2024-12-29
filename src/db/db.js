import mongoose from "mongoose";

// Using MongoDb to generate fetch json content

const mongoURI = 'mongodb+srv://Shiva:ShivanshSingh@mongodb.3e7nf.mongodb.net/Helpdesk?retryWrites=true&w=majority&appName=MongoDb';

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
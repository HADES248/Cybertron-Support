import { connectToDatabase, ticketModel } from "@/db/db";

export async function POST(req) {

  // Creating a new API to receive POST requests from client component and adding them to the collection.

  const request = await req.json();

  await connectToDatabase();
  await ticketModel.create(request).then(() => {
    console.log('Ticket Added to Db');
  })

  return Response.json({ message: 'Ticket Added successfully' });
}

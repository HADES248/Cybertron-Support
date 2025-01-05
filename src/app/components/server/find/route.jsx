import { connectToDatabase, ticketModel } from "@/db/db";

export async function GET() {

  // Creating a new API to GET requests from client component and Get all the tickets.

  await connectToDatabase();
  const tickets = await ticketModel.find();
  

  return Response.json({ tickets });
}

import { connectToDatabase, ticketModel } from '@/db/db';

export async function POST(req) {

  // Creating a new API to receive POST requests from client component and fetching the user from the db.

  const request = await req.json();

  await connectToDatabase();

  const { email } = request;

  const tickets = await ticketModel.find({ user_email: email });

  if (!tickets) {
    return Response.json({ message: 'Tickets do not exist.' }, { status: 400 });
  }

  return Response.json({ tickets }, { status: 200 });


}


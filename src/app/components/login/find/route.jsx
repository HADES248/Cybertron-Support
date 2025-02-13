import { connectToDatabase, userModel } from '@/db/db';

export async function POST(req) {

  // Creating a new API to receive POST requests from client component and fetching the user from the db.

  const request = await req.json();

  await connectToDatabase();

  const { email, password } = request;

  const user = await userModel.findOne({ email });

  if (!user) {
    return Response.json({ message: 'User does not exist.' }, { status: 400 });
  }
  const validPassword = password === user.password ? true : false;

  if (!validPassword) {
    return Response.json({ message: 'The Password is incorrect.' }, { status: 400 });
  }

  return Response.json({ user }, { status: 200 });
}


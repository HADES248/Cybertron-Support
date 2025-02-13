import { connectToDatabase, userModel } from '@/db/db';


export async function POST(req) {

  // Creating a new API to receive POST requests from client component and adding them to the collection.

  const request = await req.json();

  await connectToDatabase();

  const { email } = request;

  const user = await userModel.findOne({ email });

  if (user) {
    return Response.json({ message: 'User Already Exists' }, { status: 400 });
  }
  await userModel.create(request).then(() => {
    console.log('User Added to Db');
  })

  return Response.json({ message: 'User Added successfully' }, { status: 200 });
}

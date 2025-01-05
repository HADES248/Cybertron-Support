import { connectToDatabase, ticketModel } from "@/db/db";

export async function DELETE(req) {

  //Destructuring the request to get the id from the req.json();
  const { id } = await req.json();

  await connectToDatabase();
  await ticketModel.findByIdAndDelete(id);

  return Response.json({ message: 'Delete Request Made' });
}

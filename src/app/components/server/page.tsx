import TicketList from "./TicketList";

// Creating first Component in next js this is the basic syntax.
export default async function Tickets() {
  // Server component by default runs on the server.
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open Tickets.</small></p>
        </div>
      </nav>

      <TicketList />
    </main>
  )
}

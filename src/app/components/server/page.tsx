import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from './loading';

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

    {/* Creating a suspense component(meaning that only this component will show loading as fallback while the rest of the page is loaded ). */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>

    </main>
  )
}

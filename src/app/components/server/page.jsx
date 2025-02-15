import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from './loading';

// Creating first Component in next js this is the basic syntax.
export default async function Tickets() {
  // Server component by default runs on the server.
  return (
    <main>
      <div className="card">
        <h3>What are Tickets?</h3>
        <p>Tickets are digital records used to track and manage user inquiries, issues, or requests. When a user submits a query or problem, a ticket is generated with a unique ID and relevant information such as the user&apos;s details, the nature of the issue, and it&apos;s priority. Helpdesk agents can then prioritize, assign, and resolve these tickets, ensuring efficient support and communication. Tickets help maintain a clear record of interactions and streamline the troubleshooting process for both users and support staff.</p>
      </div>
      <nav>
        <div>
          <h2>Currently Open Tickets...
          </h2>
        </div>
      </nav>

      {/* Creating a suspense component(meaning that only this component will show loading as fallback while the rest of the page is loaded ). */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

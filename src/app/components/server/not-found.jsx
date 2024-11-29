import Link from "next/link"

// This is a scoped not-found file for tickets.
export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We hit a Brick Wall.</h2>
      <p>We could not found the ticket you were looking for.</p>
      <p>Go back to <Link href="/components/server">Tickets</Link></p>
    </main>
  )
}

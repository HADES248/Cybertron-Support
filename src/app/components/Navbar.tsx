import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      {/* Using Link Component of next (as next pre-fetches the page in the background when it sees the link component) */}
      <Link href={'/'}>Dashboard</Link>
      <Link href={'/components/server'}>Tickets</Link>
    </nav>
  )
}

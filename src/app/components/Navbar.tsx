import Image from "next/image";
import Link from "next/link";
import Logo from "./next-app-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Helpdesk" width={80} quality={100} placeholder="blur" />
      <h1>Dojo Helpdesk</h1>
      {/* Using Link Component of next (as next pre-fetches the page in the background when it sees the link component) */}
      <Link href={'/'}>Dashboard</Link>
      <Link href={'/components/server'}>Tickets</Link>
      <Link href={'/components/client'}>Count button</Link>
    </nav>
  )
}

import Link from "next/link"

// This is a 404 page, in next js it should be named "not-found" & created in app folder for all the 404 routes.
// This can also be scoped by creating specific not-found files in specific folders.
export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>We could not found the page you were looking for.</p>
      <p>Go back to <Link href="/">Dashboard</Link></p>
    </main>
  )
}

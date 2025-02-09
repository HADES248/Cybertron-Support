import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>The Cybertron Support is a helpdesk website designed to provide a comprehensive overview of support operations, ensuring efficient issue resolution and enhancing user satisfaction. Cybertron Support dashboard empowers support managers and supervisors to make data-driven decisions, improve team performance, and ultimately, enhance the overall user experience.</p>

      <div className="flex justify-center my-8">
        <Link href={'/components/server'}>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Cybertron Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>We're excited to welcome a new addition to our development team! Please join us in welcoming Bumblebee to Cybertron. With extensive experience in User-testing, Bumblebee brings a wealth of knowledge and fresh perspectives to our projects.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Exciting news! We're thrilled to announce the launch of the Cybertron Helpdesk, your one-stop solution for all support needs. Designed with cutting-edge technology and user-friendly features, the Cybertron Helpdesk is here to revolutionize the way you access assistance.</p>
      </div>
    </main>
  );
}

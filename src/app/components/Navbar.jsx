'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from "./next-app-logo.png";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Navbar() {

  const { user } = useContext(UserContext);

  const viewLinks = () => {
    const links = document.querySelector('#navlinks');
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('nav');
    if (links.classList.contains('hidden')) {
      links.classList.remove('hidden');
      nav.classList.add('pb-32');
      burger.classList.add('rotate-180');
    } else {
      links.classList.add('hidden');
      nav.classList.remove('pb-32');
      burger.classList.remove('rotate-180');
    }
  }

  return (
    <nav className="relative md:pb-4">
      <Image src={Logo} alt="Helpdesk" width={80} quality={100} placeholder="blur" />
      <div className="absolute right-0 top-16 text-right hidden md:inline-block md:left-16 md:top-8 md:right-auto" id="navlinks">
        <h1 className="block md:inline-block pl-6">Cybertron Support</h1>
        {/* Using Link Component of next (as next pre-fetches the page in the background when it sees the link component) */}
        <Link className="block md:inline-block pl-6" href={'/'}>Dashboard</Link>
        <Link className="block md:inline-block pl-6" href={'/components/server'}>Tickets</Link>
        <Link className="block md:inline-block pl-6" href={'/components/client'}>Create</Link>
      </div>
      {
        user ? (
          <h2 className="absolute ml-24 top-8 md:right-0">Welcome! {user.username.split(" ")[0]}</h2>
        ) : (
          <Link className="absolute ml-24 md:right-0" href={'/components/signUp'}>
            <button className="btn-primary">SignUp</button>
          </Link>
        )
      }
      <div className="absolute block md:hidden right-0 cursor-pointer" onClick={viewLinks}>
        <svg className="size-6 transition ease-in-out duration-300" id="burger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
  )
}
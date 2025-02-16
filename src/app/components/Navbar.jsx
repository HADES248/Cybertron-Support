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
      nav.classList.add('pb-28');
      burger.classList.add('rotate-180');
    } else {
      links.classList.add('hidden');
      nav.classList.remove('pb-28');
      burger.classList.remove('rotate-180');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    // To reload the page after loging out.
    window.location.href = '/';
  }

  return (
    <nav className="relative align-center lg:pb-4">
      <Image src={Logo} alt="Helpdesk" width={80} quality={100} placeholder="blur" />
      <div className="absolute right-0 top-20 text-right hidden lg:inline-block lg:left-16 lg:top-8 lg:right-auto" id="navlinks">
        <h1 className="block lg:inline-block pl-6">Cybertron Support</h1>
        {/* Using Link Component of next (as next pre-fetches the page in the background when it sees the link component) */}
        <Link className="block lg:inline-block pl-6" href={'/'}>Dashboard</Link>
        <Link className="block lg:inline-block pl-6" href={'/components/server'}>Tickets</Link>
        <Link className="block lg:inline-block pl-6" href={'/components/client'}>Create</Link>
      </div>
      {
        user ? (
          <>
            <h2 className="absolute ml-36 top-8 lg:right-20">Welcome! <span className="block xsm:inline-block text-white">{user.username.split(" ")[0]}</span></h2>
            <p className="absolute ml-20 top-9 lg:right-2 hover:cursor-pointer" onClick={handleLogout}>Log Out</p>
          </>
        ) : (
          <>
            <Link className="absolute ml-20 top-8 text-sm lg:right-2" href={'/components/signUp'}>
              <h2>Sign Up</h2>
            </Link>
            <Link className="absolute ml-40 top-8 lg:right-24" href={'/components/login'}>
              <h2>Log In</h2>
            </Link>
          </>
        )
      }
      <div className="absolute top-9 block lg:hidden right-0 cursor-pointer" onClick={viewLinks}>
        <svg className="size-6 transition ease-in-out duration-300" id="burger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
  )
}
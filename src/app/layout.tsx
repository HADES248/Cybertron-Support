'use client';

// Implementing Context API to pass the data from one component to another without passing it through the props.
import { createContext, useState, useContext } from "react";

// Next js gives us a very easy way to import any google font. Syntax is below & font name can be any.
import { Rubik } from "next/font/google";
// We can also use local font.

//import localFont from "next/font/local";

import "./globals.css";

//Components
import Navbar from "./components/Navbar";

// layout file can be used to put the sections of the website which are on every page(like navbar and footer).

// Creating instance of the font and adding other properties to it (Example)
/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
*/

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

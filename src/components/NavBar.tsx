'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
       
      };
      setCurrentDateTime(now.toLocaleDateString('en-US', options) +

        "" +

        now.toLocaleTimeString('en-US', { hour12: false })
      );

    };
    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid)
  }, []);



  return (
    <header className="text-gray-500 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-slate justify-center">
          <Link
           href={"http://localhost:3000/"} 
           className="mr-5 hover:text-cyan-700 transition-colors duration-300 transform hover:scale-105">
          {""} 
          Home {""} 
         </Link>

         <Link
           href={"http://localhost:3000/"} 
           className="mr-5 hover:text-cyan-700 transition-colors duration-300 transform hover:scale-105">
          {""} 
          About {""} 
         </Link>

         <Link
           href={"http://localhost:3000/"} 
           className="mr-5 hover:text-cyan-700 transition-colors duration-300 transform hover:scale-105">
          {""} 
          Blog {""} 
         </Link>

         <Link
           href={"http://localhost:3000/"} 
           className="mr-5 hover:text-cyan-700 transition-colors duration-300 transform hover:scale-105">
          {""} 
          Contact {""} 
         </Link>
        </nav>

        <button
        className="Inline-flex item-center bg-cyan-700 border-0 py-1 px-3 focus:outline-none hover-bg-cyan-700 rounded text-white mt-1 md:mt-0 transition-colors duration-300 transform hover:scale-105">
          <Link href={"https://github.com/iamlaibakhan"} 
           >
          GitHub
          </Link>
          <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-1 ml-1"
          viewBox="0 0 24 24">

          </svg>
        </button>
      </div>
    </header>

  );
};
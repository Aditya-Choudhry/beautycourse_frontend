
"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="Beauty Training Courses Logo" width={50} height={50} />
        </Link>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
        <Link href="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link href="/signIn" className="text-gray-700 hover:text-gray-900 px-4 py-2">
          Sign In
        </Link>
        <Link href="/SignUp" className="bg-[#658396] text-white px-4 py-2 rounded-full hover:bg-[#4a697c]">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

"use client"

import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa';
import Link from "next/link";

export default function Verify1() {
  return (
    <div className="relative flex h-[50vh] w-full bg-gradient-to-b from-blue-300 to-white items-center justify-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center p-12 w-full md:w-1/2">
        <Image
          src="/SignIn.png"
          alt="Illustration"
          width={300}
          height={300}
          className="mt-8"
        />
      </div>

      {/* Right Section (Overlay Form) */}
      <div className="absolute top-1/2 transform translate-y-1/3 w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium">Verify Your Email</h2>
          </div>

          {/* Centered Email Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/Email.png"
              alt="Illustration"
              width={90}
              height={90}
            />
          </div>

          <button  onClick={() => window.location.href = '/Verify2'}
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200"
          >
            Send Verification Code
          </button>

          {/* No Account */}
          <div className="mt-8 text-center">
            <span className="text-sm text-black">For Verification we’ll send 6 Digit Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}

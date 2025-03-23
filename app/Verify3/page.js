"use client"

import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa';
import Link from "next/link";

export default function Verify3() {
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
      <div className="absolute top-1/2 transform translate-y-1/4 w-full md:w-1/2 flex justify-center">
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
  {/* OTP Input Boxes */}
  <div className="flex justify-center space-x-2 mb-6">
          {Array(6).fill("").map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-lg text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>
          <button  onClick={() => window.location.href = '/Verify4'}
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200"
          >
           Verify
          </button>

          {/* No Account */}
          <div className="mt-8 text-center">
            <span className="text-sm text-black">Don't worry, it's only one time. Once your email is
            verified you do not need to do this anymore :)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

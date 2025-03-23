'use client';

import Image from 'next/image';

export default function Verify2() {
  return (
<>

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center mb-6 flex flex-col items-center">
        <Image src="/logo.png" alt="Beauty Training Courses Logo" width={60} height={60} />
        <h1 className="text-4xl font-gullia  mt-2">Hi Moni Roy, <br/>
        Your Beauty Training account has <br/> been approved!S</h1>
      </div>

      <div className="bg-gradient-to-b from-[#9CC7DF] to-[#9BDBFF] p-10 rounded-lg shadow-md w-full max-w-lg text-center">
 
        <div className="flex justify-center mb-4">
          <Image
            src="/activeGurl.png"
            alt="Profile Placeholder"
            width={90}
            height={90}
            className="rounded-full border-4 border-white"
          />
        </div>

        <div className="mt-5 p-2  rounded-full text-lg font-semibold text-blue-800 inline-block shadow relative">
          <div className="absolute -inset-1 border-2 border-dotted border-blue-500 rounded-full"></div>
          <span className="relative pl-4 pr-4">435264</span>
        </div>

        <p className="mt-4 text-gray-900 font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

                <p className="mt-4 text-gray-900 font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <button  onClick={() => window.location.href = '/UserProfile'} className="mt-4 bg-[#658396] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#546d7a] transition">
          Get Started
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <a href="#"><Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} /></a>
        <a href="#"><Image src="/twitter.png" alt="Twitter" width={40} height={40} /></a>
        <a href="#"><Image src="/fb.png" alt="Facebook" width={40} height={40} /></a>
        <a href="#"><Image src="/ig.png" alt="Instagram" width={40} height={40} /></a>
      </div>

      <p className="mt-4 text-gray-500">Copyright © 2025</p>
    </div>
    </>
  );
}

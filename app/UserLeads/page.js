import Link from "next/link";


import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function UserLeads() {
    const leads = [
        { id: "001", name: "Student Name", course: "Lip Blush Training Course" },
        { id: "002", name: "Student Name", course: "Eyebrow Waxing Training Course" },
        { id: "003", name: "Student Name", course: "Anti Wrinkle Injections Training Course" },
        { id: "004", name: "Student Name", course: "Eyebrow Lamination Training Course" },
        { id: "005", name: "Student Name", course: "Facial Training Course" },
        { id: "006", name: "Student Name", course: "Spray Tan Training Course" },
        { id: "007", name: "Student Name", course: "Russian Eyelash Extension Training Course" },
        { id: "008", name: "Student Name", course: "Nail Training Course" },
      ];
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Fixed */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-md z-10">
        <div className="p-6">
          <div className="border-2 border-black inline-block p-2">
            <h1 className="font-bold text-lg">BEAUTY</h1>
            <h1 className="font-bold text-lg">TRAINING</h1>
            <h1 className="font-bold text-lg">COURSES.</h1>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="px-6 text-gray-500 font-medium mb-4">OVERVIEW</h2>
          <nav>
            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Dashboard
            </a>
            <a href="/UserProfile" className="flex items-center  px-6 py-3 hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Profile
            </a>
            <a href="/UserSubs" className="flex items-center px-6 py-3  hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              Subscription
            </a>
            <a href="/UserLeads" className="flex items-center px-6 py-3 text-[#658396] hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Lead
            </a>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <h2 className="px-6 text-gray-500 font-medium mb-4">SETTINGS</h2>
          <a href="#" className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Logout
          </a>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 ml-64 mr-64">
        <div className="max-w-4xl mx-auto p-6 shadow-sm bg-white">
          <div className="mb-6 w-full p-5 " style={{
                backgroundImage: " url('container.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"

            }}>
            <div className="text-sm text-gray-400">COURSES LEADS</div>
            <div className=" p-6 rounded-lg">
              <h2 className="text-3xl font-medium text-gray-800">Admin Panel</h2>
              <h1 className="text-5xl font-medium text-gray-800">Beauty Training Course</h1>
            </div>
          </div>
          <div className="p-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-300 text-left">
              <th className="p-4 text-lg font-semibold">ID</th>
              <th className="p-4 text-lg font-semibold">Student Name</th>
              <th className="p-4 text-lg font-semibold">Course Type</th>
              <th className="p-4 text-lg font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="p-4">{lead.id}</td>
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.course}</td>
                <td className="p-4">
                  <Link href={`/UserView`} className="text-blue-500 hover:underline">
                    View Lead
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        </div>
      </div>

      {/* Right Sidebar - Fixed */}
      <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-md z-10">
        <div className="p-6 flex justify-between items-center">
          <span className="font-medium">Your Profile</span>
          <button className="text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mt-8">
  {/* Profile Section */}
  <div className="relative">
    <div className="rounded-full overflow-hidden">
      <Image 
        src="/profile.png" 
        alt="Profile" 
        width={200} 
        height={200}
        className="object-cover"
      />
    </div>
  </div>
    {/* Language Selector */}
    <div className="relative mt-6">
    <button className="flex items-center space-x-2  px-4 py-2 rounded-lg">
      <Image src="/usa.png" alt="USA Flag" width={24} height={16} className="rounded" />
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </div>

  {/* Name */}
  <div className="mt-4 text-center">
    <p className="font-medium">Moni Roy</p>
  </div>

  {/* Icons */}
  <div className="flex space-x-4 mt-6">
    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
      </svg>
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    </button>
  </div>


</div>

      </div>
    </div>
  );
}
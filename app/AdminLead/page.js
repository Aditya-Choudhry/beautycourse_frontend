import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AdminDash() {
    const students = Array(10).fill({
        id: "00212",
        name: "Darren Sammy",
        email: "darrensammy@gmail.com",
        status: "Active",
      });
  return (
    <div className="flex h-screen ">
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
            <a href="/AdminDash" className="flex items-center px-6 py-3  hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Dashboard
            </a>


            <a href="/AdminLead" className="flex items-center px-6 py-3 text-[#658396] hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Lead
            </a>
            <a href="/AdminProvider" className="flex items-center  px-6 py-3 hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Provider
            </a>
             <a href="/AdminSubs" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              Subscription
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
<div className="flex flex-col flex-1 ml-64 min-h-screen p-6 ">
<div className='flex'>
      {/* Banner Section */}
  <div
    className="mb-6 w-[200%] p-5 bg-contain bg-no-repeat"
    style={{ backgroundImage: "url('container.png')" }}
  >
    <div className="text-sm text-gray-400">COURSES LEADS</div>
    <div className="p-6 rounded-lg">
      <h2 className="text-3xl font-medium text-gray-800">Admin Panel</h2>
      <h1 className="text-5xl font-medium text-gray-800">Beauty Training Course</h1>
    </div>
  </div>

    {/* Buttons Section */}
    <div className="mt-4 flex justify-end space-x-4 w-fit h-10">
    <button className="bg-[#658396] text-white px-4 py-2 rounded-lg">Cancel</button>
    <button className="bg-[#658396] text-white px-4 py-2 rounded-lg">Save</button>
  </div>
</div>


  {/* Table Section */}
  <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden w-full">
  <table className="w-full text-left spacing-y-3">
  <thead>
        <tr className=" text-black">
          <th className="p-3">ID</th>
          <th className="p-3">Student Name</th>
          <th className="p-3">Contact Info</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody className='spacing-y-3'>
        {students.map((student, index) => (
          <tr  key={index} className="spacing-y-3 bg-[#9BD3F3] text-[#5A5A5A]">
            <td className="p-3">{student.id}</td>
            <td className="p-3">{student.name}</td>
            <td className="p-3">{student.email}</td>
            <td className="p-3 flex items-center">
              <span
                className={`h-3 w-3 rounded-full mr-2 ${
                  student.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                }`}
              ></span>
              {student.status}
            </td>
            <td className="p-3">
              <button className="text-black items-center hover:text-gray-600">
                <Image src="/edit.png" alt="Illustration" width={24} height={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


</div>


    </div>
  );
}
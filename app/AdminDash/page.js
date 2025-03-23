import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AdminDash() {
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
            <a href="/AdminDash" className="flex items-center px-6 py-3 text-[#658396] hover:bg-gray-100">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Dashboard
            </a>


            <a href="/AdminLead" className="flex items-center px-6 py-3 hover:bg-gray-100">
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
      <div className="flex-1 ml-96 mr-64">
        <div className="max-w-6xl mx-auto p-6 shadow-sm bg-white">
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

          <div className="min-h-screen bg-white p-6 flex flex-col ">
      {/* Backup Button */}
      <button className="bg-gray-300 text-start w-fit text-gray-700 px-4 py-2 rounded-md mb-4 shadow-sm">BACKUP & RESTORE</button>
      
      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-6 items-center">
        {['Total Leads', 'Total Providers', 'Active Subscriptions', 'Pending Leads'].map((item, index) => (
          <button key={index} className="bg-[#9CC7DF] text-[#191D2D] px-10 py-5 rounded-md shadow-md">{item}</button>
        ))}
      </div>
      
<div className='flex gap-10'>
          {/* Main Content */}
          <div className="grid grid-cols-2 gap-6 items-center">
        {[
          { title: 'Total Leads', count: 156 },
          { title: 'Closed Providers', count: 99 },
          { title: 'Active Subscription', count: 57 },
          { title: 'Pending Leads', count: 57 },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-3xl font-bold">{item.count}</p>
            <div className="mt-2 w-full h-2 bg-gray-300 rounded-md">
              <div className="h-full bg-blue-700 rounded-md" style={{ width: `${(item.count / 156) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sales and Orders */}
      <div className="mt-6 border-l pl-6 text-gray-700">
        <p className="text-sm">Sales <span className="text-gray-400">July 2025 ▼</span></p>
        <p className="text-2xl font-bold">£9,257.51</p>
        <p className="mt-4 text-sm">Orders <span className="text-gray-400">July 2025 ▼</span></p>
        <p className="text-2xl font-bold">241</p>
      </div>
</div>
    </div>
        </div>
      </div>


    </div>
  );
}
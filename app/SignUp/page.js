"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await register(formData);
    if (result.success) {
      router.push('/Verify1');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="student">Student</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#658396] hover:bg-[#4a697c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <p>Already have an account? <Link href="/signIn" className="text-[#658396] hover:text-[#4a697c]">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa';
import Link from "next/link";

export default function SignUp() {
  return (
    <div style={{
      backgroundImage: " url('signInBG.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"

    }} className="relative flex h-[50vh] w-full ">
            {/* Left Section */}
      <div className="flex flex-col justify-center p-12 w-full md:w-1/2">
        <div className=" flex ">
<div>

<Image
            src="/logo.png"
            alt="Beauty Training Courses Logo"
            width={100}
            height={50}
          />
          <h1 className="text-5xl font-semibold mt-6">Sign Up to</h1>
          <p className="text-lg text-gray-700">Beauty Training Courses UK</p>
          <p className="text-gray-500 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
</div>
          <Image  onClick={() => window.location.href = '/'}
            src="/SignIn.png"
            alt="Illustration"
            width={300}
            height={300}
            className="mt-8"
          />
        </div>
      </div>

      {/* Right Section (Overlay Form) */}
      <div className="absolute top-96 right-0 transform -translate-y-1/2 w-full md:w-1/2  rounded-lg">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-2">Welcome to <span className="text-gray-400">LOREM</span></h2>
              <h1 className="text-4xl font-bold">Sign In</h1>
            </div>
            
            {/* Social Login Buttons */}
            <div className="flex space-x-2 mb-6">
              <button className="flex-1 border rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-gray-50">
                <FcGoogle size={20} />
                <span className="text-sm">Sign in with Google</span>
              </button>
              <button className="w-12 h-12 border rounded-lg flex items-center justify-center hover:bg-gray-50">
                <FaFacebookF size={20} className="text-blue-600" />
              </button>
              <button className="w-12 h-12 border rounded-lg flex items-center justify-center hover:bg-gray-50">
                <Image src="/apple.png" width={24} height={24} alt="Alternative login" />
              </button>
            </div>
            
               {/* Sign Up Form */}
               <form>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Enter your username or email address</label>
                  <input 
                    type="text" 
                    placeholder="Username or email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">User name</label>
                    <input 
                      type="text" 
                      placeholder="User name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="Contact Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Enter your Password</label>
                  <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button 
  type="button" 
  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-200"
  onClick={() => window.location.href = '/Verify1'}
>
  Sign up
</button>

              </form>
            
            {/* No Account */}
            <div className="mt-8 text-right">
              <span className="text-sm text-gray-500">Already Have an account? </span>
              <Link href="/signIn" className="text-sm text-blue-500 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


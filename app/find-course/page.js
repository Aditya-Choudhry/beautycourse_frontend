"use client"

import React , {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
      const [expandedFaq, setExpandedFaq] = useState('is-it-free');
    
    const faqs = [
        {
          id: 'is-it-free',
          question: 'Is it free for students?',
          answer: '(Yes! No hidden fees.)'
        },
        {
          id: 'how-platform-works',
          question: 'How does the platform work?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'available-courses',
          question: 'What courses are available?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        }
      ];
    return (
        <>

            <section className="hero relative py-16 md:py-32 flex items-center justify-center text-center" style={{
                backgroundImage: " url('findBg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
                <div className="container mx-auto px-4 text-black z-10">
                    <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
                    Grow Your <br/> Beauty Training Business <br/> with High-Quality Leads!
                    </h1>
    
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                    Get direct access to students looking for beauty training courses. Sign up today and start receiving daily leads.                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/find-course" className="whitespace-nowrap bg-[#658396] text-white py-3 px-8 rounded-full text-center inline-flex items-center gap-x-2">
                        Start Your Free Trial             <Image src="/send.png" alt="Chat Bot" width={12} height={12} className="object-cover " />

                        </Link>

                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-5xl font-gullia text-center mb-2">Lead Submission Form</h1>
      <p className="text-center text-lg text-gray-600 mb-6">A simple, mobile-friendly form that captures all necessary details.</p>
      
      {/* Form Card */}
      <div style={{
                backgroundImage: " url('LeadBg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }} className="rounded-lg p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Fill This Form</h2>
        
        <form>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Phone Number (Required)</label>
              <input 
                type="tel" 
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Email Address (Required)</label>
              <input 
                type="email" 
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">City or Postcode (Required - helps providers filter leads by location)</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Training Course (Required)</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Preferred Training Date (Optional)</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea 
                placeholder="Helps the provider know exactly which course you are looking to enroll in."
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                rows={2}
              />
            </div>
            
            <div className="mt-6 flex justify-center">
              <button 
                type="submit" 
                className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 flex items-center space-x-2 hover:bg-blue-100 transition-colors"
              >
                Request Free Quotes
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        
        <p className="text-xs text-blue-500 text-center mt-4">
          *THANK YOU! YOUR REQUEST HAS BEEN SENT TO TRAINING PROVIDERS. THEY WILL CONTACT YOU SHORTLY.*
        </p>
      </div>
      
      {/* Benefits Section */}
      <div className="mb-8">
        <h2 className="text-5xl font-gullia font-light text-center mb-2">Why Use Our Platform?</h2>
        <p className="text-center text-gray-600 mb-6">
          This section reassures users of the benefits of submitting their request.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-[#658396] w-8 h-8 mx-auto rounded mb-4 flex items-center justify-center">
                        <Image src="/search.png" alt="Chat Bot" width={12} height={12} className="object-cover " />


            </div>
            <h3 className="font-medium mb-1">Compare Multiple Providers</h3>
            <p className="text-sm text-gray-600">Get responses from several training providers</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-[#96B4C5] w-8 h-8 mx-auto rounded mb-4 flex items-center justify-center">
            <Image src="/hand.png" alt="Chat Bot" width={12} height={12} className="object-cover " />

            </div>
            <h3 className="font-medium mb-1">Save Time & Money</h3>
            <p className="text-sm text-gray-600">Let providers come to you with their best offers</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-[#658396] w-8 h-8 mx-auto rounded mb-4 flex items-center justify-center">
            <Image src="/build.png" alt="Chat Bot" width={12} height={12} className="object-cover " />

            </div>
            <h3 className="font-medium mb-1">No Hidden Fees</h3>
            <p className="text-sm text-gray-600">100% free for students</p>
          </div>
        </div>
      </div>
      
      {/* Find Course Button */}
      <div className="text-center">
        <button className="px-4 py-2 658396 rounded-full text-white  text-sm  bg-[#658396] transition-colors flex items-center mx-auto">
          FIND MY COURSE NOW
          <Image src="/send.png" alt="Chat Bot" width={12} height={12} className="object-cover " />

        </button>
      </div>
    </div>


  {/* FAQ Section */}
  <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-col  gap-8 mb-24">
          <h1 className="text-5xl font-gullia text-center text-gray-900 mb-20">Frequenty Asked Questions</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* FAQ List */}
            <div className="w-full rounded-lg md:w-1/2">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`border-b border-gray-200 rounded-lg ${
                    expandedFaq === faq.id ? 'bg-[#658396] text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left py-4 px-6"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8">
                <button className="bg-[#658396] text-white px-8 py-3 rounded-full uppercase text-sm font-medium">
                  READ FULL FAQ
                </button>
              </div>
            </div>
            
            {/* Ask a different question */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-normal text-gray-700 mb-6">Ask a different question</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>

               {/* Newsletter Section */}
                <section className="relative h-10 bg-[#658396] py-20 mb-32">
              {/* White box container */}
              <div className="max-w-3xl translate-y-5 mx-auto bg-white rounded-3xl shadow-lg px-10 py-12 flex items-center gap-6">
          {/* Title */}
          <h2 className="text-3xl min-w-[250px] font-gullia text-gray-900 text-left">
            Subscribe Newsletters
          </h2>
        
                {/* Input and Button */}
                <div className="flex w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow bg-white border border-gray-300 rounded-l-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button className="bg-white border border-gray-300 text-gray-700 rounded-r-full px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition">
                    Submit
                    <Image src="/send1.png" alt="Send" width={18} height={18} />
                  </button>
                </div>
              </div>
        
        
            </section>

              <div className="fixed bottom-8 right-8 z-50">
                    <div className="rounded-full p-2">
                      <div className="border-2 border-black relative w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                        <Image src="/chatbot.png" alt="Chat Bot" width={64} height={64} className="object-cover" />
                      </div>
                      <p className="text-center text-black text-xs mt-1">Chat Bot</p>
                    </div>
                  </div>
        </>
    );
}

export default Page;

"use client"

import React , {useState} from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaClock } from 'react-icons/fa';

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
                backgroundImage: " url('contactBg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
                <div className="container mx-auto px-4 text-black z-10">
                    <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
                    "Have Questions? <br/> Get in Touch
                    </h1>
                   
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                    Whether you're a student looking for the perfect training course or a provider wanting to join our network, we're here to help!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link 
  href="/find-course" 
  className="whitespace-nowrap bg-[#658396] text-white py-3 px-8 rounded-full text-center inline-flex items-center gap-x-2"
>
  FIND A BEAUTY COURSE  
  <Image
    src="/Send.png"
    alt="Beauty Training"
    width={12}
    height={12}
    className="rounded-lg"
  />
</Link>
                        <Link href="/join-provider" className="whitespace-nowrap bg-[#658396] text-white py-3 px-8 rounded-full text-center inline-flex items-center gap-x-2">
              JOIN AS A TRAINING PROVIDER   <Image
    src="/Send.png"
    alt="Beauty Training"
    width={12}
    height={12}
    className="rounded-lg"
  />
            </Link>
                    </div>
                </div>
            </section>


            <div className=" p-6  rounded-lg">
      <div className="text-center mb-4">
        <p className="text-gray-700 text-sm">
          Complete this quick form to connect with top-rated beauty training providers near you.
          Compare offers and choose the best fit for your needs!
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row  rounded-lg overflow-hidden">
        {/* Left Section - Contact Form */}
        <div     style={{ backgroundImage: "url('flower2.png')" ,                 backgroundSize: "cover",
                backgroundRepeat: "no-repeat" }} className="w-full md:w-1/2  p-8">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">Contact us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Are you Student
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Are you Training Provider
              </label>
            </div>
            <button type="submit" className="bg-[#658396] text-white px-6 py-3 rounded-full w-fit text-lg">
              Send Message
            </button>
            <p className="text-xs text-blue-500 mt-4">*Thank you for your inquiry! We will get back to you within 24 hours.</p>
          </form>
        </div>
        
        {/* Right Section - Contact Information */}
        <div style={{
                backgroundImage: " url('Flowers.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}  className="w-full md:w-1/2 bg-[#658396] text-white p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif mb-2">General Inquiries Email</h3>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span>your-email@yourdomain.com</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Support Email</h3>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span>support@yourdomain.com</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Phone Number</h3>
              <div className="flex items-center gap-2">
                <FaPhone className="text-white" />
                <span>+44 [Your Phone Number]</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-white p-2 rounded-full text-gray-800 hover:text-gray-600">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-800 hover:text-gray-600">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-gray-800 hover:text-gray-600">
                <FaLinkedinIn size={16} />
              </a>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Business Hours</h3>
              <div className="flex items-center gap-2">
                <FaClock className="text-white" />
                <span>Monday - Friday: 9 AM - 6 PM (UK Time)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-4">
        We value your privacy. Your details are only shared with verified training providers and will never be sold or misused.
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
                <button onClick={() => window.location.href = '/faqs'} className="bg-[#658396] text-white px-8 py-3 gap-2 inline-flex rounded-full uppercase text-sm font-medium">
                  READ FULL FAQ               <Image src="/Send.png" alt="Chat Bot" width={30} height={30} className="pl-3 object-cover" />

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
            <div className="flex w-full  max-w-md">
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

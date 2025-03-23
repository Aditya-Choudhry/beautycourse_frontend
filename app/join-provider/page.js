"use client"
// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React , {useState} from 'react';


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

    
      const testimonials = [
        {
          id: 1,
          name: "Jenny Wilson",
          image: "/students.png",
          quote: "I found the perfect microblading course within minutes.",
          type: "STUDENTS REVIEW",
          rating: 5,
        },
        {
          id: 2,
          name: "Kristin Watson",
          image: "/teachers.png",
          quote: "This platform helped me connect with new students every week.",
          type: "PROVIDER REVIEW",
          rating: 5,
        },
      ];
    return (
<>
<section className="hero relative py-16 md:py-32 flex items-center justify-center text-center" style={{
        backgroundImage: " url('TrainingBg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"

      }}>
        <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
        <div className="container mx-auto px-4 text-black z-10">
          <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
            Find & Compare the Best<br />Beauty Training Courses<br />Near You!
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Post your beauty training request and get responses from top-rated
            providers in your area!
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


      <h2 className="font-gullia text-4xl md:text-5xl text-center mt-16">How It Works</h2>
      <p className='text-center mb-10'>
      A simple, mobile-friendly form that captures all necessary details.
      </p>

            {/* How It Works Section */}
            <section className="how-it-works py-16 " style={{
              backgroundImage: "url('/HowBg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <div className="container mx-auto px-4">
                <h2 className="font-gullia text-4xl md:text-5xl text-center mb-16">How It Works</h2>
      
                <div className="flex flex-col md:flex-row gap-8">
                  {/* For Students Column */}

      
                  {/* Center Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src="/HowMid.png"
                        alt="Beauty Training Process"
                        width={300}
                        height={500}
                        className="object-cover"
                      />
                    </div>
                  </div>
      
                  {/* For Training Providers Column */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-8">FOR TRAINING PROVIDERS</h3>
      
                    <div className="flex flex-col items-start mb-6 gap-5">
                      <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                        <Image
                          src="/seedling.png"
                          alt="Chat Bot"
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-gullia mb-2">Create an Account</h4>
                        <p>Register & choose a subscription plan.</p>
                      </div>
                    </div>
      
                    <div className="flex flex-col items-start mb-6 gap-5">
                      <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                        <Image
                          src="/building.png"
                          alt="Chat Bot"
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-gullia mb-2">Receive Student Leads</h4>
                        <p>Get requests from potential students.</p>
                      </div>
                    </div>
      
                    <div className="flex flex-col items-start mb-6 gap-5">
                      <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                        <Image
                          src="/users.png"
                          alt="Chat Bot"
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-gullia mb-2">Grow Your Business</h4>
                        <p>Contact students and fill your classes.</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="flex justify-center mt-8">
                  <button className="bg-[#658396]  gap-2 text-white py-3 px-8 rounded-full flex items-center">
                    GET STARTED
                    <Image src="/Send.png" alt="Chat Bot" width={30} height={30} className="pl-3 object-cover" />
      
                  </button>
                </div>
              </div>
            </section>

            <div className="flex flex-col items-center px-4 py-8 text-center relative">
  {/* Decorative elements */}
  <div className="absolute right-0 top-0 w-1/4 h-full opacity-20 pointer-events-none">
    <img src="/Flower.png" alt="" className="w-full h-full object-contain" />
  </div>

  <div className="absolute left-0 top-0 w-1/4 h-full opacity-20 pointer-events-none">
    <img src="/circleBlur.png" alt="" className="w-full h-full object-contain" />
  </div>
  
  <h1 className="text-5xl font-gullia  mb-2">Subscription Plan Details</h1>
  <p className="text-lg mb-6">Get Daily Beauty Student Leads – Start Your Free Trial Today!</p>
  
  <div className=" w-full max-w-3xl mx-auto">
      <section style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className=" p-8 rounded-lg max-w-2xl mx-auto my-8">
  <h2 className="text-4xl font-serif mb-2">Join for </h2>
  <p className="mb-6"><span className='text-4xl font-gullia'>£300<span className="text-lg">/mo</span></span> No Contracts, Cancel Anytime!</p>
  
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Unlimited Leads</span> – Get access to as many student inquiries as you can handle.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Instant Lead Alerts </span> –  Get notified the moment a new student submits a request.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Direct Contact</span> – Reach out to students via email or phone instantly.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">30-Day Free Trial </span> –  Experience the platform risk-free before committing.
      </div>
    </li>
    {/* Add remaining list items with similar structure */}
  </ul>
  
  <button className="mt-6 bg-[#658396] text-white px-6 py-2 rounded-full">
    JOIN NOW & START RECEIVING LEADS
  </button>
</section>
  </div>
</div>


      {/* What Our Users Say Section */}
      <section style={{
        backgroundImage: "url('/testimonialBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="testimonials py-16 relative">
     
        
        <div className="container mx-auto px-4">
          <h2 className="font-gullia text-4xl md:text-5xl text-center mb-16">What Our Users Say</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12">
  {testimonials.map((testimonial) => (
    <div 
      key={testimonial.id} 
      className="flex-col w-full md:w-1/3 justify-center bg-white rounded-lg p-8 text-center relative shadow-lg"
    >
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mx-auto">
<Image 
          src={testimonial.image} 
          alt={testimonial.name}
          width={96} 
          height={96}
          className="object-cover"
        />
      </div>

      {/* Content Below the Image */}
      <div className="mt-16"> 
        <h4 className="font-semibold text-lg mb-2">{testimonial.name}</h4>

        {/* Rating Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote Section */}
        <p className="text-lg italic text-[#658396] mb-6">"{testimonial.quote}"</p>

        {/* Separator Line */}
        <div className="h-1 bg-gray-300 rounded-full w-3/4 mx-auto mb-6"></div>

        {/* Type of Testimonial */}
        <p className="text-gray-500">{testimonial.type}</p>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  ))}
</div>

          
          <div className="text-center mt-12">
            <button className="bg-[#658396]  text-white py-2 px-6 rounded-full inline-flex items-center">
              READ MORE REVIEWS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>


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
      
      <div className="flex flex-col items-center px-4 py-12 text-center">
  <h2 className="text-5xl font-gullia  mb-2">Have Questions?</h2>
  <p className=" font-gullia text-2xl">Our Team is Here to Help!</p>
  <p className="text-3xl text-[#658396] ">
    Contact us at [support@email.com]
  </p>
  <p className="text-xl text-[#658396] mb-4">
    For Any Inquiries Before Signing Up.
  </p>
  <button className="bg-[#658396] text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-700 transition">
    CONTACT US
  </button>

  <h2 className="text-3xl font-bold mt-12">Why Join?</h2>
  <p className="text-[#658396] mb-8">
    This section reassures users of the benefits of submitting their request.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
  {[
    { src: "/search.png", title: "Exclusive Student Leads", desc: "Direct access to students actively looking for training." },
    { src: "/hand.png", title: "No Commission Fees", desc: "Keep 100% of your earnings." },
    { src: "/build.png", title: "Hassle-Free Marketing", desc: "We bring the students to you." },
    { src: "/build.png", title: "Fast & Simple Setup", desc: "Get started in minutes." }
  ].map((item, index) => (
    <div key={index} className="p-6 bg-blue-50 rounded-lg shadow-md text-center">
      <div className="bg-gray-500 w-14 h-14 rounded-lg mx-auto mb-4 flex justify-center items-center">
        <Image src={item.src} alt={item.title} width={36} height={36} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-gray-600">{item.desc}</p>
    </div>
  ))}
</div>


  <button 
  className=" mt-12 whitespace-nowrap bg-[#658396] text-white py-3 px-8 rounded-full text-center inline-flex items-center gap-x-2"
  >
    START YOUR FREE TRIAL TODAY                         <Image src="/send.png" alt="Chat Bot" width={12} height={12} className="object-cover " />
    
  </button>
  <p className="text-[#658396] mt-4">No Contracts, Just Quality Leads!</p>
</div>


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

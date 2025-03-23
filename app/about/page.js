"use client"

import React , {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
   const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
  
    const nextTestimonial1 = () => {
      setIndex1((prevIndex) => (prevIndex + 1) % testimonials1.length);
    };
  
    const prevTestimonial1 = () => {
      setIndex1((prevIndex) =>
        prevIndex === 0 ? testimonials1.length - 1 : prevIndex - 1
      );
    };
  
    const nextTestimonial2 = () => {
      setIndex2((prevIndex) => (prevIndex + 1) % testimonials2.length);
    };
  
    const prevTestimonial2 = () => {
      setIndex2((prevIndex) =>
        prevIndex === 0 ? testimonials2.length - 1 : prevIndex - 1
      );
    };
    const testimonials1 = [
      {
        id: 1,
        name: "John Doe",
        image: "/students.png",
        rating: 5,
        quote: "Absolutely fantastic service!",
        type: "Verified Buyer",
      },
      {
        id: 2,
        name: "Jane Smith",
        image: "/students.png",
              rating: 4,
        quote: "Great experience, highly recommended!",
        type: "Frequent User",
      },
      {
        id: 3,
        name: "Emily Johnson",
        image: "/students.png",
              rating: 5,
        quote: "Best decision ever!",
        type: "Happy Customer",
      },
    ];
    
    const testimonials2 = [
      {
        id: 4,
        name: "Michael Lee",
        image: "/teachers.png",
        rating: 4,
        quote: "Really enjoyed the service.",
        type: "Verified Buyer",
      },
      {
        id: 5,
        name: "Sarah Wilson",
        image: "/teachers.png",
        rating: 5,
        quote: "Will use again for sure!",
        type: "Loyal Customer",
      },
      {
        id: 6,
        name: "David Brown",
        image: "/teachers.png",
        rating: 5,
        quote: "Outstanding experience!",
        type: "Returning Client",
      },
    ];
    
    return (

        <>

            <section className="hero relative py-16 md:py-32 flex items-center justify-center text-center" style={{
                backgroundImage: " url('aboutBg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
                <div className="container mx-auto px-4 text-black z-10">
                    <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
                        Empowering the Beauty <br /> Industry
                    </h1>
                    <h1 className=" text-4xl md:text-6xl mb-6 leading-tight">
                        One Course at a Time!
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                        Post your beauty training request and get responses from top-rated providers in your area!
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


            <section className="about-us py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/about1.png"
                                alt="Beauty Training"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="relative w-full md:w-1/2">


                            <h2 className="font-gullia text-4xl md:text-5xl mb-4">About Us</h2>
                            <h3 className="font-gullia text-2xl md:text-4xl mb-6">
                                Empowering the Beauty Industry –
                                <span className='text-[#658396] '>
                                    One Course at a Time!
                                </span>
                            </h3>


                            <p className="mb-6">
                                At Beauty Training Courses UK, we make it effortless for students to connect with trusted, fully accredited beauty training providers. Instead of endlessly searching for the right course, we bring everything to one place—helping you find and compare training options with ease. Whether you're looking to kickstart your beauty career or master a new skill, we provide access to expert-led courses tailored to your goals.
                            </p>
                            <div className="flex gap-3">
                                <button className="bg-[#658396] flex items-center gap-2 text-white py-2 px-6 rounded-full">
                                    Find a Course
                                    <Image
                                        src="/Send.png"
                                        alt="Beauty Training"
                                        width={16}
                                        height={16}
                                        className="rounded-lg"
                                    />
                                </button>

                                <button className="bg-[#658396] flex items-center gap-2 text-white py-2 px-6 rounded-full">
                                    Join as a Training Provider
                                    <Image
                                        src="/Send.png"
                                        alt="Beauty Training"
                                        width={20}
                                        height={20}
                                        className="rounded-lg"
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="about-us py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="relative w-full md:w-1/2">
  <img 
    src="/Flower.png" 
    alt="Decorative Image" 
    className="absolute right-1 " 
  />

                            <h2 className="font-gullia text-4xl md:text-5xl mb-4">Who We Are</h2>


                            <p className="mb-6">
                                At Beauty Training Courses UK, we connect aspiring beauty professionals with trusted, high-quality training providers across the UK. Whether you're starting your career or expanding your skills, our platform makes it easy to find, compare, and enroll in the best beauty courses near you.
                            </p>
                            <h3 className="font-gullia text-2xl md:text-5xl mb-4">Key Points</h3>
                            <div className="flex flex-col gap-4">
  <div className="flex items-start gap-3">
    <Image
      src="/checkWhite.png"
      alt="Beauty Training"
      width={16}
      height={16}
      className="rounded-lg self-start"
    />
    <p className="mb-0 leading-normal">
      Bridging the gap between students & trainers.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <Image
      src="/checkWhite.png"
      alt="Beauty Training"
      width={16}
      height={16}
      className="rounded-lg self-start"
    />
    <p className="mb-0 leading-normal">
      Providing top-tier, accredited training opportunities.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <Image
      src="/checkWhite.png"
      alt="Beauty Training"
      width={16}
      height={16}
      className="rounded-lg self-start"
    />
    <p className="mb-0 leading-normal">
      Making beauty education accessible, fast, and hassle-free.
    </p>
  </div>
</div>




                            <button className="bg-[#658396] flex items-center gap-2 text-white py-2 px-6 rounded-full">
                                Find a Course
                                <Image
                                    src="/Send.png"
                                    alt="Beauty Training"
                                    width={16}
                                    height={16}
                                    className="rounded-lg"
                                />
                            </button>



                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/about2.png"
                                alt="Beauty Training"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>

                    </div>
                </div>
            </section>

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
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-8">FOR STUDENTS</h3>

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
                  <h4 className="text-2xl font-gullia mb-2">Submit Your Request</h4>
                  <p>Tell us what course you're looking for.</p>
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
                  <h4 className="text-2xl font-gullia mb-2">Choose the Best Fit</h4>
                  <p>Compare and book with confidence.</p>
                </div>
              </div>

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
                  <h4 className="text-2xl font-gullia mb-2">Get Responses</h4>
                  <p>Receive quotes from professional training providers.</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center">
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
            <div className="w-full md:w-1/3">
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
            <button onClick={() => window.location.href = '/signIn'} className="bg-[#658396]  gap-2 text-white py-3 px-8 rounded-full flex items-center">
              GET STARTED
              <Image src="/Send.png" alt="Chat Bot" width={30} height={30} className="pl-3 object-cover" />

            </button>
          </div>
        </div>
      </section>
            {/* Why Choose Us Section */}
            <section  className="why-choose-us py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
              <div className="relative  overflow-hidden w-[110%] h-[110%]  aspect-square">
                <Image 
                className="w-[209%] h-[122%] object-contain"
                  src="/group1.png" 
                  alt="Beauty Training Class"
                  fill
                />
              </div>


            </div>
            
            <div className="w-full md:w-1/2 md:pl-12 mt-15 h-72 " style={{
        backgroundImage: "url('/group2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
              <h2 className="font-gullia text-4xl md:text-5xl mb-10">Why Choose Us?</h2>
              
              <div className="mb-8">
                <h3 className="font-gullia text-2xl mb-6">FOR STUDENTS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Compare multiple providers in one place.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Get direct responses from top-rated trainers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No hidden fees – completely free for students.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/find-course" className="bg-[#658396] hover:bg-[#658396] text-white py-2 px-6 rounded-full inline-flex items-center">
                    FIND A COURSE 
                    <Image className='ml-2' src="/Send.png" alt="send" width={15} height={15} />
                    </Link>
                </div>
              </div>
              
              <div>
                <h3 className="font-gullia text-2xl mb-6">FOR TRAINING PROVIDERS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Guaranteed high-quality student leads daily.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Easy-to-use dashboard for managing inquiries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Flexible subscription options with no long-term commitment.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/become-provider" className="bg-[#658396] hover:bg-[#658396] text-white py-2 px-6 rounded-full inline-flex items-center">
                    BECOME A PROVIDER 
                    <Image className='ml-2' src="/Send.png" alt="send" width={15} height={15} />

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Users Say Section */}
      <section
      style={{
        backgroundImage: "url('/testimonialBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="testimonials py-16 -translate-y-44 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-gullia text-4xl md:text-5xl text-center mb-16">
          What Our Users Say
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* First Carousel */}
          <div className="relative w-full md:w-1/3">
            <div className="flex flex-col justify-center bg-white rounded-lg p-8 text-center relative shadow-lg">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mx-auto">
                <Image
                  src={testimonials1[index1].image}
                  alt={testimonials1[index1].name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {testimonials1[index1].name}
              </h4>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials1[index1].rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic text-[#658396] mb-6">
                "{testimonials1[index1].quote}"
              </p>
              <div className="h-1 bg-gray-300 rounded-full w-3/4 mx-auto mb-6"></div>
              <p className="text-gray-500">{testimonials1[index1].type}</p>
            </div>

            <button
              onClick={prevTestimonial1}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
            </button>
            <button
              onClick={nextTestimonial1}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
            </button>
          </div>

          {/* Second Carousel */}
          <div className="relative w-full md:w-1/3">
            <div className="flex flex-col justify-center bg-white rounded-lg p-8 text-center relative shadow-lg">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mx-auto">
                <Image
                  src={testimonials2[index2].image}
                  alt={testimonials2[index2].name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {testimonials2[index2].name}
              </h4>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials2[index2].rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic text-[#658396] mb-6">
                "{testimonials2[index2].quote}"
              </p>
              <div className="h-1 bg-gray-300 rounded-full w-3/4 mx-auto mb-6"></div>
              <p className="text-gray-500">{testimonials2[index2].type}</p>
            </div>

            <button
              onClick={prevTestimonial2}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
            </button>
            <button
              onClick={nextTestimonial2}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
            </button>
          </div>
        </div>
      </div>
    </section>



        {/* Assistance and Contact Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 mb-24">
          {/* Left Column - Assistance */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
            <div className="mb-4">
              <h2 className="text-3xl font-normal text-gray-900">Need Assistance?</h2>
              <h2 className="text-3xl font-normal text-gray-900">We're Here to Help!</h2>
              <p className="text-gray-600 mt-2">Our friendly team is exited to makeup your questions with our beauty expert answers.</p>
            </div>
            
            <div className="relative w-40 h-40">
              <div className="text-blue-200">
                {/* Simple flower SVG representation */}
                <Image
                src="/rose.png"
                alt="Beauty Training"
                width={600}
                height={600}
                className="rounded-lg"
              />
              </div>
            </div>
            
            <div className="flex items-center mt-4">
            <Image
                src="/community.png"
                alt="Beauty Training"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div className="ml-2">
                <p className="text-sm font-medium">We're having 5k+ happy</p>
                <p className="text-sm font-medium">beautiful faces.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-normal text-gray-900 mb-6">Let's get in touch.</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="border border-gray-700 text-gray-700 rounded-full px-6 py-2 inline-flex items-center">
                  Let's connect
                  <Image
                src="/send1.png"
                alt="Beauty Training"
                width={15}
                height={15}
                className="rounded-lg"
              />
                </button>
              </div>
            </form>
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

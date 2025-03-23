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
          id: 'How does this platform help me find training courses?',
          question: 'How does this platform help me find training courses?',
          answer: 'Simply fill out the (Find a Course) form with your details and training requirements. Your request will be sent to verified training providers who will contact you with their offers.'
        },
        {
          id: 'Is it free for customers to use this platform?',
          question: 'Is it free for customers to use this platform?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'How soon will I hear from training providers after submitting my request?',
          question: 'How soon will I hear from training providers after submitting my request?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        },
        {
          id: 'Can I compare multiple training providers before choosing one?',
          question: 'Can I compare multiple training providers before choosing one?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'Do I book the course through this platform?',
          question: 'Do I book the course through this platform?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        },
        {
          id: 'How do I know if a training provider is reputable?',
          question: 'How do I know if a training provider is reputable?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'What if I don’t find a provider that suits my needs?',
          question: 'What if I don’t find a provider that suits my needs?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        }
      ];

      const Faqs = [
        {
          id: 'How does the platform help training providers?',
          question: 'How does the platform help training providers?',
          answer: 'We connect you with students actively looking for beauty training courses. You receive unlimited leads directly to your email and can contact students to offer your courses.'
        },
        {
          id: 'What does the £300/month subscription include?',
          question: 'What does the £300/month subscription include?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'How do I sign up as a training provider?',
          question: 'How do I sign up as a training provider?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        },
        {
          id: 'How are leads delivered to me?',
          question: 'How are leads delivered to me?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'Can I cancel my subscription at any time?',
          question: 'Can I cancel my subscription at any time?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        },
        {
          id: 'Can I upgrade or downgrade my subscription in the future?',
          question: 'Can I upgrade or downgrade my subscription in the future?',
          answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
        },
        {
          id: 'How do I manage my leads and contacts?',
          question: 'How do I manage my leads and contacts?',
          answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
        }
      ];
    return (
        <>

            <section className="hero relative py-16 md:py-32 flex items-center justify-center text-center" style={{
                backgroundImage: " url('faqBg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
                <div className="container mx-auto px-4 text-black z-10">
                    <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
                    Frequently Asked <br/> Questions (FAQs)
                    </h1>
               
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                    Whether you're a student looking for the perfect training course or a provider wanting to join our network, we're here to help!                    </p>
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


<div className='flex flex-col justify-center text-center items-center mt-6'>
<h5 className="font-gullia text-xl md:text-5xl mb-6 leading-tight">
Have Questions? We've Got Answers!
                    </h5>
               
                    <p className="text-xl md:text-lg mb-12 max-w-3xl mx-auto">
                    Find answers to the most common questions from training seekers and providers.
                    If you don’t see what you’re looking for, feel free to contact us!
                    </p>
                    </div>



{/* FAQ Section */}
<section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-col gap-8 mb-24 relative">
  <h1 className="text-5xl font-gullia text-center text-gray-900 mb-20">
    FAQs for Customers (Training Seekers)
  </h1>

  {/* Flower Image on the Right */}
  <Image 
  width={200}
  height={200}
    src="/flower.png" 
    alt="Flower" 
    className="absolute top-0 right-0 w-32 h-32 opacity-50"
  />

  {/* FAQ List */}
  <div className="w-full rounded-lg">
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
          <span className="text-2xl">{expandedFaq === faq.id ? '−' : '+'}</span>
        </button>

        {expandedFaq === faq.id && <div className="px-6 pb-4">{faq.answer}</div>}
      </div>
    ))}

    <div className="mt-8">
      <button className="bg-[#658396] text-white px-8 py-3 rounded-full uppercase text-sm font-medium">
        READ FULL FAQ
      </button>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-col gap-8 mb-24 relative">
  <h1 className="text-5xl font-gullia text-center text-gray-900 mb-20">
    FAQs for Training Providers
  </h1>

  {/* Flower Image on the Left */}
  <img 
    src="/flower.png" 
    alt="Flower" 
    className="absolute top-0 right-0 w-32 h-32 opacity-50"
  />

  {/* FAQ List */}
  <div className="w-full rounded-lg">
    {Faqs.map((Faq) => (
      <div
        key={Faq.id}
        className={`border-b border-gray-200 rounded-lg ${
          expandedFaq === Faq.id ? 'bg-[#658396] text-white' : 'bg-white text-gray-700'
        }`}
      >
        <button
          className="flex justify-between items-center w-full text-left py-4 px-6"
          onClick={() => setExpandedFaq(expandedFaq === Faq.id ? null : Faq.id)}
        >
          <span className="font-medium">{Faq.question}</span>
          <span className="text-2xl">{expandedFaq === Faq.id ? '−' : '+'}</span>
        </button>

        {expandedFaq === Faq.id && <div className="px-6 pb-4">{Faq.answer}</div>}
      </div>
    ))}

    <div className="mt-8">
      <button className="bg-[#658396] text-white px-8 py-3 rounded-full uppercase text-sm font-medium">
        READ FULL FAQ
      </button>
    </div>
  </div>
</section>



        <div className='flex flex-col justify-center text-center items-center mt-6'>
<h5 className="font-gullia text-xl md:text-6xl mb-6 leading-tight">
Need More Help?                    </h5>
               
                    <p className="text-xl md:text-xl text-[#658396] mb-12 max-w-3xl mx-auto">
                    Didn’t find what you’re looking for? <br/>
                    Contact us via the Contact Us page or email us at [your-email@yourdomain.com].
                    </p>

                    <p className="text-lg   mb-12 max-w-3xl mx-auto">
                    🕒 Monday - Friday: 9 AM - 6 PM (UK Time)
                    </p>
                    </div>


       {/* Newsletter Section */}
        <section className="relative h-10 bg-[#658396] py-20">
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

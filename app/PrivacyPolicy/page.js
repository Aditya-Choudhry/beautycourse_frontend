import React from 'react';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <div className="relative  px-4 py-8">
      {/* Decorative flower elements */}
      <div className="absolute top-0 right-0 ">
      <Image
    src="/Flower.png"
    alt="Beauty Training"
    width={500}
    height={500}
    className="rounded-lg"
  />
      </div>
      <div className="absolute bottom-0 left-0 ">
      <Image
    src="/Flower.png"
    alt="Beauty Training"
    width={500}
    height={500}
    className="rounded-lg"
  />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif mb-6">Privacy Policy & Terms of Service</h1>
        
        <p className="mb-6">
          Welcome to Beauty Training Course. We are committed to protecting your privacy and ensuring that your personal information is handled securely. By using our website, you agree to the terms outlined in this Privacy Policy & Terms of Service.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information when you fill out forms, register for an account, or subscribe to our services. This may include your name, email address, phone number, and course preferences.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To connect customers with training providers.</li>
            <li>To send lead notifications to providers.</li>
            <li>To manage user accounts and subscriptions.</li>
            <li>To improve our services and user experience.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">3. Data Protection & GDPR Compliance</h2>
          <p className="mb-2">
            We are fully compliant with the General Data Protection Regulation (GDPR). You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to any inaccurate data.</li>
            <li>Request deletion of your data unless required for legal or service related reasons.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">4. Subscription & Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Training providers must subscribe to access customer leads.</li>
            <li>Subscription payments are processed securely via Stripe or PayPal.</li>
            <li>Providers may cancel their subscription at any time, but access to leads will end at the conclusion of the paid billing cycle.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">5. User Responsibilities</h2>
          <p className="mb-2">By using our platform, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and truthful information.</li>
            <li>Not misuse the platform for fraudulent activities.</li>
            <li>Follow fair business practices when contacting leads or training seekers.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">6. Liability & Disclaimers</h2>
          <p>
            We act solely as a lead generation platform and do not guarantee the quality of services provided by training providers. We are not responsible for disputes between customers and providers.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">7. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy & Terms of Service at any time. Continued use of the platform constitutes acceptance of any changes.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy & Terms of Service, please contact us at: [Your Business Email] | [Your Business Phone]
          </p>
        </section>
        
        <div className="mt-10 text-center">
          <button className=" text-blue-500 px-4 py-2 rounded-md flex mx-auto items-center">
            SUBSCRIBE TODAY & START RECEIVING HIGH-QUALITY LEADS
<Image
    src="/sendBlue.png"
    alt="Beauty Training"
    width={12}
    height={12}
    className="rounded-lg"
  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
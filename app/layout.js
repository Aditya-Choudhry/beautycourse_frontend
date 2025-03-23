"use client";

import { usePathname } from "next/navigation";


import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/signIn" || pathname === "/SignUp" || pathname === "/Verify1" || pathname === "/Verify2" || pathname === "/Verify3" || pathname === "/Verify4"  || pathname === "/Verify5" || pathname === "/UserProfile" || pathname === "/UserSubs" || pathname === "/UserLeads" || pathname === "/UserView" || pathname === "/AdminDash" || pathname === "/AdminLead" || pathname === "/AdminProvider" || pathname === "/AdminSubs";
  return (
    <html lang="en">
      <body
        
      >
    {!hideNavFooter && <Navbar />}        {children}
    {!hideNavFooter && <Footer />}
       
      </body>
    </html>
  );
}

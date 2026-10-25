import React from 'react';
import { PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenEmergencyModal: () => void;
  onScrollToBooking: () => void;
}

// Simple navigation bar component for Gondar Blood Bank
export default function Navbar({ onOpenEmergencyModal, onScrollToBooking }: NavbarProps) {
  // Helper function to smoothly scroll to any section by HTML id
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Top Urgent Warning Strip
      <div className="bg-[#93000b] text-white text-xs py-2 px-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">⚠️ CRITICAL ALERT:</span>
            <span>O-Negative (O-) and B-Positive (B+) reserves are critically low in Gondar hospitals.</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => scrollTo('pillars')}
              className="text-white/80 hover:text-white underline cursor-pointer"
            >
              EBTBS Pillars
            </button>
            <button
              onClick={onScrollToBooking}
              className="bg-white text-[#93000b] hover:bg-red-50 px-3 py-1 rounded font-bold transition cursor-pointer"
            >
              Donate Blood
            </button>
          </div>
        </div>
      </div> */}

      {/* 2. Main Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-[0px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and App Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#b91c1c] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                GBB
              </div>
              <div>
                <span className="text-base font-bold text-gray-900 block">
                  የጎንደር የደም ባንክ | Gondar Blood Bank
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-600">
              <button onClick={() => scrollTo('hero')} className="text-[#b91c1c] border-b-2 border-[#b91c1c] pb-1 cursor-pointer">
                Home
              </button>
              <button onClick={() => scrollTo('why-donate')} className="hover:text-gray-900 transition cursor-pointer">
                About Us
              </button>
              <button onClick={() => scrollTo('pillars')} className="hover:text-gray-900 transition cursor-pointer">
                Service Pillars
              </button>
              <button onClick={() => scrollTo('eligibility')} className="hover:text-gray-900 transition cursor-pointer">
                Eligibility
              </button>
              <button onClick={() => scrollTo('news')} className="hover:text-gray-900 transition cursor-pointer">
                News
              </button>
              <button onClick={() => scrollTo('footer')} className="hover:text-gray-900 transition cursor-pointer">
                Contact
              </button>
            </nav>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">

              <button
                onClick={onScrollToBooking}
                className="bg-[#b91c1c] hover:bg-[#93000b] text-white px-3 py-1.5 rounded text-xs font-bold transition shadow-sm cursor-pointer"
              >
                Donate Blood
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

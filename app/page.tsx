"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActionCards from '../components/ActionCards';
import ServicePillars from '../components/ServicePillars';
import QuoteBanner from '../components/QuoteBanner';
import WhyDonate from '../components/WhyDonate';
import DonationSteps from '../components/DonationSteps';
import EligibilityCriteria from '../components/EligibilityCriteria';
import BookingAndDispatch from '../components/BookingAndDispatch';
import LatestNews from '../components/LatestNews';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import EmergencyModal from '../components/EmergencyModal';

/**
 * Gondar Vital Life - Main Application Component
 * 
 * This file connects all modular sections in an easy-to-read,
 * beginner and intermediate-student friendly structure.
 * 
 * If you are migrating this to Next.js App Router:
 * This file serves as your `app/page.tsx`!
 */
export default function App() {
  // Modal state for emergency hospital requests
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  // Helper navigation functions
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEligibility = () => {
    const el = document.getElementById('eligibility');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaravans = () => {
    const el = document.getElementById('caravans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-gray-900 font-sans">
      {/* 1. Navigation Header & Alert Strip */}
      <Navbar
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        onScrollToBooking={scrollToBooking}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onRequestClick={() => setIsEmergencyModalOpen(true)}
        />

        {/* 3. Three Overlapping Action Cards */}
        <ActionCards
          onBookClick={scrollToBooking}
          onRequestClick={() => setIsEmergencyModalOpen(true)}
          onCaravanClick={scrollToCaravans}
        />

        {/* 4. National & Regional Service Pillars */}
        <ServicePillars />

        {/* 5. Community Quote Banner */}
        <QuoteBanner />

        {/* 6. Why Should You Donate Blood in Gondar? */}
        <WhyDonate
          onDonateClick={scrollToBooking}
          onEligibilityClick={scrollToEligibility}
        />

        {/* 7. Step-By-Step Guide to Donating Blood */}
        <DonationSteps />

        {/* 8. Basic Eligibility Criteria for Donors */}
        <EligibilityCriteria onBookClick={scrollToBooking} />

        {/* 9. Interactive Booking Form & Hospital Dispatch Protocol */}
        <BookingAndDispatch />

        {/* 10. Latest News from Gondar Blood Bank */}
        <LatestNews />

        {/* 12. Bottom Call to Action */}
        <CallToAction onDonateClick={scrollToBooking} />
      </main>

      {/* 13. Institutional Footer */}
      <Footer />

      {/* 14. Emergency Hospital Requisition Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
    </div>
  );
}

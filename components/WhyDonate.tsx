import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface WhyDonateProps {
  onDonateClick: () => void;
  onEligibilityClick: () => void;
}

// "Why Should You Donate Blood in Gondar?" section with healthcare team photo
export default function WhyDonate({ onDonateClick, onEligibilityClick }: WhyDonateProps) {
  return (
    <section id="why-donate" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Doctor Team Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
              alt="University of Gondar Healthcare Team"
              className="w-full h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Accredited Badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-900">
                  WHO & FMoH Standard
                </h5>
                <p className="text-[10px] text-gray-500">
                  Accredited blood banking procedures and cold-chain safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Informational Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
              SAVE LIVES TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Should You Donate Blood in Gondar?
            </h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Blood donation is a selfless act of love and civic responsibility that has the power to rescue three lives with just one single pint. Blood cannot be manufactured or chemically synthesized; it can only come as a generous gift from one human being to another in need.
            </p>
          </div>

          {/* 3 Reasons with red checkmark bullets */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 text-[#b91c1c] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div className="text-xs sm:text-sm text-gray-900">
                <strong>Three Lives Per Donation:</strong>{' '}
                <span className="text-gray-600">
                  Red blood cells, platelets, and plasma are separated to assist pediatric patients, trauma victims, and cancer therapies.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 text-[#b91c1c] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div className="text-xs sm:text-sm text-gray-900">
                <strong>Supports Maternal Survival:</strong>{' '}
                <span className="text-gray-600">
                  Postpartum hemorrhage is a primary risk during childbirth; your timely donations save mothers across Gondar and rural Amhara.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 text-[#b91c1c] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div className="text-xs sm:text-sm text-gray-900">
                <strong>Free Health Check:</strong>{' '}
                <span className="text-gray-600">
                  Donors receive complimentary vital screenings including hemoglobin levels, pulse, blood pressure, and blood type verification.
                </span>
              </div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onDonateClick}
              className="bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm transition cursor-pointer"
            >
              Become a Regular Donor
            </button>
            <button
              onClick={onEligibilityClick}
              className="border border-gray-300 text-gray-800 hover:bg-gray-50 font-semibold text-xs px-5 py-2.5 rounded-lg transition cursor-pointer"
            >
              View Eligibility Rules
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

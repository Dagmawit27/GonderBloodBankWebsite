import React from 'react';
import { Check } from 'lucide-react';

// 3-step guide showing how simple and fast donating blood is
export default function DonationSteps() {
  const steps = [
    {
      stepNumber: '01.',
      badgeColor: 'bg-[#b91c1c]',
      title: 'Check Your Eligibility',
      desc: 'Confirm you meet standard criteria: age 18-65, weight above 50 kg, good general health, and feeling well on the day of donation.',
      perk: 'Free mini-health screening included',
    },
    {
      stepNumber: '02.',
      badgeColor: 'bg-[#111827]',
      title: 'Schedule Or Walk In',
      desc: 'Visit our central hub near Gondar Specialized Referral Hospital or our mobile donation buses parked in historic town squares.',
      perk: 'Maraki & Hospital walk-ins welcome',
    },
    {
      stepNumber: '03.',
      badgeColor: 'bg-[#b91c1c]',
      title: 'Donate Blood & Refresh',
      desc: 'Recline comfortably as sterile staff take just 10-12 minutes to collect one unit. Relax with complimentary fresh juice, biscuits, and tea.',
      perk: 'Receive Official Donor Certificate',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
            DONATION PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Step-By-Step Guide To Donating Blood
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            The entire process takes less than 30 minutes from arrival to refreshment.
          </p>
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f9ff] rounded-xl border border-blue-50 p-8 flex flex-col justify-between hover:border-gray-300 transition"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-full ${item.badgeColor} text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm`}
                >
                  {item.stepNumber}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200/60 text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#b91c1c]" />
                <span>{item.perk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

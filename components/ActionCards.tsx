import React from 'react';
import { Hospital, Droplet, Truck } from 'lucide-react';

interface ActionCardsProps {
  onBookClick: () => void;
  onRequestClick: () => void;
  onCaravanClick: () => void;
}

// 3 quick action cards right below the hero banner
export default function ActionCards({ onBookClick, onRequestClick, onCaravanClick }: ActionCardsProps) {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Center Walk-In */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                CENTER WALK-IN
              </span>
              <Hospital className="h-5 w-5 text-[#b91c1c]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Donate Blood at Center
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Maraki Campus & Gondar Comprehensive Hospital. Friendly doctors, comfortable donor recliners, and hygienic safety closets.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-500">8:00 - Sun 8:00 AM - 6:00 PM</span>
            <button
              onClick={onBookClick}
              className="font-bold text-[#b91c1c] hover:underline cursor-pointer"
            >
              Book Center &rarr;
            </button>
          </div>
        </div>

        {/* Card 2: Priority Hospital Link (Dark Crimson / Carbon) */}
        <div className="bg-[#111827] text-white border border-gray-800 shadow-xl rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-200 bg-[#b91c1c] px-2 py-0.5 rounded">
                PRIORITY HOSPITAL LINK
              </span>
              <Droplet className="h-5 w-5 text-[#b91c1c] fill-current" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Request For Blood Donation
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              For emergency surgical wards, postpartum units, and trauma ambulances across Gondar. Immediate cold-chain transit.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
            <span className="text-gray-400">24/7 Dispatch: 994</span>
            <button
              onClick={onRequestClick}
              className="font-bold text-white hover:text-red-200 cursor-pointer"
            >
              Start Requisition &rarr;
            </button>
          </div>
        </div>

        {/* Card 3: Mobile Blood Drives */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                DEBO & COMMUNITY
              </span>
              <Truck className="h-5 w-5 text-[#b91c1c]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Mobile Blood Drives
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Our equipped mobile caravans visit Fasil Ghebbi square, Debre Berhan, university colleges, and local church compounds weekly.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-500">Next: Fasil Square (Saturday)</span>
            <button
              onClick={onCaravanClick}
              className="font-bold text-[#b91c1c] hover:underline cursor-pointer"
            >
              View Schedule &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

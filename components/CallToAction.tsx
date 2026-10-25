import React from 'react';
import { Heart } from 'lucide-react';

interface CallToActionProps {
  onDonateClick: () => void;
}

// Bottom Call To Action Banner
export default function CallToAction({ onDonateClick }: CallToActionProps) {
  return (
    <section className="bg-[#111827] text-white py-16 px-4 text-center border-t border-gray-800">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-red-200 tracking-widest uppercase block">
          BE A HERO. SAVE A LIFE TODAY!
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Donate Blood, Donate Hope.
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          Every drop honors the enduring compassion of Gondar. Your donation will be transfused to patients fighting for their lives within hours.
        </p>
        <div className="pt-4">
          <button
            onClick={onDonateClick}
            className="bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-xl flex items-center gap-2 mx-auto transition cursor-pointer"
          >
            <Heart className="h-4 w-4 fill-current" />
            <span>Donate Blood Today</span>
          </button>
        </div>
      </div>
    </section>
  );
}

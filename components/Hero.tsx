import React from 'react';
import { Droplet, FileText } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onRequestClick: () => void;
}

// Hero section: The big banner at the top of the page
export default function Hero({ onBookClick, onRequestClick }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gray-950 text-white min-h-[560px] flex items-center overflow-hidden">
      {/* Background medical image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/blood-bg.jpg"
          alt="Gondar Hospital Blood Donation Clinic"
          className="w-full h-full object-cover object-center opacity-80 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      {/* Main hero text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/60 border border-white/20 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#b91c1c]" />
            <span>GIVE THE GIFT OF LIFE • የሕይወት ስጦታ ይስጡ</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Your Blood Can<br />
            Make A Difference
          </h1>

          {/* Subtitle in Amharic & English */}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            <strong>የሕይወት ስጦታ ይስጡ — ደም ይለግሱ!</strong> Every single donation at Gondar Blood Bank supports emergency surgeries, maternal care, and trauma relief across our historical city and regional referral centers.
          </p>

          {/* Quick Statistics Counters */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/20 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">28,400+</div>
              <div className="text-xs text-gray-300 font-medium">Lives Saved in Gondar</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">15 MIN</div>
              <div className="text-xs text-gray-300 font-medium">Average Duration</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs text-gray-300 font-medium">Tested & Safe</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onBookClick}
              className="bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold px-6 py-3.5 rounded-lg text-sm shadow-lg flex items-center gap-2 transition cursor-pointer"
            >
              <Droplet className="h-4 w-4 fill-current" />
              <span>Book Blood Donation</span>
            </button>

            <button
              onClick={onRequestClick}
              className="bg-black/60 hover:bg-black/80 text-white border border-white/30 font-bold px-6 py-3.5 rounded-lg text-sm backdrop-blur-sm flex items-center gap-2 transition cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              <span>Request Urgent Blood</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

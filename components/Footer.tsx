import React from 'react';

// Footer component with Gondar contacts and operational hours
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0b1120] text-gray-400 text-xs py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#b91c1c] text-white flex items-center justify-center font-black text-sm">
                GV
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                የጎንደር የደም ባንክ
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Gondar Blood Bank Institution serves the historic city of Gondar and Northern Amhara Region. Operating in direct institutional integration with University of Gondar Comprehensive Specialized Hospital.
            </p>
          </div>

          {/* Emergency & Institutional Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Emergency & Institutional Links
            </h4>
            <p className="text-xs">
              Emergency Dispatch: <strong className="text-white">994 / +251 58 114 1234</strong>
            </p>
            <p className="text-xs hover:text-white cursor-pointer transition">
              Gondar City Health Bureau
            </p>
            <p className="text-xs hover:text-white cursor-pointer transition">
              Hospital Referral Portal
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Opening Hours
            </h4>
            <p className="text-xs">
              Emergency Ward Requisitions:<br />
              <strong className="text-white">24 Hours / 7 Days a Week</strong>
            </p>
            <p className="text-xs pt-1">
              Voluntary Walk-in Centers:<br />
              <span className="text-gray-300">Mon - Sun: 8:00 AM - 6:00 PM</span>
            </p>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>&copy; 2026 Gondar Vital Life Blood Bank Service. Ministry of Health (FMoH) Accredited.</p>
          <div className="flex items-center gap-4">
            <span>EBTBS Protocols</span>
            <span>&bull;</span>
            <span>ISBT 128 Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Check } from 'lucide-react';

interface EligibilityCriteriaProps {
  onBookClick: () => void;
}

// Basic Eligibility Criteria for donors with clinical checkmark list
export default function EligibilityCriteria({ onBookClick }: EligibilityCriteriaProps) {
  const criteria = [
    'Age between 18 and 65 years old',
    'Weight minimum of 50 kg (110 lbs)',
    'Normal blood pressure & resting pulse',
    'Hemoglobin level ≥ 12.5 g/dL',
    'No active fever, flu, or infection',
    'Well-hydrated with a light meal prior',
  ];

  return (
    <section id="eligibility" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#111827] text-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-gray-800">
        {/* Left: Dark Criteria Checklist */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
          <span className="text-[10px] font-bold text-red-200 tracking-widest uppercase block">
            ARE YOU READY?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Basic Eligibility Criteria for Donors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {criteria.map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-[#b91c1c] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-200 font-medium leading-tight">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={onBookClick}
              className="bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold text-xs px-6 py-3 rounded-lg transition shadow-sm cursor-pointer"
            >
              Book Screening Appointment
            </button>
            <span className="text-xs text-gray-400">
              Questions? Our clinical triage at <strong className="text-white">994</strong>
            </span>
          </div>
        </div>

        {/* Right: Sterile procedure image */}
        <div className="lg:col-span-5 relative min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
            alt="Sterile blood draw at Gondar Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm p-3.5 rounded-lg border border-white/20">
            <div className="text-xs font-bold text-white">
              100% Sterile & Disposable
            </div>
            <div className="text-[11px] text-gray-300">
              New, single-use vacuum collection needles utilized for every single donor.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

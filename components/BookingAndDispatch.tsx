import React, { useState } from 'react';
import { PhoneCall, MapPin, CheckCircle2 } from 'lucide-react';

// Form to schedule a blood donation + Hospital emergency dispatch details
export default function BookingAndDispatch() {
  // Simple form state for beginner/intermediate developers
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState("I don't know");
  const [preferredDate, setPreferredDate] = useState('2026-10-25');
  const [location, setLocation] = useState('Gondar Specialized Hospital');
  const [isOver18, setIsOver18] = useState(true);

  // Status state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<any | null>(null);

  // Form submit handler
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    try {
      setIsSubmitting(true);
      // Send booking request to backend API
      const response = await fetch('/api/donations/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: fullName,
          phone: phone,
          bloodGroup: bloodType,
          centerId: location.toLowerCase().includes('maraki') ? 'maraki-campus' : 'uog-main',
          date: preferredDate,
          timeSlot: '09:30 AM',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setConfirmationData(data.appointment);
      }
    } catch (error) {
      console.error('Failed to book appointment', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Donation Booking Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <span className="text-xs font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
            MAKE AN APPOINTMENT
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Book Your Life-Saving Donation
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            Walk-ins are always welcomed, or schedule ahead for zero wait time.
          </p>

          {/* Success message when appointment is confirmed */}
          {confirmationData ? (
            <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-xl text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-lg text-emerald-950">
                Appointment Confirmed! (ቀጠሮዎ ተረጋግጧል)
              </h3>
              <p className="text-xs text-emerald-800">
                Booking ID: <strong>{confirmationData.id}</strong> &bull; {confirmationData.date} at {confirmationData.timeSlot}
              </p>
              <p className="text-xs text-gray-600">
                Location: {confirmationData.centerName}
              </p>
              <button
                onClick={() => setConfirmationData(null)}
                className="mt-2 text-xs font-bold text-[#b91c1c] hover:underline cursor-pointer"
              >
                Book Another Donation
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-900 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Almaz Bekele"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-900 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+251 9... / 09..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-900 block mb-1">
                    Blood Type (If Known)
                  </label>
                  <select
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="I don't know">I don't know</option>
                    {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map((type) => (
                      <option key={type} value={type}>
                        Type {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-900 block mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-900 block mb-1">
                    Location *
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
                  >
                    <option value="Gondar Specialized Hospital">Gondar Specialized Hospital</option>
                    <option value="Maraki Campus Center">Maraki Campus Center</option>
                    <option value="Poly Clinic Piazza">Poly Clinic Piazza</option>
                    <option value="Azezo Health Center">Azezo Health Center</option>
                  </select>
                </div>
              </div>

              {/* Checkbox confirmation */}
              <label className="flex items-start gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isOver18}
                  onChange={(e) => setIsOver18(e.target.checked)}
                  className="mt-0.5 accent-[#b91c1c]"
                />
                <span className="text-xs text-gray-600">
                  I confirm I am over 18 years old and in sound physical health.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !isOver18}
                className="w-full bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-sm transition cursor-pointer"
              >
                {isSubmitting ? 'Confirming Booking...' : 'Confirm Donation Booking (ቀጠሮ ይያዙ)'}
              </button>
            </form>
          )}
        </div>

        {/* Right: Hospital Requisition Protocol (Dark Card) */}
        <div className="lg:col-span-5 bg-[#111827] text-white rounded-2xl p-8 border border-gray-800 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                EMERGENCY WARD DISPATCH
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Hospital Requisition Protocol
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              Authorized regional physicians, nurses, and emergency ward heads can request immediate blood plasma or packed cell reserves 24/7.
            </p>

            {/* Hotline box */}
            <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                <PhoneCall className="h-3.5 w-3.5 text-[#b91c1c]" />
                <span>Direct Emergency Hotline:</span>
              </div>
              <div className="text-lg font-black text-white">
                994 / +251 58 114 1234
              </div>
            </div>

            {/* Location box */}
            <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                <MapPin className="h-3.5 w-3.5 text-[#b91c1c]" />
                <span>Physical Dispensary Desk:</span>
              </div>
              <div className="text-xs font-bold text-white">
                Gate 2, UoG Comprehensive Hospital, Gondar
              </div>
            </div>

            <p className="text-[11px] text-gray-400 leading-tight">
              * Cross-match sample tubes and patient clinical registry ID are required at physical pick-up for safe distribution.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="tel:994"
              className="w-full flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs py-3 rounded-lg shadow-md transition"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call 24/7 Emergency Ward Line</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

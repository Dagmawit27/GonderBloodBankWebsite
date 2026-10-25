import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Simple modal popup for submitting an emergency blood requisition
export default function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('O-');
  const [units, setUnits] = useState('2');
  const [ward, setWard] = useState('Emergency Surgical Ward');
  const [indication, setIndication] = useState('Emergency surgery transfusion protocol');
  const [phone, setPhone] = useState('+251 58 114 1234');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone) return;

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName,
          hospital: 'University of Gondar Comprehensive Specialized Hospital',
          ward,
          bloodGroup,
          unitsRequired: Number(units),
          urgency: 'critical_emergency',
          indication,
          requestingPhysician: 'Attending Duty Doctor',
          contactPhone: phone,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setSuccessMessage(`Ticket #${data.requisition.id} broadcast to central triage desk.`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background dark backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className="h-5 w-5 text-[#b91c1c]" />
          <h3 className="text-lg font-bold text-gray-900">
            Emergency Blood Requisition
          </h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Broadcast an urgent blood request directly to the Gondar Vital Life triage desk.
        </p>

        {successMessage ? (
          <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-lg text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              <span>Requisition Received!</span>
            </div>
            <p className="text-emerald-950">{successMessage}</p>
            <button
              onClick={() => {
                setSuccessMessage(null);
                onClose();
              }}
              className="w-full mt-2 bg-gray-900 text-white font-bold py-2 rounded text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-900 block mb-1">
                Patient Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Almaz Woldemariam"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full h-9 px-3 rounded border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-900 block mb-1">
                  Blood Group *
                </label>
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full h-9 px-3 rounded border border-gray-300 text-xs font-bold text-[#b91c1c] focus:outline-none"
                >
                  {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map((g) => (
                    <option key={g} value={g}>
                      Group {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-900 block mb-1">
                  Units Required *
                </label>
                <select
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full h-9 px-3 rounded border border-gray-300 text-xs font-bold text-gray-900 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((u) => (
                    <option key={u} value={String(u)}>
                      {u} Unit{u > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-900 block mb-1">
                Ward / Bed *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maternity Ward Bed 3"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
                className="w-full h-9 px-3 rounded border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-900 block mb-1">
                Clinical Diagnosis *
              </label>
              <input
                type="text"
                required
                value={indication}
                onChange={(e) => setIndication(e.target.value)}
                className="w-full h-9 px-3 rounded border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-900 block mb-1">
                Contact Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-9 px-3 rounded border border-gray-300 text-xs focus:outline-none focus:border-[#b91c1c]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b91c1c] hover:bg-[#93000b] text-white font-bold text-xs py-2.5 rounded shadow-sm transition mt-2 cursor-pointer"
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Emergency Requisition'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

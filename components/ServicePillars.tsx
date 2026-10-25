import React from 'react';
import { Shield, Droplet, Activity, Heart, FileText, Check, Hospital, ArrowRight } from 'lucide-react';

// Service Pillars section representing the EBTBS clinical framework
export default function ServicePillars() {
  const pillars = [
    {
      num: 'PILLAR 01',
      title: 'Blood Collection & Donor Care',
      desc: 'Mobilizing voluntary, non-remunerated donors through institutional debo drives, regional educational campaigns, and humane donor care protocols.',
      check: '100% Voluntary Outreach',
      icon: Droplet,
    },
    {
      num: 'PILLAR 02',
      title: 'Testing & Cold-Chain Separation',
      desc: 'Mandatory screening for transfusion-transmissible infections (TTIs) alongside automated blood component fractionation: PRBCs, FFP, and platelets.',
      check: 'Validated Cold Chain',
      icon: Activity,
    },
    {
      num: 'PILLAR 03',
      title: 'Tissue Banking & Regenerative Care',
      desc: 'Developing advanced regenerative and human tissue graft services adhering to EBTBS statutory bio-ethical guidelines and specialized surgery support.',
      check: 'Specialized Grafts',
      icon: Heart,
    },
    {
      num: 'PILLAR 04',
      title: 'QA & Transfusion Oversight',
      desc: 'Clinical hemovigilance audits, regional hospital cross-matching compliance, and continuous training for surgical and obstetric healthcare teams.',
      check: 'Clinical Hemovigilance',
      icon: FileText,
    },
  ];

  return (
    <section id="pillars" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
            EBTBS INSTITUTIONAL FRAMEWORK • የኢትዮጵያ ደም እና ሕብረ ሕዋስ አገልግሎት
          </span>
          <h2 className="text-3xl font-black text-gray-900">
            National & Regional Service Pillars
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
            Operating under Ethiopian Blood and Tissue Bank Service (EBTBS) protocols and the Ministry of Health (FMoH) to ensure equitable, quality-assured transfusion and tissue safety.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm self-start md:self-auto shrink-0">
          <Shield className="h-4 w-4 text-[#b91c1c]" />
          <span className="text-xs font-bold text-gray-900">National Standard</span>
        </div>
      </div>

      {/* The 4 Pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#b91c1c] flex items-center justify-center font-bold mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-bold text-gray-700 flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span>{item.check}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Affiliation Banner */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[#b91c1c] text-white flex items-center justify-center shrink-0">
            <Hospital className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900">
              Affiliation with Ethiopian Blood and Tissue Bank Service (EBTBS)
            </h4>
            <p className="text-xs text-gray-500">
              Governed under Federal Ministry of Health regulations to supply tested, safe blood and tissues throughout Gondar & Amhara Region.
            </p>
          </div>
        </div>
        <a
          href="#why-donate"
          className="text-xs font-bold text-[#b91c1c] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Learn About EBTBS</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

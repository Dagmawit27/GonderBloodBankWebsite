import React from 'react';
import { Route } from '@/lib/router';
import { CheckCircle2, Calendar, Droplets, Coffee, ArrowRight } from 'lucide-react';

interface DonationProcessStepsProps {
  onNavigate: (route: Route) => void;
  lang: 'en' | 'am';
}

export const DonationProcessSteps: React.FC<DonationProcessStepsProps> = ({
  onNavigate,
  lang,
}) => {
  const steps = [
    {
      num: '01',
      title: lang === 'en' ? 'Eligibility Pre-Check' : 'የብቃት ማረጋገጫ',
      description:
        lang === 'en'
          ? 'Fast 2-minute screening for age, weight, and general health vitals.'
          : 'በ2 ደቂቃ ውስጥ ዕድሜ፣ ክብደትና አጠቃላይ ጤንነትዎን ያረጋግጡ።',
      icon: CheckCircle2,
      action: () => onNavigate({ name: 'eligibility' }),
      actionLabel: lang === 'en' ? 'Check Eligibility' : 'ብቁ መሆንዎን ያረጋግጡ',
      highlight: false,
    },
    {
      num: '02',
      title: lang === 'en' ? 'Appointment Booking' : 'ቀጠሮ መያዝ',
      description:
        lang === 'en'
          ? 'Select a convenient time slot at University Hospital, Maraki, or Poly Clinic.'
          : 'በዩኒቨርሲቲ ሆስፒታል፣ ማራኪ ወይም ፖሊ ክሊኒክ ለእርስዎ የሚመች ሰዓት ይምረጡ።',
      icon: Calendar,
      action: () => onNavigate({ name: 'schedule' }),
      actionLabel: lang === 'en' ? 'Select Slot' : 'ሰዓት ይምረጡ',
      highlight: true,
    },
    {
      num: '03',
      title: lang === 'en' ? '15-Min Safe Donation' : '15 ደቂቃ ልገሳ',
      description:
        lang === 'en'
          ? 'Sterile clinical draw supervised by licensed Gondar phlebotomists.'
          : 'በሰለጠኑ የሕክምና ባለሙያዎች የሚከናወን ደህንነቱ የተጠበቀ ልገሳ።',
      icon: Droplets,
      action: () => onNavigate({ name: 'centers' }),
      actionLabel: lang === 'en' ? 'View Stations' : 'ጣቢያዎችን ይመልከቱ',
      highlight: false,
    },
    {
      num: '04',
      title: lang === 'en' ? 'Refreshment & Debo' : 'እረፍትና ማህበራዊ አጋርነት',
      description:
        lang === 'en'
          ? 'Enjoy fresh Ethiopian macchiato & snacks while your unit directly saves up to 3 lives.'
          : 'ትኩስ ማኪያቶ እየተዝናኑ አንዲት ዩኒት ደምዎ እስከ 3 ሰዎችን ያድናል።',
      icon: Coffee,
      action: () => onNavigate({ name: 'requests' }),
      actionLabel: lang === 'en' ? 'See Patient Needs' : 'የታካሚዎችን ፍላጎት ይመልከቱ',
      highlight: false,
    },
  ];

  return (
    <section className="my-10 bg-white rounded-xl border border-[#e5e7eb] p-6 sm:p-8 shadow-[0px_2px_8px_rgba(17,24,39,0.04)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#f3f4f6] gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
            {lang === 'en' ? 'DONATION PROCESS & PATHWAY' : 'የልገሳ ሂደትና ደረጃዎች'}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111827]">
            {lang === 'en' ? 'Simple, Dignified & Life-Saving' : 'ቀላል፣ የተከበረና ሕይወት አድን ጉዞ'}
          </h2>
          <p className="text-sm text-[#575e70] mt-1 max-w-2xl">
            {lang === 'en'
              ? 'Every step is designed for donor safety, clinical sterility, and maximum patient impact across Gondar region.'
              : 'እያንዳንዱ ሂደት ለእርስዎ ደህንነት እና በጎንደር አካባቢ ላሉ ታካሚዎች ፈጣን ህይወት ማዳን የተዘጋጀ ነው።'}
          </p>
        </div>
        <button
          onClick={() => onNavigate({ name: 'schedule' })}
          className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#b91c1c] hover:text-[#93000b] hover:underline cursor-pointer"
        >
          <span>{lang === 'en' ? 'Book Direct Appointment' : 'ቀጥታ ቀጠሮ ይያዙ'}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col h-full bg-[#f8f9ff] rounded-lg p-5 border border-[#eff4ff] hover:border-[#d9e3f6] transition group"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Circular badge (36px × 36px) filled with #111827 or #B91C1C with bold white numbers */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-heading text-sm font-extrabold text-white shadow-xs ${
                  step.highlight ? 'bg-[#b91c1c]' : 'bg-[#111827]'
                }`}
              >
                {step.num}
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#575e70] border border-[#e5e7eb] group-hover:text-[#b91c1c] transition">
                <step.icon className="h-4 w-4" />
              </div>
            </div>

            <h3 className="font-heading text-base font-bold text-[#111827] mb-1.5">
              {step.title}
            </h3>

            <p className="text-xs text-[#575e70] leading-relaxed flex-1 mb-4">
              {step.description}
            </p>

            <button
              onClick={step.action}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#111827] group-hover:text-[#b91c1c] transition pt-2 border-t border-slate-200/60 cursor-pointer"
            >
              <span>{step.actionLabel}</span>
              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

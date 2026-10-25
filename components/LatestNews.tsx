import React from 'react';
import { ArrowRight } from 'lucide-react';

// Latest News from Gondar Blood Bank & EBTBS Regional Hub
export default function LatestNews() {
  const articles = [
    {
      category: 'CAMPAIGN MILESTONE',
      date: 'May 16, 2026',
      title: 'University of Gondar Annual Student Blood Drive Exceeds Target with 850+ Units Collected',
      desc: 'Maraki and Atse Tewodros campuses united for an intensive 3-day donation marathon in collaboration with regional surgical trauma teams.',
      tag: 'University Outreach',
      imageUrl: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'EBTBS PARTNERSHIP',
      date: 'May 14, 2026',
      title: 'New Cold-Chain Transport Logistics Deployed for Remote Health Centers in Central Gondar',
      desc: 'Strengthening rapid plasma and packed red cell delivery to rural obstetric and emergency triage facilities across Northern Amhara.',
      tag: 'Bio-Cold Transit',
      imageUrl: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'DONOR SPOTLIGHT',
      date: 'April 29, 2026',
      title: 'Celebrating Ato Bekele Tadesse: 45th Voluntary Donation Honored at Fasil Ghebbi Ceremony',
      desc: 'A inspiring testament to civic responsibility and community solidarity, encouraging the next generation of regular youth donors.',
      tag: 'Veteran Donor',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-[#b91c1c] tracking-widest uppercase block mb-1">
              COMMUNITY & CLINICAL UPDATES • አዳዲስ ዜናዎች
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Latest News from Gondar Blood Bank & EBTBS Regional Hub
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
              Stay informed with recent blood donation campaigns, University of Gondar hospital partnerships, and life-saving donor stories.
            </p>
          </div>

          <a
            href="#news"
            className="text-xs font-bold text-gray-900 hover:text-[#b91c1c] flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All News Archive</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 3 News article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f9ff] rounded-xl border border-blue-50 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                    <span className="text-[#b91c1c]">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#b91c1c] transition leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">{item.tag}</span>
                <span className="font-bold text-[#b91c1c] group-hover:translate-x-0.5 transition">
                  Read More &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

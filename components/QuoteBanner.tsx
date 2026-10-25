import React from 'react';

// Community Quote banner with Gondar Solidarity theme
export default function QuoteBanner() {
  return (
    <section className="bg-[#111827] text-white py-12 px-4 text-center border-y border-gray-800">
      <div className="max-w-4xl mx-auto space-y-2">
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold italic tracking-tight text-gray-100">
          &ldquo;If you donate money, you give food; But if you donate blood, you give life!&rdquo;
        </blockquote>
        <p className="text-xs font-bold tracking-widest text-red-200 uppercase">
          የአማራ ደም ባንክ እና ሕይወት አድን ማኅበር &bull; GONDAR COMMUNITY BLOOD COALITION
        </p>
      </div>
    </section>
  );
}

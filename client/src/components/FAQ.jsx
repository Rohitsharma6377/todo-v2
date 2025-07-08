import React, { useState } from 'react';

export default function FAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-4 border-b border-indigo-200 dark:border-gray-700">
          <button
            className="w-full flex justify-between items-center py-4 px-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-expanded={openIdx === idx}
            aria-controls={`faq-panel-${idx}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-lg">{faq.q}</span>
            <span className="ml-4 text-indigo-500 dark:text-indigo-200 text-2xl transition-transform duration-300" style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
          </button>
          <div
            id={`faq-panel-${idx}`}
            className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
            aria-hidden={openIdx !== idx}
          >
            <p className="text-gray-700 dark:text-gray-200 px-2 pb-4">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 
'use client'

import { useState } from 'react'

const faqs = [
  { q: 'How quickly will I see results?', a: 'Most clients see measurable engagement growth within 30 days. Significant follower growth and revenue impact typically show within 60–90 days depending on your starting point and goals.' },
  { q: 'Do you work with all business types?', a: 'Yes — from eCommerce to SaaS, beauty to fitness, B2B to B2C. We tailor every strategy to your industry, audience, and objectives.' },
  { q: 'What platforms do you manage?', a: 'We cover Instagram, TikTok, LinkedIn, X (Twitter), Facebook, YouTube, Pinterest, and Snapchat. We recommend platforms based on where your audience actually is.' },
  { q: 'Are there any long-term contracts?', a: 'No lock-ins. We work month-to-month because we believe results should keep you with us — not a contract.' },
  { q: 'Who creates the content?', a: 'Our in-house creative team — designers, videographers, and copywriters — produces everything. All content is reviewed and approved by you before publishing.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass rounded-2xl overflow-hidden transition-all duration-200 ${open === i ? 'border-violet-500/30' : ''}`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <div className={`shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${open === i ? 'border-violet-500/40 bg-violet-500/10 rotate-45' : ''}`}>
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="divider mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

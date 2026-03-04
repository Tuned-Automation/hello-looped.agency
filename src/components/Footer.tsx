export function Footer() {
  return (
    <footer id="contact" className="relative py-20 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* CTA Block */}
        <div className="glass rounded-3xl p-10 md:p-16 text-center mb-16 border border-violet-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/5" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to go <span className="gradient-text">Looped?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Book a free 30-minute strategy call. No pitch, no pressure — just a clear plan for your growth.
            </p>
            <a href="mailto:hello@looped.agency"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300">
              Book a Free Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" opacity="0.7"/>
                <circle cx="8" cy="8" r="2" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-white">Looped<span className="text-violet-400">.</span></span>
          </div>

          <div className="flex gap-6">
            {['About', 'Services', 'Pricing', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-500 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-600">© 2025 Looped Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

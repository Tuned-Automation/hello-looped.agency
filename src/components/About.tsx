export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Built by marketers,<br/>
              <span className="gradient-text">for growth-obsessed brands</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Looped was born from frustration with agencies that promised the world and delivered generic content.
              We combine deep platform expertise with data science to create social strategies that actually move the needle.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Since 2020, we&apos;ve helped over 500 brands — from scrappy startups to global enterprises — build authentic audiences that convert.
            </p>
            <div className="divider mb-10" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { v: '5+', l: 'Years Experience' },
                { v: '50+', l: 'Team Members' },
                { v: '$20M+', l: 'Revenue Generated' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold gradient-text-accent mb-1">{s.v}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card stack */}
          <div className="relative h-96 lg:h-auto">
            <div className="relative space-y-4">
              <div className="glass rounded-2xl p-6 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">L</div>
                  <div>
                    <div className="text-sm font-semibold text-white">Campaign Performance</div>
                    <div className="text-xs text-gray-500">This month</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Reach', value: '+284%', w: 'w-4/5' },
                    { label: 'Engagement', value: '+193%', w: 'w-3/5' },
                    { label: 'Conversions', value: '+312%', w: 'w-full' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-24 shrink-0">{row.label}</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`${row.w} h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full`} />
                      </div>
                      <span className="text-xs font-semibold text-violet-400">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-5 border border-violet-500/10 ml-8">
                <p className="text-sm text-gray-300 italic mb-3">&ldquo;Looped tripled our Instagram revenue in 60 days. Genuinely incredible.&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-600/30 border border-violet-500/30" />
                  <span className="text-xs text-gray-500">Sarah M., Founder @ Bloom Co.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

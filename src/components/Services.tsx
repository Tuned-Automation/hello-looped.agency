const services = [
  {
    num: '01',
    title: 'Social Media Management',
    desc: 'End-to-end management of your social channels — content creation, scheduling, community management, and monthly reporting.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'X'],
  },
  {
    num: '02',
    title: 'Paid Social Advertising',
    desc: 'Performance campaigns that maximise ROAS. From creative to targeting to optimisation — we handle it all.',
    tags: ['Meta Ads', 'TikTok Ads', 'LinkedIn Ads'],
  },
  {
    num: '03',
    title: 'Influencer Marketing',
    desc: 'Strategic partnerships with creators who authentically align with your brand to drive awareness and trust at scale.',
    tags: ['Micro', 'Macro', 'Celebrity'],
  },
  {
    num: '04',
    title: 'Content Production',
    desc: 'Studio-quality photo, video, and motion graphics that stop the scroll and communicate your brand story instantly.',
    tags: ['Reels', 'Short-form', 'Brand Video'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Services that<br /><span className="gradient-text">drive real results</span>
          </h2>
        </div>

        <div className="space-y-px">
          {services.map((s, i) => (
            <div key={i} className="group flex flex-col md:flex-row items-start gap-6 p-8 border-t border-white/5 hover:bg-white/[0.02] transition-colors cursor-default">
              <span className="text-sm font-mono text-gray-700 shrink-0 group-hover:text-violet-500 transition-colors">{s.num}</span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-2xl">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 self-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:border-violet-500/50 group-hover:text-violet-400 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  )
}

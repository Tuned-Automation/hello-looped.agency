const features = [
  { icon: '⚡', title: 'AI-Powered Strategy', desc: 'Machine learning algorithms analyse your audience behaviour to craft hyper-personalised content strategies that convert.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Live dashboards track every metric that matters — reach, engagement, conversions — so we optimise continuously.' },
  { icon: '🎯', title: 'Precision Targeting', desc: 'Laser-focused audience segmentation ensures your content reaches the right people at exactly the right time.' },
  { icon: '🚀', title: 'Rapid Growth Engine', desc: 'Our proven growth framework helps clients achieve 3x follower growth within the first 90 days.' },
  { icon: '🎨', title: 'Premium Creative', desc: 'Award-winning designers and videographers craft scroll-stopping content that embodies your brand identity.' },
  { icon: '🔄', title: 'Full Automation', desc: 'Scheduling, posting, and reporting — all automated. You focus on your business; we handle the rest.' },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">Why Looped</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything you need to<br />
            <span className="gradient-text">dominate social media</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A full-stack social media solution built for brands that want real results, not just vanity metrics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-7 glass-hover group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl mb-5 group-hover:border-violet-500/40 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

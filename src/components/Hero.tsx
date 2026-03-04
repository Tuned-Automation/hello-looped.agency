export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center aurora-bg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10 fade-up">
          <span className="w-2 h-2 bg-violet-400 rounded-full pulse-ring" />
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Trusted by 500+ brands worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight fade-up">
          <span className="text-white">Turn Followers</span>
          <br />
          <span className="gradient-text">into Customers</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed fade-up">
          We transform your brand&apos;s social presence into a revenue-generating machine.
          Data-driven strategy. Creative execution. Measurable growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 fade-up">
          <a href="#contact"
            className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300">
            Start Your Journey
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="#services"
            className="flex items-center gap-3 text-gray-300 hover:text-white font-semibold text-base transition-colors group">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:border-violet-500/40 transition-colors">
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            See Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto fade-up">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '2M+', label: 'Followers Gained' },
            { value: '95%', label: 'Client Retention' },
            { value: '3x', label: 'ROI Average' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center glass-hover">
              <div className="text-3xl font-bold gradient-text-accent mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  )
}

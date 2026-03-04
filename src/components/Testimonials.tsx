const testimonials = [
  { name: 'Sarah M.', company: 'Bloom Co.', text: 'Looped tripled our Instagram revenue within 60 days. Their team is sharp, responsive, and genuinely invested in our growth.', stars: 5 },
  { name: 'David R.', company: 'NexaTech', text: 'We were sceptical of another agency promise. Looped proved us wrong — our LinkedIn pipeline exploded in 90 days.', stars: 5 },
  { name: 'Priya K.', company: 'Aura Beauty', text: 'The content quality is unmatched. Our brand looks incredible and our engagement rate went from 1% to 8.4%.', stars: 5 },
  { name: 'Marcus W.', company: 'Forge Fitness', text: 'Best agency investment we have made. ROI is clear, the team is brilliant, and results speak for themselves.', stars: 5 },
  { name: 'Lena F.', company: 'Curio Studio', text: 'Looped understands creative brands. They elevated our aesthetic while driving real, measurable follower growth.', stars: 5 },
  { name: 'Tom H.', company: 'StackFlow', text: 'Switching to Looped was the best decision. Our SaaS went from zero social presence to 15k engaged followers.', stars: 5 },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">Social Proof</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Don&apos;t take our word for it<br /><span className="gradient-text">take theirs</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6 break-inside-avoid glass-hover">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: 'Starter',
    price: '1,500',
    desc: 'Perfect for emerging brands ready to build a real social presence.',
    features: ['2 social platforms', 'Monthly strategy call', '12 posts/month', 'Basic analytics report', 'Community management'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '3,500',
    desc: 'For scaling brands that need a full-service social team in their corner.',
    features: ['4 social platforms', 'Weekly strategy calls', '30 posts/month', 'Advanced analytics', 'Paid ad management', 'Influencer outreach'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Fully tailored solutions for large brands with complex needs.',
    features: ['Unlimited platforms', 'Dedicated account team', 'Custom content volume', 'Real-time reporting dashboard', 'Global campaign management', 'Priority support'],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple, transparent<br /><span className="gradient-text">pricing</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">No hidden fees. No lock-in contracts. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col glass-hover ${
                plan.popular
                  ? 'bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border border-violet-500/40 shadow-2xl shadow-violet-500/20'
                  : 'glass'
              }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <span className="text-4xl font-bold text-white">Custom</span>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-gray-400 text-lg mb-1">$</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm mb-1">/mo</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105'
                    : 'border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-white'
                }`}>
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

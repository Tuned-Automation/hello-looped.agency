export function Pricing() {
  const plans = [
    {
      name: "Individual",
      price: 99,
      period: "month",
      description: "Perfect for solo entrepreneurs and small businesses just getting started with social media.",
      features: [
        "3 Social Media Platforms",
        "12 Posts per Month",
        "Basic Analytics Report",
        "Community Management",
        "Email Support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: 199,
      period: "month",
      description: "Ideal for growing businesses that need comprehensive social media management and strategy.",
      features: [
        "5 Social Media Platforms",
        "24 Posts per Month",
        "Advanced Analytics & Insights",
        "Community Management",
        "Content Strategy Planning",
        "Paid Advertising Management",
        "Priority Support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: 399,
      period: "month",
      description: "Complete social media solution for large businesses and agencies with complex needs.",
      features: [
        "Unlimited Social Media Platforms",
        "60+ Posts per Month",
        "Comprehensive Analytics Suite",
        "Dedicated Account Manager",
        "Custom Content Strategy",
        "Multi-Channel Ad Campaigns",
        "24/7 Priority Support",
        "Monthly Strategy Calls"
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Pick the plan that fits your business needs and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-gray-50 border border-gray-200 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`${plan.highlighted ? 'text-white/90' : 'text-gray-600'} leading-relaxed`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-white/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white text-purple-600 hover:bg-gray-50 hover:shadow-lg'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transform hover:scale-105'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique requirements.
          </p>
          <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Contact us for custom pricing →
          </button>
        </div>
      </div>
    </section>
  )
} 
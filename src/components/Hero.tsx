export function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-700">Trusted by 500+ brands</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent leading-tight">
            Turn Likes, Comments and Followers into Customers
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your brand&apos;sdigital presence with our comprehensive social media marketing strategies. 
            Drive engagement, build communities, and achieve measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="flex items-center text-gray-700 font-semibold text-lg hover:text-purple-600 transition-colors">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center mr-3 hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">2M+</div>
              <div className="text-sm text-gray-600">Followers Gained</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">3x</div>
              <div className="text-sm text-gray-600">ROI Average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
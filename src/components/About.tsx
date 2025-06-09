export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              About Looped
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We&apos;spassionate about helping brands tell their story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Looped has grown from a small startup to a leading social media marketing agency. 
              We believe every brand has a unique story worth telling, and we&apos;shere to help you tell it in the most compelling way possible.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of creative strategists, content creators, and data analysts work together to build social media campaigns 
              that not only look great but deliver measurable business results. We&apos;shelped over 500 brands across various industries 
              grow their online presence and achieve their marketing goals.
            </p>
            
            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Authentic storytelling that resonates with your audience</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Data-driven strategies for maximum ROI</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Transparent communication and regular reporting</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg font-medium opacity-90">Our amazing team</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
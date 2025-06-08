'use client'

export function Marquee() {
  const brands = [
    'Netflix', 'Spotify', 'Adobe', 'Microsoft', 'Google', 'Apple', 'Amazon', 'Meta'
  ]

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee space-x-16">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
} 
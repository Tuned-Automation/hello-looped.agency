const brands = ['Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'X (Twitter)', 'Facebook', 'Pinterest', 'Snapchat']

export function Marquee() {
  const items = [...brands, ...brands]
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden bg-white/[0.02]">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((brand, i) => (
            <div key={i} className="flex items-center mx-10 shrink-0">
              <span className="text-gray-600 font-semibold text-sm tracking-widest uppercase">{brand}</span>
              <span className="ml-10 w-1 h-1 rounded-full bg-violet-700/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const team = [
  { name: 'Alex Chen', role: 'CEO & Co-Founder', initials: 'AC', gradient: 'from-violet-500 to-indigo-600' },
  { name: 'Maya Patel', role: 'Head of Strategy', initials: 'MP', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Jordan Kim', role: 'Creative Director', initials: 'JK', gradient: 'from-indigo-500 to-blue-600' },
  { name: 'Sam Torres', role: 'Head of Growth', initials: 'ST', gradient: 'from-fuchsia-500 to-violet-600' },
]

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">The Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Meet the people<br /><span className="gradient-text">behind your growth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <div key={member.name} className="glass rounded-2xl p-7 text-center glass-hover group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {member.initials}
              </div>
              <h3 className="text-white font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

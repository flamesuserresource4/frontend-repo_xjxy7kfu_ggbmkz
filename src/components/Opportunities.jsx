function Opportunities() {
  const cols = [
    {
      title: 'Quick Wins',
      subtitle: 'Immediate ROI (days/weeks)',
      items: ['Automate follow-up emails', 'Automate data entry'],
      color: 'from-emerald-500/10 to-emerald-500/5',
    },
    {
      title: 'Big Swings',
      subtitle: 'Transformative ROI (months)',
      items: ['Automate end-to-end sales process'],
      color: 'from-purple-500/10 to-purple-500/5',
    },
    {
      title: 'Small Improvements',
      subtitle: 'Easy optimizations',
      items: ['AI for meeting notes'],
      color: 'from-amber-500/10 to-amber-500/5',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="opportunities">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Opportunity Types</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cols.map((c) => (
            <div key={c.title} className={`rounded-2xl border border-white/60 bg-gradient-to-br ${c.color} p-6 shadow-sm backdrop-blur`}>
              <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
              <p className="text-gray-700">{c.subtitle}</p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-800">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Opportunities

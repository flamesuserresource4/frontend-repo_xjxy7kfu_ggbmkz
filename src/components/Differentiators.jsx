function Differentiators() {
  const items = [
    {
      title: 'Live, One-to-One',
      desc: 'The agent interviews YOU in real time; results are personal, actionable, and confidential.',
      color: 'from-purple-500/10 to-purple-500/5',
    },
    {
      title: 'Effortless',
      desc: 'No booking, no setup, no complex forms.',
      color: 'from-blue-500/10 to-blue-500/5',
    },
    {
      title: 'Data Privacy',
      desc: 'All transcripts and results are securely stored and encrypted.',
      color: 'from-emerald-500/10 to-emerald-500/5',
    },
    {
      title: 'Instant Report',
      desc: 'Your roadmap, your numbers—shown immediately after.',
      color: 'from-amber-500/10 to-amber-500/5',
    },
    {
      title: 'AI-Powered Clarity',
      desc: 'No consultant bias. Unbiased, actionable diagnosis.',
      color: 'from-pink-500/10 to-pink-500/5',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="why">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Makes This Audit Different?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className={`rounded-2xl border border-white/60 bg-gradient-to-br ${it.color} p-6 shadow-sm backdrop-blur`}> 
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.desc}</p>
            </div>
          ))}
      </div>
      </div>
    </section>
  )
}

export default Differentiators

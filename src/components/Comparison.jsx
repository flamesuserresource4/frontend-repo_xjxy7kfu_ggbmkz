function Comparison() {
  const rows = [
    ['Response', 'Weeks to schedule', 'Instant access'],
    ['Cost', '$5,000-$50,000+', 'First audit free'],
    ['Coverage', 'Requires team/meetings', 'Just you, private'],
    ['Output', 'PDF, slides, jargon', 'Interactive, action-focused'],
    ['Friction', 'Sales calls, negotiation', 'Zero friction, zero pressure'],
    ['Results', 'Unclear ROI, slow', 'Clear roadmap in minutes'],
  ]

  return (
    <section className="py-20 bg-white" id="compare">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Traditional Consulting vs AI Audit Agent</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50 text-sm font-semibold text-gray-700">
            <div className="p-4">Traditional Consulting</div>
            <div className="p-4 text-center">Response</div>
            <div className="p-4 text-right">AI Audit Agent</div>
          </div>
          <div className="divide-y divide-gray-200">
            {rows.map(([label, left, right]) => (
              <div key={label} className="grid grid-cols-3 text-gray-800">
                <div className="p-4 font-medium">{label}</div>
                <div className="p-4 text-center text-gray-600">{left}</div>
                <div className="p-4 text-right font-semibold text-gray-900">{right}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison

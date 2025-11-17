function Testimonials() {
  const quotes = [
    'I thought we had an AI strategy; turns out, we only had a wishlist. This tool gave me a roadmap—no fluff, real change.',
    'In 15 minutes, I understood what was really holding us back. Gamechanger.',
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="testimonials">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">More Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-800 italic">“{q}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

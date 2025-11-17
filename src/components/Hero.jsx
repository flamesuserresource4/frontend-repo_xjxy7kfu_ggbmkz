import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-purple-50 to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow">
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          Live, real-time AI Audit Agent
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
          Unlock Your AI Opportunity—In Real Time
        </h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-700">
          No more guessing. No wasted spend. Meet your personal AI Audit Agent. Have a real-time conversation. Get actionable insights and a full strategic roadmap—in minutes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#start" className="inline-flex items-center justify-center rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-base sm:text-lg font-semibold shadow-lg shadow-purple-600/20 transition-colors">
            Try Your Free AI Audit Now
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left w-full max-w-4xl">
          <li className="rounded-xl bg-white/80 backdrop-blur p-4 shadow border border-white">
            <p className="text-sm font-semibold text-gray-900">Instant</p>
            <p className="text-sm text-gray-600">Get your audit now. No bookings or waiting.</p>
          </li>
          <li className="rounded-xl bg-white/80 backdrop-blur p-4 shadow border border-white">
            <p className="text-sm font-semibold text-gray-900">Confidential</p>
            <p className="text-sm text-gray-600">Private interview, just you and your agent.</p>
          </li>
          <li className="rounded-xl bg-white/80 backdrop-blur p-4 shadow border border-white">
            <p className="text-sm font-semibold text-gray-900">Actionable</p>
            <p className="text-sm text-gray-600">Receive your personalized report within minutes.</p>
          </li>
        </ul>

        <figure className="mt-10 max-w-3xl text-left bg-white/80 backdrop-blur rounded-xl p-6 shadow border border-white">
          <blockquote className="text-gray-800 italic">
            “Within minutes I discovered exactly what was draining profit from our business. The clarity was instant—no meetings, just results.”
          </blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">– Alex T., Retail COO</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero

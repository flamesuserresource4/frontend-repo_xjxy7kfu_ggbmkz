import { LineChart, Zap, Smile, Gauge } from 'lucide-react'

function Stories() {
  return (
    <section className="py-20 bg-white" id="stories">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Transformation Stories</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-800 italic">"Before, our best people wasted hours doing manual research. With the AI Audit Agent, those bottlenecks were exposed in 10 minutes. We cut the time spent by 90% and unlocked six figures in annual profit."</p>
            <p className="mt-3 text-sm text-gray-600">– Head of Sales, B2B SaaS</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-800 italic">"As a founder, I didn’t realize the hidden cost of daily operations. This wasn’t another spreadsheet; it was a live conversation that spotlighted exactly what was draining morale and money. One quick-win, and we became profitable within months."</p>
            <p className="mt-3 text-sm text-gray-600">– CEO, Boutique Law Firm</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-800 italic">"I got the truth about our business in minutes. Not theory, not hype—concrete ROI. We stopped guessing and started scaling."</p>
            <p className="mt-3 text-sm text-gray-600">– Managing Partner, Retail Group</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-purple-50 text-purple-700 p-3">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-semibold">Time saved</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-green-50 text-green-700 p-3">
            <LineChart className="h-5 w-5" />
            <span className="text-sm font-semibold">ROI</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-blue-50 text-blue-700 p-3">
            <Smile className="h-5 w-5" />
            <span className="text-sm font-semibold">Team motivation</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-yellow-50 text-yellow-700 p-3">
            <Gauge className="h-5 w-5" />
            <span className="text-sm font-semibold">Stress reduction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories

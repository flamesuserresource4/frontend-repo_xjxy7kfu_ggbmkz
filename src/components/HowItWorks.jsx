import { Clock, MessageSquare, FileText, Play } from 'lucide-react'

function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="how">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Your 15-Minute AI Audit (Live, Not Scheduled)</h2>
          <a href="#start" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 font-semibold shadow shadow-purple-600/20">Start Audit Now</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-3 left-6 bg-purple-600 text-white rounded-full h-6 w-6 text-xs flex items-center justify-center">1</div>
            <Play className="h-6 w-6 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Start Your Audit</h3>
            <p className="mt-2 text-gray-600">Launch instantly, no need to book or schedule. Interview begins immediately.</p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-3 left-6 bg-purple-600 text-white rounded-full h-6 w-6 text-xs flex items-center justify-center">2</div>
            <MessageSquare className="h-6 w-6 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Talk to Your AI Agent</h3>
            <p className="mt-2 text-gray-600">Rapid-fire, targeted questions about your workday and pain points. Adaptive follow-ups, focused on YOU—not your whole team.</p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-3 left-6 bg-purple-600 text-white rounded-full h-6 w-6 text-xs flex items-center justify-center">3</div>
            <FileText className="h-6 w-6 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Get Instant Analysis</h3>
            <p className="mt-2 text-gray-600">Receive a personalized audit and strategic report. Your transformation starts now—not next week.</p>
          </div>
        </div>

        <a href="#start" className="mt-10 inline-flex sm:hidden w-full items-center justify-center rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold shadow-lg shadow-purple-600/20">Start Audit Now</a>
      </div>

      <a href="#start" className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-base font-semibold shadow-xl shadow-purple-600/30">
        <Clock className="h-5 w-5" /> Start Audit Now
      </a>
    </section>
  )
}

export default HowItWorks

import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Stories from './components/Stories'
import Differentiators from './components/Differentiators'
import Comparison from './components/Comparison'
import Opportunities from './components/Opportunities'
import Risk from './components/Risk'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-white/70">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl">AI Audit Agent</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#problem" className="hover:text-gray-900">Problem</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#stories" className="hover:text-gray-900">Stories</a>
            <a href="#why" className="hover:text-gray-900">Why us</a>
            <a href="#compare" className="hover:text-gray-900">Compare</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="#final" className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700 shadow-sm">Start free audit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Stories />
        <Differentiators />
        <Comparison />
        <Opportunities />
        <Risk />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="py-10 border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AI Audit Agent. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'How does the audit work?',
      a: 'Real-time chat with an AI agent; instant report when finished.',
    },
    {
      q: 'Is my data secure?',
      a: 'Transcripts are end-to-end encrypted; only you have access.',
    },
    {
      q: 'Do I need to involve my team?',
      a: 'No, you get personal clarity first—it’s your strategy.',
    },
    {
      q: 'What does it cost?',
      a: 'Your first audit is free, with no obligation.',
    },
    {
      q: 'How accurate is it?',
      a: 'Our AI agent uses proven frameworks and best practices—always tailored to your answers.',
    },
    {
      q: 'What happens next?',
      a: 'Your actionable report unlocks your ROI roadmap. You choose if/when to act.',
    },
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">FAQ</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="p-4 sm:p-6">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                  <span className="ml-4 text-purple-600">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="mt-3 text-gray-700">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ

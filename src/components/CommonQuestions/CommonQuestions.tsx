import { useState } from 'react'
import './CommonQuestions.css'

const faqItems = [
  {
    question: 'Do you create bespoke journeys, or use set itineraries?',
    answer:
      'Every journey is shaped around the traveller, not a template. We begin with conversation, then curate a small number of possibilities that feel genuinely right for you.',
  },
  {
    question: 'How far in advance should we begin planning?',
    answer:
      'Most travellers begin three to six months ahead, though we can move more quickly when needed. The earlier we start, the more quietly we can arrange the details.',
  },
  {
    question: 'What distinguishes your curation from a travel agent?',
    answer:
      'We are not selling inventory. We draw on long-standing relationships with people and places, and shape journeys with rhythm, restraint, and attention to what cannot be catalogued.',
  },
  {
    question: 'Is this suitable for solo travellers?',
    answer:
      'Yes. Many of our travellers arrive alone, seeking stillness, curiosity, or renewal. We design for the pace and privacy that solo travel often requires.',
  },
  {
    question: 'What is the best time of year to visit?',
    answer:
      'Sri Lanka shifts with season and region. We will help you understand what each part of the island offers at different times of year, based on what you are hoping to find.',
  },
] as const

export function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="common-questions">
      <div className="faq-grid">
        <div className="faq-intro">
          <span className="faq-eyebrow">Common Questions</span>
          <h2 className="faq-headline">The Questions Worth Asking</h2>
          <p className="faq-description">
            Our travellers are curious and careful planners. We welcome every question, including
            the ones that feel too particular to ask.
          </p>
          <a href="#" className="faq-cta">
            Ask Us Directly
          </a>
        </div>

        <div>
          <ul className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <li key={item.question}>
                  <button
                    type="button"
                    className="faq-item"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

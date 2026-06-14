import './WhySriLanka.css'

const moments = [
  {
    title: 'Morning, the hill country',
    body: "By seven, the mist hasn't lifted from the valley. Tea pickers move through it as if they're not quite there yet either. The air is cool enough that the first cup of the day actually matters.",
  },
  {
    title: 'Midday, the ancient interior',
    body: 'By eleven, the hills feel impossibly far away. The landscape stretches beneath a brilliant sky, shaped by hands that understood this land centuries before us. You stand beside reservoirs, temples, and stones that have quietly endured the passing of generations. For a moment, your own timeline feels wonderfully small.',
  },
  {
    title: 'Evening, the coast',
    body: 'By six, the light turns gold and the ocean begins collecting the last colours of the day. Fishing boats drift toward shore as conversations stretch a little longer and the air carries the scent of salt and evening meals. The hills you left this morning already feel like another chapter entirely. Yet somehow, it still feels like the same journey.',
  },
] as const

function IslandPin() {
  return (
    <svg className="island-pin" viewBox="0 0 72 96" fill="none" aria-hidden="true">
      <path
        d="M36 0C16.118 0 0 16.118 0 36c0 27 36 60 36 60s36-33 36-60C72 16.118 55.882 0 36 0Z"
        fill="#000"
      />
    </svg>
  )
}

export function WhySriLanka() {
  return (
    <section className="why-sri-lanka">
      <div className="island-grid">
        <div className="island-left">
          <span className="island-eyebrow">The Island Itself</span>
          <h2 className="island-headline">
            The Island Changes
            <br />
            With You
          </h2>
          <div className="island-visual">
            <IslandPin />
            <p className="island-visual-caption">Morning, the hill country</p>
          </div>
        </div>

        <div className="island-right">
          <p className="island-intro">
            Drive a few hours in any direction, and the island becomes somewhere else. Not a different
            attraction. A different place, a different climate, a different pace, almost a different
            country.
          </p>

          {moments.map((moment) => (
            <article key={moment.title} className="island-moment">
              <h3 className="island-moment-title">{moment.title}</h3>
              <p className="island-moment-body">{moment.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

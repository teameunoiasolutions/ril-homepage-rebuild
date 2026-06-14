import type { ReactNode } from 'react'
import './TravellerDiscovery.css'

interface PersonaCardProps {
  imageSrc: string
  imageAlt: string
  name: string
  description: ReactNode
  quote: string
}

function MostRequestedBadge() {
  return (
    <span className="most-requested-badge">
      <span className="badge-indicator"></span>
      Most Requested
    </span>
  )
}

function PersonaCard({ imageSrc, imageAlt, name, description, quote }: PersonaCardProps) {
  return (
    <article className="persona-card">
      <div className="card-photo-wrapper">
        <img className="card-photo" src={imageSrc} alt={imageAlt} />
        <MostRequestedBadge />
      </div>
      <div className="card-body">
        <div className="card-rule"></div>
        <h2 className="persona-name">{name}</h2>
        <p className="persona-description">{description}</p>
        <p className="persona-quote">{quote}</p>
        <a className="select-persona-link" href="#">
          This Is Me&nbsp;→
        </a>
      </div>
    </article>
  )
}

export function TravellerDiscovery() {
  return (
    <div className="traveller-discovery">
      <section className="page-hero">
        <div className="hero-left">
          <p className="step-label">The First Step</p>
          <h1 className="hero-heading">
            Who Are You
            <br />
            <em>When You Travel?</em>
          </h1>
        </div>
        <div className="hero-tagline">
          <p>
            Before destinations, there are desires. Understand your traveller self, and Sri Lanka
            will reveal exactly what you need.
          </p>
        </div>
      </section>

      <section className="personas-section">
        <div className="personas-row personas-row--three">
          <PersonaCard
            imageSrc="https://picsum.photos/seed/silence/800/450"
            imageAlt="The Seeker of Silence"
            name="The Seeker of Silence"
            description="You travel to find the version of yourself that silence reveals. Remote tea estates and ancient forest monasteries whisper your name."
            quote='"I want to see how people really live — not what is prepared for visitors."'
          />
          <PersonaCard
            imageSrc="https://picsum.photos/seed/heritage/800/450"
            imageAlt="The Heritage Guardian"
            name="The Heritage Guardian"
            description={
              <>
                History is not a backdrop to your journey. It is the reason you go.
                <br />
                Colonial bungalows, sacred temples, and stories carried across generations call you
                forward.
              </>
            }
            quote='"I want to see how people really live — not what is prepared for visitors."'
          />
          <PersonaCard
            imageSrc="https://picsum.photos/seed/witness/800/450"
            imageAlt="The Curious Witness"
            name="The Curious Witness"
            description={
              <>
                You collect stories, not souvenirs.
                <br />
                Local conversations, hidden traditions, and everyday moments become the memories
                you keep.
              </>
            }
            quote='"I want to see how people really live — not what is prepared for visitors."'
          />
        </div>

        <div className="personas-row personas-row--two">
          <PersonaCard
            imageSrc="https://picsum.photos/seed/wanderer/1200/500"
            imageAlt="The Unhurried Wanderer"
            name="The Unhurried Wanderer"
            description="You believe the journey matters as much as the destination. Scenic railways, winding roads, and places discovered slowly shape the way you travel."
            quote='"I want to see how people really live — not what is prepared for visitors."'
          />
          <PersonaCard
            imageSrc="https://picsum.photos/seed/restorer/1200/500"
            imageAlt="The Restorer"
            name="The Restorer"
            description="You travel not to escape life, but to return to it renewed. Wellness retreats, ocean breezes, and quiet mornings help restore what everyday life asks of you."
            quote='"I want to see how people really live — not what is prepared for visitors."'
          />
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-left">
          <div className="section-tag">
            <span className="tag-rule"></span>
            <span className="tag-text">A Short, Guided Path</span>
          </div>
          <h2 className="discovery-heading">Let us begin with a few quiet questions.</h2>
          <p className="discovery-body">
            Every traveller arrives carrying something different. A longing for stillness. A sense of
            curiosity. A desire to reconnect, to celebrate, or simply to slow down.
          </p>
          <p className="discovery-body">
            In a few unhurried moments, we&apos;ll learn a little about how you move through the
            world, what draws you forward, and what kind of journey might be waiting for you.
          </p>
          <p className="discovery-body">
            On the other side, you&apos;ll find more than a recommendation. You&apos;ll find a
            reflection of the traveller you&apos;ve become.
          </p>
          <div className="discovery-cta-group">
            <a className="begin-discovery-link" href="#">
              Begin Your Discovery
            </a>
            <span className="time-estimate">Approx 2 minutes</span>
          </div>
        </div>

        <div className="discovery-right">
          <div className="own-words-intro-note">
            <span className="intro-note-rule"></span>
            <span className="intro-note-text">Not Sure Which One Is Yours?</span>
            <span className="intro-note-rule"></span>
          </div>
          <div className="section-tag">
            <span className="tag-rule"></span>
            <span className="tag-text">A Short, Guided Path</span>
          </div>
          <h2 className="own-words-heading">In Your Own Words</h2>
          <div className="own-words-lead">
            <p>Some travellers already know exactly what they&apos;re seeking.</p>
            <p>Not a destination. Not a hotel.</p>
            <p>A feeling.</p>
          </div>
          <p className="own-words-body">
            A certain kind of morning. A particular pace. A way of moving through the world that
            is entirely their own.
            <br />
            <br />
            Tell us about the traveller you&apos;ve become. Your rituals, your curiosities, the
            places that stay with you long after you&apos;ve returned home.
            <br />
            <br />
            We&apos;ll listen carefully and write back with a name that feels uniquely yours.
          </p>
          <a className="tell-us-link" href="#">
            Tell Us About You
          </a>
          <div className="traveller-quote-block">
            <p className="quote-preface">One traveller wrote:</p>
            <p className="quote-body">
              &quot;I want to walk into a temple at first light and not have to say anything for an
              hour.&quot;
            </p>
            <p className="quote-attribution-label">We called them:</p>
            <p className="quote-persona-name">The Keeper of Quiet Hours.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

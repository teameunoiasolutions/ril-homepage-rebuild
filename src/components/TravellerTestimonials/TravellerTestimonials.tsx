import './TravellerTestimonials.css'

interface TestimonialProps {
  quote: string
  name: string
  location: string
  imageSeed: string
}

function TestimonialAttribution({ quote, name, location, imageSeed }: TestimonialProps) {
  return (
    <>
      <blockquote className="testimonial-quote">&ldquo;{quote}&rdquo;</blockquote>
      <div className="testimonial-attribution">
        <img
          className="testimonial-avatar"
          src={`https://picsum.photos/seed/${imageSeed}/88/88`}
          alt=""
        />
        <div className="testimonial-attribution-text">
          <span className="testimonial-name">{name}</span>
          <span className="testimonial-location">{location}</span>
        </div>
      </div>
    </>
  )
}

export function TravellerTestimonials() {
  return (
    <section className="traveller-testimonials">
      <div className="testimonials-grid">
        <div className="testimonials-intro">
          <span className="testimonials-eyebrow">Stories From Travellers</span>
          <h2 className="testimonials-headline">What They Kept</h2>
          <span className="testimonials-rule"></span>
          <TestimonialAttribution
            quote="I don't remember what we did on the third day. I remember sitting on a veranda while the rain moved across the valley, and realising I hadn't looked at my phone in hours."
            name="Catherine H. — The Seeker of Silence"
            location="Edinburgh, Scotland"
            imageSeed="catherine-h"
          />
        </div>

        <article className="testimonial-featured">
          <span className="testimonials-rule"></span>
          <TestimonialAttribution
            quote="I thought I was coming for the wildlife. I left thinking about the people."
            name="James & Rosalind T. — The Observer"
            location="Oxfordshire, England"
            imageSeed="james-rosalind"
          />
        </article>

        <div className="testimonial-aside">
          <p className="testimonial-aside-intro">
            Every one of these began the same way. With a conversation, before anything was booked.
          </p>
          <span className="testimonials-rule"></span>
          <TestimonialAttribution
            quote="The guide never rushed us. When my father wanted to stop and watch the fishermen bring in their boats, we stayed. That became one of the only things either of us still talks about."
            name="Sophie M. — The Curious Witness"
            location="Paris, France"
            imageSeed="sophie-m"
          />
        </div>
      </div>
    </section>
  )
}

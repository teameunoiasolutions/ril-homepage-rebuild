import './PersonalInvitation.css'

export function PersonalInvitation() {
  return (
    <section className="personal-invitation">
      <div className="invitation-inner">
        <div className="invitation-ornament">
          <span className="invitation-ornament-line"></span>
          <span className="invitation-ornament-icon" aria-hidden="true">
            ✦
          </span>
          <span className="invitation-ornament-line"></span>
        </div>

        <span className="invitation-eyebrow">A Personal Invitation</span>

        <h2 className="invitation-headline">
          What Have You Been
          <br />
          Hoping to Find?
        </h2>

        <p className="invitation-body">
          Not every traveller arrives with a destination in mind. Some arrive with a feeling, a wish
          to slow down, a curiosity they&apos;ve never quite explored, a hope for connection,
          celebration, reflection, or discovery. Tell us a little about what you&apos;re seeking.
          We&apos;ll take it from there.
        </p>

        <form className="invitation-form" onSubmit={(event) => event.preventDefault()}>
          <input
            className="invitation-input"
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
          />
          <button className="invitation-button" type="submit">
            Request a Dialogue
          </button>
        </form>

        <p className="invitation-footnote">No obligation. No agenda. Simply a conversation.</p>
      </div>
    </section>
  )
}

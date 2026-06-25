import style from "./ConsultSection.module.css";
import img1 from ".././../../assets/cons1.jpg"
import img2 from ".././../../assets/cons2.jpg"

export default function ConsultSection() {
  return (
    <section className={`${style.section} w-100`}>
      <div className={`container-xl ${style.inner}`}>
        <div className="row g-0 align-items-stretch">

          {/* ══════════════════════════════
              LEFT — Contact Form
          ══════════════════════════════ */}
          <div className={`col-12 col-lg-6 ${style.formCol}`}>

            {/* Heading */}
            <h2 className={style.heading}>Consult with our Experts</h2>
            <p className={style.subtext}>
              Provide your details below and a dedicated senior broker will reach
              out to schedule a private consultation regarding your portfolio needs.
            </p>

            {/* ── Name field ── */}
            <div className={`mb-3 ${style.fieldGroup}`}>
              <label className={style.label} htmlFor="fullName">Name</label>
              <div className={style.inputWrap}>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className={style.input}
                />
                <span className={style.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
              </div>
            </div>

            {/* ── Company field ── */}
            <div className={`mb-3 ${style.fieldGroup}`}>
              <label className={style.label} htmlFor="company">
                Company <span className={style.optional}>(Optional)</span>
              </label>
              <div className={style.inputWrap}>
                <input
                  id="company"
                  type="text"
                  placeholder="Organization name"
                  className={style.input}
                />
                <span className={style.inputIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </span>
              </div>
            </div>

            {/* ── Contact Team radio ── */}
            <div className={`mb-3 ${style.fieldGroup}`}>
              <label className={style.label}>Contact Team</label>
              <div className={`d-flex align-items-center gap-4 ${style.radioGroup}`}>

                <label className={style.radioLabel}>
                  <input
                    type="radio"
                    name="team"
                    value="sales"
                    defaultChecked
                    className={style.radioInput}
                  />
                  <span className={style.radioCustom} />
                  Sales
                </label>

                <label className={style.radioLabel}>
                  <input
                    type="radio"
                    name="team"
                    value="acquisitions"
                    className={style.radioInput}
                  />
                  <span className={style.radioCustom} />
                  Acquisitions
                </label>

              </div>
            </div>

            {/* ── Message textarea ── */}
            <div className={`mb-4 ${style.fieldGroup}`}>
              <label className={style.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we assist you?"
                className={style.textarea}
              />
            </div>

            {/* ── Submit button ── */}
            <button type="button" className={style.submitBtn}>
              Submit Inquiry
            </button>

          </div>

          
          <div className={`col-12 col-lg-6 d-flex flex-column  flex-lg-row ${style.cardsCol} align-items-center ms-5 p-1 gap-5`}>

            {/* Card 1 — Livora Agency */}
            <div className={`flex-fill ${style.card} ${style.cardShitUp}`}>
              <img
                src={img1}
                alt="Livora Agency"
                className={style.cardImg}
              />
              <div className={style.cardOverlay}>
                <div className={style.cardBody}>
                  <h3 className={style.cardTitle}>Livora Agency</h3>
                  <p className={style.cardDesc}>
                    Headquartered in the heart of the financial district, overseeing...
                  </p>
                  <a href="#agency" className={style.cardLink}>
                    Learn More
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className={style.cardLinkArrow}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 — Direct Contact */}
            <div className={`flex-fill ${style.card} ${style.cardShitDown}`}>
              <img
                src={img2}
                alt="Direct Contact"
                className={style.cardImg}
              />
              <div className={style.cardOverlay}>
                <div className={style.cardBody}>
                  <h3 className={style.cardTitle}>Direct Contact</h3>
                  <p className={style.cardDesc}>
                    Available 24/7 for our retained clients. Secure, encrypted...
                  </p>
                  <a href="#contact" className={style.cardLink}>
                    Connect
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className={style.cardLinkArrow}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
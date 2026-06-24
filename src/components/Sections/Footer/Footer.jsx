import style from "./Footer.module.css";
import logo from "../../../assets/livora-logo.png"

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={`${style.footer} w-100`}>
      <div className={`container-xl py-5 ${style.inner}`}>

        {/* ── Logo centered ── */}
        <div className={`d-flex flex-column align-items-center gap-1 mb-4 ${style.logoWrap}`}>
          <a href="#home" className={`d-flex align-items-center gap-2 text-decoration-none ${style.logo}`}>
            <img src={logo} className = {style.logoIcon} alt="logo" />
            <span className="d-flex align-items-baseline">
              <span className={style.logoGold}>LIVORA</span>
            </span>
          </a>
          <p className={`mb-0 ${style.tagline}`}>Curated Excellence.</p>
        </div>

        {/* ── Nav links row ── */}
        <nav
          className={`d-flex flex-wrap justify-content-center align-items-center mb-4 ${style.linkRow}`}
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map((link, i) => (
            <span key={link.label} className="d-flex align-items-center">
              <a href={link.href} className={style.link}>
                {link.label}
              </a>
              {i < FOOTER_LINKS.length - 1 && (
                <span className={style.dot} aria-hidden="true" />
              )}
            </span>
          ))}
        </nav>

    
        <div className={`w-100 mb-4 ${style.divider}`} />

        <div className={`d-flex flex-column flex-md-row align-items-center justify-content-between w-100 gap-3 ${style.bottomRow}`}>

          <p className={`mb-0 text-center text-md-start ${style.copyright}`}>
            © 2024 LIVORA. Curated Excellence.
          </p>

        
          <div className="d-flex align-items-center gap-1">

            
            <a href="#instagram" className={style.socialBtn} aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>

            
            <a href="#facebook" className={style.socialBtn} aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            
            <a href="#twitter" className={style.socialBtn} aria-label="X (Twitter)">
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            
            <a href="#linkedin" className={style.socialBtn} aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            

          </div>
        </div>

      </div>
    </footer>
  );
}
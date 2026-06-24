import style from "./Navbar.module.css";
import logo from "../../../assets/livora-logo.png"

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Rooms", href: "#rooms" },
  { label: "Villas", href: "#villas" },
  { label: "Chalets", href: "#chalets" },
  { label: "Connect", href: "#connect" },
  { label: "Trips", href: "#trips" },
  { label: "Rating", href: "#rating" },
];

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.inner}>

        <a href="#home" className={style.logo}>
          <img src={logo}  alt="" />
          <span className={style.logoText}>
            <span className={style.logoGold}>LIVORA</span>
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className={style.linkList}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.active ? style.linkActive : style.link}
              >
                {link.label}
                {link.active && <span className={style.activeDot} />}
              </a>
            </li>
          ))}
        </ul>

        
        <div className={style.actions}>

          
          <button className={style.searchBtn} aria-label="Search">
            <i className="fa-brands fa-sistrix"></i>
          </button>

          <a href="#enrolment" className={style.enrolBtn}>
            Enrolment
            <i className={`${style.enrolArrow} fa-solid fa-arrow-right`}></i>
          </a>

        </div>
      </div>
    </nav>
  );
}
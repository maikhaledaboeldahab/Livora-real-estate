import style from "./Footer.module.css";
import logo from "../../../assets/logo.png";

export default function Footer() {
  const footer_links = {
    platform: ["Browse", "List Property", "Pricing", "Agent Portal"],
    Company: ["About Us", "Investor Relations", "Press", "Contact Support"],
    Legal: ["Terms Of services", "Privacy policy", "Cookie Policy"],
    Support: ["Contact Support", "FAQS"],
  };
  return (
    <footer className={style.footer}>
      <hr />
      <div className="d-flex my-4 mx-5 justify-content-between">
        <div className={`${style.clmn}`}>
          <div className="d-flex mb-3">
            <img src={logo} className={`${style.logo} me-1`} alt="" />
            <h4 className={`text-h3 ${style.h4}`}>Waymark</h4>
          </div>
          <span>
            Expertly navigating the architecture of real estate transactions
            with precision and trust.
          </span>
          <div className="d-flex my-4 gap-2">
            <i className="fa-solid fa-earth-americas me-2"></i>
            <i className="fa-solid fa-share-nodes me-2"></i>
            <i className="fa-regular fa-envelope me-2"></i>
          </div>
        </div>
        <div className="d-flex">
          {Object.entries(footer_links).map(([label, links]) => (
            <div key={label} className="footer-column mx-5">
              <label>{label}</label>

              <ul className={`py-2 ${style.ul}`}>
                {links.map((link) => (
                  <li key={link} className={`${style.li} py-2`}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="">
          <div className="d-flex flex-column gap-2">
            <label className={style.label}>Newsletter</label>
            <span className={style.span}>
              Get exclusive market insights delivered to your inbox.
            </span>
          </div>
          <form action="" className="d-flex me-3 mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className={`${style.input}`}
            />
            <button className={style.join}>JOIN</button>
          </form>
        </div>
      </div>
      <hr />
      <div className={`${style.vfoot} d-flex justify-content-between`}>
        <span className="mx-4">
          © 2024 Waymark Real Estate. The Guided Path.
        </span>
        <div>
          <span className="mx-4">Designed with Precision</span>
          <span className="mx-4">Security Verified</span>
        </div>
      </div>
    </footer>
  );
}

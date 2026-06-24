import style from "./Hero.module.css";
import background from "../../assets/hero-bg.png";
export default function Hero() {
  return (
    <>
      <div className={`${style.bgImg}`}>
        <div className={`${style.center}`}>
            <h1 className={`text-h1`}>Waymark</h1>
            <span className={`${style.txt}`}>The Guided Path To Your New Home</span>
          <form className={`${style.form} d-flex`} role="search">
            <i className="fa-solid fa-location-dot"></i>
            <input
              className={`${style.btnn} me-2 px-1`}
              type="search"
              placeholder="Location"
              aria-label="Search"
            />
            <div className="">
              <i className="fa-regular fa-house"></i>
              <button
                className={`me-1 pe-4 text-button ${style.btnn}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Property type
                <i className="fa-solid fa-chevron-down ps-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <i className="fa-solid fa-money-bills"></i>
              <button
                className={`${style.btnn} pe-5 text-button`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price range
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className={`${style.btnn} text-button ${style.lsbtn} p-3 px-4`} ><i className="fa-solid fa-magnifying-glass pe-4"></i> Search</button>
          </form>
        </div>
      </div>
    </>
  );
}

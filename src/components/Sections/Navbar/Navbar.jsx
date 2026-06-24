import style from "./Navbar.module.css";
import logo from "../../../assets/logo-white-ed.png";

function Navbar() {
  return (
    <nav className={`${style.navbg} d-flex align-items-center`}>
      <div className={`container ${style.navcont}`}>
         <a>
          <img src={logo} alt="logo" className={`${style.img}`} />
          <h3 className={`text-h3-logo mb-0 `}>Waymark</h3>
         </a>
        <div className={`${style.links}`}>
          <a className={`hover:opacity-100`} href="#">
            Browse
          </a>
          <a
            className="hover:opacity-100 hover:text-secondary transition-all"
            href="#"
          >
            List Property
          </a>
        </div>
        <div className="d-flex gap-3">
            <form className={`${style.search} d-flex`} role="search">
              <i className={`${style.icon} fa-solid fa-magnifying-glass`}></i>
              <input className ={`me-2`} type="search" placeholder="Quick Search ..." aria-label="Search"/>
            </form>
            <div className={`${style.profile}`}>
              <i className="fa-regular fa-circle-user"></i>
              <span>Profile</span>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

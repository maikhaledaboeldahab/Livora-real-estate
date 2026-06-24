import style from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.content}>
        <span className={style.eyebrow}>Luxury Real Estate</span>

        
        <h1 className={style.headline}>
          Exclusive<br />
          Properties<br />
          for Exclusive<br />
          Clients
        </h1>

        
        <p className={style.subtext}>
          Curated collections of the world's most extraordinary homes.
          Designed for those who appreciate architectural excellence
          and unparalleled luxury.
        </p>

        
        <div className={style.searchBar}>
          <div className={style.searchLeft}>
            
            <i className={`${style.searchIcon} fa-brands fa-sistrix`}></i>
            <input
              className={style.searchInput}
              type="text"
              placeholder="Search by location or p..."
            />
          </div>

          
          <div className={style.searchDivider} />

          
          <div className={style.filterRow}>
            <span className={style.filterTab}>Type</span>
            <span className={style.filterTab}>Travel</span>
            <span className={style.filterTab}>Location</span>
          </div>

          
          <button className={style.filterBtn}>
            <i class="fa-solid fa-bars-staggered"></i>
          </button>
        </div>

        <a href="#listings" className={style.ctaBtn}>
          Buy Now
          <i className={`${style.ctaArrow} fa-solid fa-arrow-right`}></i>
        </a>

      </div>

      
      <div className={style.scrollIndicator}>
        <div className={style.scrollLine} />
      </div>

    </section>
  );
}
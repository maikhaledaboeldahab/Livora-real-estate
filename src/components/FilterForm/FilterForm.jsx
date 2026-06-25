import style from './FilterForm.module.css';

export default function FilterForm() {
  return (
    <aside className={style.sidebar}>
      <div className={style.headerRow}>
        <h2 className={style.sidebarTitle}>Refine Search</h2>
        <i className="fa-solid fa-sliders"></i>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className={style.form}>
        {/* Section: Property Type */}
        <div className={style.filterGroup}>
          <label className={style.groupLabel}>Property Type</label>
          {['Penthouse', 'Villa', 'Chalet', 'Private Estate'].map((type, idx) => (
            <label key={idx} className={style.checkboxLabel}>
              <input type="checkbox" className={style.hiddenCheckbox} defaultChecked={idx === 1} />
              <span className={style.customCheckbox}></span>
              <span className={style.checkboxText}>{type}</span>
            </label>
          ))}
        </div>

        {/* Section: Price Slider */}
        <div className={style.filterGroup}>
          <div className={style.labelSpace}>
            <label className={style.groupLabel}>Price Range</label>
            <span className={style.rangeValue}>$25M+</span>
          </div>
          <input type="range" min="5" max="100" defaultValue="25" className={style.rangeSlider} />
          <div className={style.sliderRangeLabels}>
            <span>$5M</span>
            <span>$100M</span>
          </div>
        </div>

        {/* Section: Bedrooms Count */}
        <div className={style.filterGroup}>
          <label className={style.groupLabel}>Bedrooms</label>
          <div className={style.badgeRow}>
            {['1', '2', '3', '4+'].map((num, idx) => (
              <button key={idx} type="button" className={`${style.numBtn} ${idx === 3 ? style.activeNumBtn : ''}`}>
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Section: Amenities Options */}
        <div className={style.filterGroup}>
          <label className={style.groupLabel}>Amenities</label>
          {['Infinity Pool', 'Helipad', 'Wine Cellar'].map((amenity, idx) => (
            <label key={idx} className={style.checkboxLabel}>
              <input type="checkbox" className={style.hiddenCheckbox} defaultChecked={idx !== 1} />
              <span className={style.customCheckbox}></span>
              <span className={style.checkboxText}>{amenity}</span>
            </label>
          ))}
        </div>

        {/* Reset Trigger Button */}
        <button type="reset" className={style.resetBtn}>
          Reset Filters
        </button>
      </form>
    </aside>
  );
}
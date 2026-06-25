import style from './PropertyCard.module.css';

export default function PropertyCard({ image, tag, title, location, price, beds, baths, size }) {
  return (
    <div className={style.card}>
      {/* Property Imagery */}
      <img src={image} className={style.cardImg} alt={title} />
      
      {/* Luxury Status Badge */}
      {tag && (
        <span className={style.badge}>
          <i className="fa-regular fa-star"></i> {tag}
        </span>
      )}

      {/* Cinematic Linear Gradient Shield Overlay */}
      <div className={style.cardOverlay}>
        <div className={style.cardBody}>
          <h3 className={style.cardTitle}>{title}</h3>
          
          <div className={style.locationRow}>
            <i className="fa-solid fa-location-dot"></i>
            <span className={style.locationText}>{location}</span>
          </div>

          {/* Architectural Specs Row */}
          <div className={style.specsGrid}>
            <span className={style.price}>{price}</span>
            <span className={style.specItem}><i className="fa-solid fa-bed"></i> {beds}</span>
            <span className={style.specItem}><i className="fa-solid fa-bath"></i> {baths}</span>
            <span className={style.specItem}><i className="fa-solid fa-ruler-combined"></i> {size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ id, icon, title, description ,link }) {
  return (
    <section
      className={`${styles.servicesSection} d-flex justify-content-center`}
    >
      <div className={`${styles.card}`}>
        <div
          className={`${styles.serviceCard} d-flex align-items-start justify-content-between`}
        >
          <div className={`${styles.iconWrapper} me-3`}>{icon}</div>
          <div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <a href="" className={styles.a}>
              <span></span>{link}
              <i className={`fa-solid fa-arrow-right ps-3`}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

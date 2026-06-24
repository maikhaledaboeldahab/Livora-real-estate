import Navbar from "../../Sections/Navbar/Navbar";
import Hero from "../../Hero/Hero"; // your next component
import styles from "./HeroWrapper.module.css"


export default function HeroWrapper() {
  return (
    <div className={styles.wrapper}>

      {/* ── Background image layer ── */}
      <div className={styles.bgImage} aria-hidden="true" />

      {/* ── Dark gradient overlay (left-heavy like the screenshot) ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Navbar floats on top (position: absolute inside) ── */}
      <Navbar />

      {/* ── Hero content sits below navbar naturally ── */}
      <Hero />

    </div>
  );
}



/*
  z-index stacking order:
  ┌─────────────────────────────────────────┐
  │  z-index: 100  →  Navbar (absolute)     │
  │  z-index: 100  →  Hero content          │
  │  z-index:   1  →  Dark gradient overlay │
  │  z-index:   0  →  Background image      │
  └─────────────────────────────────────────┘

  To give Hero content its own z-index, add:
    position: "relative", zIndex: 100
  inside your Hero component's root element.
*/
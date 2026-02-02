'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="/video-placeholder.jpg"
        >
          <source src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/video-nike-mind-001-desk.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={`${styles.textContent} ${isVisible ? 'fade-in-up' : ''}`}>
            <h1 className={styles.headline}>MOVE. EVOLVE. DOMINATE.</h1>
            <p className={styles.subheadline}>
              Equipamento para atletas que não aceitam limites. Tecnologia de ponta
              encontra design revolucionário.
            </p>
            <button className={styles.ctaButton}>VER COLEÇÃO</button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
      </div>
    </section>
  );
}

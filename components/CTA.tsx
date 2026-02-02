'use client';

import styles from '@/styles/CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>NÃO HÁ LIMITE</h2>
          <p className={styles.subheadline}>
            Junte-se a milhares de atletas que transformaram suas vidas com STRYDE
          </p>
          <button className={styles.ctaButton}>COMECE AGORA</button>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>📦</span>
              <span>Frete Grátis</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🔄</span>
              <span>Devolução em 30 dias</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✅</span>
              <span>100% Original</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

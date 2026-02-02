'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('product-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="product-section" className={styles.product}>
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.image} ${isVisible ? 'slide-in-left' : ''}`}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="https://imgnike-a.akamaihd.net/branding/extras/cdp-guia-tenis-corrida-refresh/assets/img/carrossel-amortecimento/amortecimento-maximo-v2.jpg"
                alt="STRYDE PRO - Tênis de performance máxima"
                className={styles.productImage}
                loading="lazy"
              />
            </div>

            <div className={styles.productBadge}>NOVO</div>
          </div>

          <div className={`${styles.text} ${isVisible ? 'slide-in-right' : ''}`}>
            <h2 className={styles.productTitle}>STRYDE PRO</h2>
            <p className={styles.productSubtitle}>A Revolução do Performance</p>

            <p className={styles.description}>
              Apresentamos o STRYDE PRO - o resultado de 3 anos de pesquisa e
              desenvolvimento em biomecânica e materiais avançados. Este não é
              apenas um produto, é uma declaração de intenção.
            </p>

            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Malha Ultra-Respirável com Tecnologia CoolFlow
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Solado de Rebound Máximo para Potência Explosiva
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Construção Zero-Waste para Sustentabilidade
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Design Anatômico para Suporte Perfeito
              </li>
            </ul>

            <button className={styles.ctaButton}>SAIBA MAIS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

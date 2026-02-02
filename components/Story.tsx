'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Story.module.css';

export default function Story() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('story-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story-section" className={styles.story}>
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.text} ${isVisible ? 'slide-in-left' : ''}`}>
            <h2 className={styles.title}>NOSSA HISTÓRIA</h2>
            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              STRYDE nasceu de uma visão simples: equipar atletas com as
              melhores ferramentas para conquistar seus objetivos. Não é sobre
              vender produtos, é sobre criar uma comunidade de pessoas que
              recusam aceitar limitações.
            </p>

            <p className={styles.paragraph}>
              Cada design, cada material, cada detalhe é escolhido
              meticulosamente. Nós testamos em condições extremas, ouvimos
              nossos atletas, e continuamente evoluímos.
            </p>

            <p className={styles.paragraph}>
              STRYDE é para quem quer mais. Para quem acorda cedo, treina
              duro, e não para até alcançar a excelência. Somos mais que uma
              marca - somos um movimento.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>Atletas Globais</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Anos de Pesquisa</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Satisfação</div>
              </div>
            </div>
          </div>

          <div className={`${styles.image} ${isVisible ? 'slide-in-right' : ''}`}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="https://imgnike-a.akamaihd.net/branding/extras/cdp-guia-tenis-corrida-refresh/assets/img/carrossel-corrida/corrida-competicao.jpg"
                alt="Movimento STRYDE - Performance em Competição"
                className={styles.storyImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Benefits.module.css';

interface BenefitCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const benefits: BenefitCard[] = [
  {
    id: 1,
    title: 'Performance Máxima',
    description: 'Tecnologia de última geração para maximizar seu desempenho em qualquer situação.',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Tecnologia Avançada',
    description: 'Inovação constante em materiais e design para ficar sempre à frente.',
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Conforto Extremo',
    description: 'Cada detalhe é pensado para proporcionar conforto incomparável durante o treino.',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Design Moderno',
    description: 'Estética premium que complementa sua atitude e estilo de vida.',
    icon: '🎨',
  },
];

export default function Benefits() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-id]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className={styles.benefits}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>POR QUE ESCOLHER STRYDE</h2>
          <div className={styles.divider}></div>
        </div>

        <div ref={containerRef} className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              data-id={benefit.id}
              className={`${styles.card} ${
                visibleCards.includes(benefit.id) ? styles.visible : ''
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

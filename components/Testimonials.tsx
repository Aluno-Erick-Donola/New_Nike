'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus Silva',
    role: 'Atleta Profissional de Corrida',
    text: 'STRYDE não é apenas qualidade, é uma mentalidade. Quando visto usando STRYDE, sinto que estou preparado para conquistar qualquer meta.',
    avatar: '👟',
  },
  {
    id: 2,
    name: 'Ana Costa',
    role: 'Triatleta Olímpica',
    text: 'A tecnologia de performance foi transformadora. Melhorei meus tempos significativamente desde que comecei a treinar com STRYDE.',
    avatar: '🏃',
  },
  {
    id: 3,
    name: 'Gabriel Rocha',
    role: 'Personal Trainer',
    text: 'Recomendo STRYDE para todos os meus clientes. O conforto e a durabilidade são incomparáveis no mercado.',
    avatar: '💪',
  },
];

export default function Testimonials() {
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
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll('[data-id]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>DEPOIMENTOS DE ATLETAS</h2>
          <div className={styles.divider}></div>
        </div>

        <div ref={containerRef} className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-id={testimonial.id}
              className={`${styles.card} ${
                visibleCards.includes(testimonial.id) ? styles.visible : ''
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.text}>{testimonial.text}</p>

              <div className={styles.footer}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.info}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

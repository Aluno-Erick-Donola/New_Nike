'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/MouseFollower.module.css';

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const isMouseMoving = useRef(false);
  const mouseStopTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      isMouseMoving.current = true;

      // Limpar timeout anterior
      if (mouseStopTimeout.current) {
        clearTimeout(mouseStopTimeout.current);
      }

      // Definir novo timeout para detectar quando o mouse parou
      mouseStopTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animação de seguimento suave
    const animate = () => {
      if (!followerRef.current) {
        requestAnimationFrame(animate);
        return;
      }

      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Diferença entre posição atual e alvo
      let dx = targetX - followerPos.current.x;
      let dy = targetY - followerPos.current.y;

      // Se o mouse não está se movendo, desacelera mais
      if (!isMouseMoving.current) {
        // Desaceleração suave (friction)
        velocity.current.x *= 0.92;
        velocity.current.y *= 0.92;

        // Aplicar um offset para não ficar exatamente no mouse
        const distance = Math.sqrt(dx * dx + dy * dy);
        const offsetDistance = 80; // Distância mínima do mouse

        if (distance > offsetDistance) {
          const angle = Math.atan2(dy, dx);
          const offsetX = Math.cos(angle) * offsetDistance;
          const offsetY = Math.sin(angle) * offsetDistance;

          dx = targetX - offsetX - followerPos.current.x;
          dy = targetY - offsetY - followerPos.current.y;

          // Aplicar velocidade com easing
          velocity.current.x += dx * 0.08;
          velocity.current.y += dy * 0.08;
        }
      } else {
        // Quando o mouse está se movendo, segue mais rápido
        velocity.current.x += dx * 0.15;
        velocity.current.y += dy * 0.15;
      }

      // Aplicar fricção/damping
      velocity.current.x *= 0.85;
      velocity.current.y *= 0.85;

      // Atualizar posição
      followerPos.current.x += velocity.current.x;
      followerPos.current.y += velocity.current.y;

      // Aplicar transformação
      followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (mouseStopTimeout.current) {
        clearTimeout(mouseStopTimeout.current);
      }
    };
  }, []);

  return (
    <div ref={followerRef} className={styles.follower}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        {/* Nike Swoosh estilizado */}
        <defs>
          <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ff4444', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff6666', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Círculo de fundo */}
        <circle cx="50" cy="50" r="48" fill="url(#swooshGrad)" opacity="0.9" />
        <circle cx="50" cy="50" r="48" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />

        {/* Swoosh da Nike */}
        <path
          d="M 30 55 Q 50 35 70 50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ponto decorativo */}
        <circle cx="25" cy="60" r="3" fill="#ffffff" opacity="0.6" />
      </svg>
    </div>
  );
}

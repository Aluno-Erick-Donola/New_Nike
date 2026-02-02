import styles from '@/styles/Header.module.css';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>STRYDE</div>
          <nav className={styles.nav}>
            <button
              onClick={() => scrollToSection('hero')}
              className={styles.navLink}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className={styles.navLink}
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className={styles.navLink}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className={styles.navLink}
            >
              Contato
            </button>
          </nav>
          <button className={styles.ctaButton}>COMPRAR AGORA</button>
        </div>
      </div>
    </header>
  );
}

import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.logo}>STRYDE</h3>
            <p className={styles.description}>
              Performance, inovação e atitude. Equipando atletas para conquistar
              seus sonhos.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                f
              </a>
              <a href="#" className={styles.socialLink}>
                𝕏
              </a>
              <a href="#" className={styles.socialLink}>
                in
              </a>
              <a href="#" className={styles.socialLink}>
                📷
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <ul className={styles.links}>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#benefits">Produtos</a>
              </li>
              <li>
                <a href="#story">Sobre</a>
              </li>
              <li>
                <a href="#cta">Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Categorias</h4>
            <ul className={styles.links}>
              <li>
                <a href="#">Calçados</a>
              </li>
              <li>
                <a href="#">Roupas</a>
              </li>
              <li>
                <a href="#">Acessórios</a>
              </li>
              <li>
                <a href="#">Coleção Especial</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Suporte</h4>
            <ul className={styles.links}>
              <li>
                <a href="#">Central de Ajuda</a>
              </li>
              <li>
                <a href="#">Guia de Tamanhos</a>
              </li>
              <li>
                <a href="#">Politica de Devolução</a>
              </li>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 STRYDE. Todos os direitos reservados.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>Envio Seguro</span>
            <span className={styles.badge}>Pagamento Protegido</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

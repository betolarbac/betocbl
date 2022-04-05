import styles from './styles.module.scss';

export function Header() {

    return(
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1>Betocbl</h1>
          <nav>
              <a>Home</a>
              <a>Sobre mim</a>
              <a>Experiência</a>
              <a>Projetos</a>
          </nav>
          
        </div>
      </header>
    );
  }
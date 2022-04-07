import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {

    return(
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
        <Link href="/">
          <h1>Betocbl</h1>
          </Link >
          <nav>

          <Link href="/">
              <a>Home</a>
              </Link >
              <Link href="/sobre">
              <a>Sobre mim</a>
              </Link>
              <a>Experiência</a>
              <a>Projetos</a>
          </nav>
          
        </div>
      </header>
    );
  }
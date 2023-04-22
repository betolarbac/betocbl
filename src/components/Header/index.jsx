import styles from './styles.module.scss';
import Link from 'next/link';
import { motion } from "framer-motion"

export function Header() {

  const menuPath =  window.location.pathname;

    return(
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
        <Link href="/">
          <motion.h1
            initial={{ y: -250}}
            animate={{ y: 10 }}
            transition={{delay: 0.2}}
          >Betocbl</motion.h1>
          </Link >

          <nav>

            <Link href="/">
              <a className={`${menuPath === "/" ? styles.active : ""}`}>Home</a>
              </Link >

              <Link href="/sobre">
              <a className={`${menuPath === "/sobre" ? styles.active : ""}`}>Sobre</a>
              </Link>

              <Link href="/experiencia">
              <a className={`${menuPath === "/experiencia" ? styles.active : ""}`}>Experiência</a>
              </Link>

              <Link href="/projeto">
               <a className={`${menuPath === "/projeto" ? styles.active : ""}`}>Projetos</a>
              </Link>
              
          </nav>
          
        </div>
      </header>
    );
  }
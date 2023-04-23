import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'

export function Header() {

  const router = useRouter()

  

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <motion.h1
            initial={{ y: -250 }}
            animate={{ y: 10 }}
            transition={{ delay: 0.2 }}
          >
            Betocbl
          </motion.h1>
        </Link>
        <nav>
          <Link href="/">
            <a className={`${router.asPath === "/" ? styles.active : ""}`}>Home</a>
          </Link>

          <Link href="/sobre">
            <a className={`${router.asPath === "/sobre" ? styles.active : ""}`}>
              Sobre
            </a>
          </Link>

          <Link href="/experiencia">
            <a
             className={`${router.asPath === "/experiencia" ? styles.active : ""}`}
            >
              Experiência
            </a>
          </Link>

          <Link href="/projeto">
            <a className={`${router.asPath === "/projeto" ? styles.active : ""}`}>
              Projetos
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

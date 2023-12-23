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
            <span className={`${router.asPath === "/" ? styles.active : ""}`}>Home</span>
          </Link>

          <Link href="/sobre">
            <span className={`${router.asPath === "/sobre" ? styles.active : ""}`}>
              Sobre
            </span>
          </Link>

          <Link href="/experiencia">
            <span
             className={`${router.asPath === "/experiencia" ? styles.active : ""}`}
            >
              Experiência
            </span>
          </Link>

          <Link href="/projeto">
            <span className={`${router.asPath === "/projeto" ? styles.active : ""}`}>
              Projetos
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

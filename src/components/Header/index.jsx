import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
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
            <a >Home</a>
          </Link>

          <Link href="/sobre">
            <a >
              Sobre
            </a>
          </Link>

          <Link href="/experiencia">
            <a
             
            >
              Experiência
            </a>
          </Link>

          <Link href="/projeto">
            <a >
              Projetos
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

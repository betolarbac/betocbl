import styles from './home.module.scss';
import Link from 'next/link';
import { FiLinkedin, FiGithub} from 'react-icons/fi';
import { motion } from "framer-motion"
import {Sobre} from '../components/Sobre'
import { Experiencia } from "../components/Experiencia";
import { Projeto } from "../components/Projeto";

export default function Home() {
  return (
    <>
      
    <main className={styles.contentContainer}>
      <motion.section className={styles.hero}
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Olá, eu sou</p>
        
        <h1>Roberto Cabral</h1>
      
        <p>
          Desenvolvedor Front-end.<br />
        </p>

        <button
          type="button">
            <Link href="https://www.linkedin.com/in/roberto-larbac/">
            <span>
            <FiLinkedin color="white" />
            LinkedIn
          </span>
            </Link>
        </button>

        <button
          type="button"
          className={styles.button1}>
         <Link href="https://github.com/betolarbac">
         <span>
            <FiGithub color="white" />
            GitHub
          </span>
         </Link>
        </button>

      </motion.section>

      <img src="/images/Looper.svg" alt="looper" />


    </main>
    
    
    </>
  )
}

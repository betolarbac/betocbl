import styles from './home.module.scss';
import { FiLinkedin, FiGithub} from 'react-icons/fi';



export default function Home() {
  return (
    <>
      
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <p>Olá, eu sou</p>
        
        <h1>Roberto Cabral</h1>
      
        <p>
          Desenvolvedor Front-end.<br />
        </p>

        <button
          type="button">
          <a href="https://www.linkedin.com/in/roberto-larbac/">
            <FiLinkedin color="white" />
            LinkedIn
          </a>
        </button>

        <button
          type="button"
          className={styles.button1}>
          <a href="https://github.com/betolarbac">
            <FiGithub color="white" />
            GitHub
          </a>
        </button>

      </section>

      <img src="/images/Looper.svg" alt="looper" />


    </main>
    
    </>
  )
}

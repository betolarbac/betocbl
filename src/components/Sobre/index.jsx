import styles from './sobre.module.scss';
import { FiDownloadCloud, FiTwitter} from 'react-icons/fi';
import { HiOutlineMail} from 'react-icons/hi';
import { FaInstagram, FaWhatsapp} from 'react-icons/fa';


export function Sobre() {
  return (
    <main className={styles.contentContainer}>

    <img src="/images/perfil.png" alt="perfil"/>


    <section className={styles.hero}>
      <h1>Sobre mim</h1>
      <h2>Alagoas, Brasil</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Praesent id egestas dui. Nullam finibus aliquam enim quis <br />
      faucibus. Aenean ac commodo dolor, nec bibendum velit.
      </p>
      <br />
      <a href="">
      <FiTwitter color="#00D2DF" />
      </a>
      <a href="">
      <FaInstagram color="#00D2DF" />
      </a>
      <a href="">
      <FaWhatsapp color="#00D2DF" />
      </a>
      <br />

      

      <button 
      type="button" 
      className={styles.button1}>
          
     <a href="/curriculo.pdf" download>
     <FiDownloadCloud color="white"  />
     Currículo
     </a>
    </button>

    <button 
      type="button"
      >
      <a href="https://roberto_jr123@hotmail.com">
      <HiOutlineMail color="white" />
      E-mail
      </a>
    </button>

    </section>

    

  
  </main>
  )
}

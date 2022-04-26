import styles from './styles.module.scss';
import { FiLink} from 'react-icons/fi';
export function Projeto() {
    return (
        <div className={styles.container}>
            <h1>PROJETOS</h1>

            <div className={styles.grid}>

            <div className={styles.container1}>
                <img src="/images/foto1.png" alt="perfil"/>
                <h2>Proffy</h2>
                <p>O projeto é uma aplicação que possa ligar quem deseja 
                    aprender, com quer ensinar. É possível encontrar alunos para o que 
                    você leciona,  </p>

                    <h3>HTML,
                        CSS,
                        JavaScript,
                        Node.js,
                        
                        </h3>

                    <button 
                    type="button"
                    >
                    <a href="https://github.com/betolarbac/Proffy">
                    <FiLink color="#ffff" />
                    Visualizar
                    </a>
                    </button>

            </div>

            <div className={styles.container1}>
                <img src="/images/foto2.png" alt="perfil"/>
                <h2>cr.finance</h2>
                <p>O dev.finances é uma aplicação de controle financeiro, 
                    onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída 💰</p>

                    <h3>HTML,
                        CSS,
                        JavaScript</h3>

                    <button 
                    type="button"
                    >
                    <a href="https://betolarbac.github.io/cr.finance/">
                    <FiLink color="#ffff" />
                    Visualizar
                    </a>
                    </button>

            </div>

            <div className={styles.container1}>
                <img src="/images/foto3.png" alt="perfil"/>
                <h2>Upfi</h2>
                <p>Site de fotos de pets. Neste projeto foi FaunaDB, um banco não relacional, para persistência de dados e ImgBB para upload de imagens na nuvem.</p>

                    <h3>Next.js,
                        TypeScript,
                        FaunaDB,
                        Chakra,
                        </h3>

                    <button 
                    type="button"
                    >
                    <a href="https://github.com/betolarbac/upfi">
                    <FiLink color="#ffff" />
                    Visualizar
                    </a>
                    </button>

            </div>

            <div className={styles.container1}>
                <img src="/images/foto4.png" alt="perfil"/>
                <h2>Ignews</h2>
                <p>Ig.news é uma plataforma que mostra as noticias sobre a l
                    inguagem de programação React.JS.</p>

                    <h3>Next.Js,
                        NextAuth.js,
                        Sass,
                     
                        FaunaDB,
                        </h3>

                    <button 
                    type="button"
                    >
                    <a href="https://roberto_jr123@hotmail.com">
                    <FiLink color="#ffff" />
                    Visualizar
                    </a>
                    </button>

            </div>

            <div className={styles.container1}>
                <img src="/images/foto5.png" alt="perfil"/>
                <h2>Betocast</h2>
                <p>é plataforma de podcast e musica desenvolvido para principal intenção de testar novas ferramentas
                    como audio e reprodução no next.js.  </p>

                    <h3>ReactJS,
                        Typescript,
                        Next.js</h3>

                    <button 
                    type="button"
                    >
                    <a href="https://github.com/betolarbac/betocast">
                    <FiLink color="#ffff" />
                    Visualizar
                    </a>
                    </button>

            </div>
            </div>

            

 
        </div>
    )
}
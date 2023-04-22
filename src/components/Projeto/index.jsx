import styles from "./styles.module.scss";
import { FiLink } from "react-icons/fi";
import { motion } from "framer-motion";
export function Projeto() {
  return (
    <div className={styles.container}>
      <h1>PROJETOS</h1>

      <div className={styles.grid}>
        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="https://live.staticflickr.com/65535/52837729695_f6fb3ce57e_h.jpg"
            alt="perfil"
          />
          <h2>Dashgo</h2>
          <p>
            dashboard de gerenciamento de dados, por exemplo de inscrições na
            plataforma, gerenciamento de usuários e etc.{" "}
          </p>

          <h3>React, Next.js TypeScript, Chakra ui,</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/dashgo"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="https://raw.githubusercontent.com/IgorThierry/nlw-return-impulse/main/.github/Capa.png" alt="perfil" />
          <h2>Feedback Widget</h2>
          <p>
          Um Component Widget para feedback que pode ser utilizado em qualquer site.
          </p>

          <h3>Vite,
TailWindCSS,
ReactJS,
ESLint + Prettier + EditorConfig;</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/widget"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="https://live.staticflickr.com/65535/52837599754_ef015c1e48_h.jpg" alt="perfil" />
          <h2>Ignews</h2>
          <p>
            Ig.news é uma plataforma que mostra as noticias sobre a l inguagem
            de programação React.JS.
          </p>

          <h3>Next.Js, NextAuth.js, Sass, FaunaDB,</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/ignews"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="https://raw.githubusercontent.com/betolarbac/ignite-reactjs-spacetraveling/master/.github/spacetraveling.gif"
            alt="perfil"
          />
          <h2>Spacetraveling</h2>
          <p>
            um pequeno blog com conteúdo dinâmico usando cms para gerenciamento
          </p>

          <h3>NextJS, Prismic CMS, React Icons, date-fns</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/ignite-reactjs-spacetraveling"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="https://camo.githubusercontent.com/529586375933c5299e4b110530cdce4e641e38c5030441256ba3a4e9caf654e8/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f59464e503467446e6c68494a7779423231462f67697068792e676966" alt="perfil" />
          <h2>To-do List</h2>
          <p>
            Essa é aplicação onde o seu principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React.
          </p>

          <h3>Next.js, TypeScript</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/to-do-list"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="https://live.staticflickr.com/65535/52837415836_a79dce8c49_h.jpg" alt="perfil" />
          <h2>Betocast</h2>
          <p>
            é plataforma de podcast e musica desenvolvido para principal
            intenção de testar novas ferramentas como audio e reprodução no
            next.js.{" "}
          </p>

          <h3>ReactJS, Typescript, Next.js</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/betocast"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

        <motion.div
          className={styles.container1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="https://live.staticflickr.com/65535/52837415826_c01bbd80cf_h.jpg" alt="perfil" />
          <h2>Dt-money</h2>
          <p>O Dt-money é uma aplicação de controle financeiro, onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída 💰</p>

          <h3>Typescript
React,
Styled Components,
MirageJS</h3>

          <button type="button">
            <a
              href="https://github.com/betolarbac/betoflix"
              target="_blank"
              rel="noreferrer"
            >
              <FiLink color="#ffff" />
              Visualizar
            </a>
          </button>
        </motion.div>

      </div>
    </div>
  );
}

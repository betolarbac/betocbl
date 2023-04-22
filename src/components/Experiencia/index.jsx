import styles from './styles.module.scss';
import { motion } from "framer-motion"
export function Experiencia() {
    return (
        <motion.div className={styles.container}
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{ delay: 0.2, duration: 0.8 }}
        >
            <motion.h1>EXPERIÊNCIA</motion.h1>
            
            <div className={styles.container2}>
             <h4>People Interactive Brasil</h4>
             <h2>Desenvolvedor Front-end</h2>
             <h5>Jun - 2022</h5>
            </div>

            <div className={styles.container3}>
             <h5>People Interactive Brasil</h5>
             <p>desenvolvimento de sites nas principais tecnologias como React, Typescript, Vtex IO e legacy, participando de um time integrando e resolvendo problemas na melhores tecnologias do mercado como react vtex e typescript </p>
            </div>
        </motion.div>
    )
}
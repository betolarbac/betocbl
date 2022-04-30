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
             <h4>AMARÉ PUBLICIDADE E MARKETING</h4>
             <h2>Desenvolvedor Front-end</h2>
             <h5>Jan - 2022</h5>
            </div>

            <div className={styles.container3}>
             <h5>Amaré Publicidade e Marketing</h5>
             <p>Desenvolvimento de paginas web usando Html, css, Javascript e wordpress como PJ </p>
            </div>
        </motion.div>
    )
}
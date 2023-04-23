import { useState, useTransition } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import ButtonTab from "../buttonTab";
export function Experiencia() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("people");

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <motion.h1>EXPERIÊNCIA</motion.h1>

    <div className={styles.flexContainer}>
    <div className={styles.containerExp}>
        <ButtonTab
          isActive={tab === "people"}
          onClick={() => selectTab("people")}
        >
          <h4>People Interactive Brasil</h4>
        </ButtonTab>

        <ButtonTab
          isActive={tab === "people2"}
          onClick={() => selectTab("people2")}
        >
          <h4>Amaré Publicidade e Marketing</h4>
        </ButtonTab>
      </div>

      {tab === "people" && (
        <div className={styles.containerDet}>
          <div>
            <h2>Desenvolvedor Front-end</h2>
            <h5>Jun - 2022</h5>
          </div>
          <h5>People Interactive Brasil</h5>
          <p>
            desenvolvimento de sites nas principais tecnologias como React,
            Typescript, Vtex IO e legacy, participando de um time integrando e
            resolvendo problemas na melhores tecnologias do mercado como react
            vtex e typescript{" "}
          </p>
        </div>
      )}

      {tab === "people2" && (
        <div className={styles.containerDet}>
          <div>
            <h2>Desenvolvedor Front-end</h2>
            <h5>Jan - 2022</h5>
          </div>
          <h5>Amaré Publicidade e Marketing</h5>
          <p>
          Desenvolvimento de paginas web usando Html, css, Javascript e wordpress como PJ 
          </p>
        </div>
      )}
    </div>
    </motion.div>
  );
}

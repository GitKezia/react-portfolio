import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou a Kezia!</h1>
        <p className={styles.description}>
        Sou participante do programa Talentos de Futuro TI da Algar Tech e estou me formando em Análise e Desenvolvimento de Sistemas. 
        Tenho experiência em animação 3D com Blender e desenvolvimento de sites utilizando JavaScript, CSS3 e HTML5. 
        Adoro conhecer novas pessoas e criar conexões, então sinta-se à vontade para entrar em contato comigo.
        </p>
        <a href="./assets/contact/curriculo_example.pdf" target="_blank" className={styles.cvBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";

import styles from "./Sobre.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="sobre">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor FullStack</h3>
              <p>
                Formada em Desenvolvimento FullStack Java pela Escola Britânica de Artes Criativas e Tecnologia.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>ADS</h3>
              <p>
                Formada em Análise  e Desenvolvimento de Sistemas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/likeIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Blender</h3>
              <p>
                Faço animações em 3D com a ferramenta Blender, modelei essa mascote à esquerda, seu nome é Babi. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";

import styles from "./Contato.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contatos" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contatos</h2>
        <p>Sinta-se á vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:keziavictoria21@gmail.com" target="_blank">keziavictoria21@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kezia-victoria-3449b31a6/" target="_blank">linkedin.com/keziavictoria</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/GitKezia" target="_blank">github.com/GitKezia</a>
        </li>
      </ul>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </footer>
  );
};

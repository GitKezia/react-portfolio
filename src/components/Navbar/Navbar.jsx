import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Kezia Victoria
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className={styles.menuBar} href="#sobre">Sobre</a>
          </li>
          <li>
            <a className={styles.menuBar} href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a className={styles.menuBar} href="#projetos">Projetos</a>
          </li>
          <li>
            <a className={styles.menuBar} href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

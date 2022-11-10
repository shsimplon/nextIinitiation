import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span>Accueil</span>
      </Link>
      <Link href="/listes">
        <span>Listes</span>
      </Link>
      <Link href="/isr">
        <span> ISR</span>
      </Link>
      <Link href="/bitcoin">
        <span> BITCOIN</span>
      </Link>
    </nav>
  );
};

export default Navbar;

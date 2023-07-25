import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
         <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/Portfoilo/Project1" className={styles.item}>
          <span className={styles.title}> Project1</span>
        </Link>
        <Link href="/Portfoilo/Project2" className={styles.item}>
          <span className={styles.title}> Project2</span>
        </Link>
        <Link href="/Portfoilo/Project3" className={styles.item}>
          <span className={styles.title}> Project3</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

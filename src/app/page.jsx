import React from "react";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Image from "next/image";
import Button from "../../components/Button/Button";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem, ipsum doloramet cons.</h1>
        <p className={styles.description}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia a explicabo, voluptates modi mollitia natus.</p>
        <Button
        url='/Portfolio'
        text='lorem ipsum'
        />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}

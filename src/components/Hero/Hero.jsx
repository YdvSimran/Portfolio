import React from "react";

import styles from "./Hero.module.css";
import hero from '../../assets/hero/heroImage.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Simran Yadav </h1>
        <p className={styles.description}>
          I'm a FrontEnd developer with experience in React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:simranyadav0705@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";

import styles from "./Contact.module.css";
import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:simranyadav0705@gmail.com">simranyadav0705@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/simran-yadav-732143278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/simranyadav</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/YdvSimran">github.com/YdvSimran</a>
        </li>
      </ul>
    </footer>
  );
};

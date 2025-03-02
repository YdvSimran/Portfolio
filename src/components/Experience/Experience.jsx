import React from "react";
import styles from "./Experience.module.css";

// Import images statically
import octanet from "../../assets/history/octanet.png";
import kpmg from "../../assets/history/kpmg.png";


import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import reactIcon from "../../assets/skills/react.png";
import nodeIcon from "../../assets/skills/node.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import figmaIcon from "../../assets/skills/figma.png";

// History data
const history = [
  {
    role: "FrontEnd Developer",
    organisation: "Octanet",
    startDate: "Sept, 2022",
    endDate: "Oct, 2022",
    experiences: ["Worked on Responsive Projects", "Developed Doctor's Appointment Application"],
    image: octanet,
  },
  {
    role: "FRM-Intern",
    organisation: "KMPG",
    startDate: "Dec, 2024",
    endDate: "Present",
    experiences: ["Worked on Java Projects", "Learnt about Risk Management"],
    image: kpmg,
  },
 
];

// Skills data
const skills = [
  { title: "HTML", image: htmlIcon },
  { title: "CSS", image: cssIcon },
  { title: "React", image: reactIcon },
  { title: "Node", image: nodeIcon },
 
  { title: "MongoDB", image: mongodbIcon },
  { title: "Figma", image: figmaIcon },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skill.image} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={historyItem.image} alt={`${historyItem.organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

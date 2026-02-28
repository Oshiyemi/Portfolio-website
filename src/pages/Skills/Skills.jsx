import styles from "./Skills.module.css";
import reactIcon from "../../assets/react.svg";
import javascriptIcon from "../../assets/javascript.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import tailwindIcon from "../../assets/flowbite--tailwind-solid.svg";
import githubIcon from "../../assets/github.svg";
import vscodeIcon from "../../assets/vscode.svg";

const SKILLS = [
  {
    name: "React",
    icon: reactIcon,
    description: "Build dynamic and responsive user interfaces.",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "Core language for interactive web functionality.",
  },
  {
    name: "HTML",
    icon: htmlIcon,
    description: "Structure web content with semantic markup.",
  },
  {
    name: "CSS",
    icon: cssIcon,
    description: "Style web pages with modern layouts and responsive designs.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "Version control and collaborative code management.",
  },
  {
    name: "VSCode",
    icon: vscodeIcon,
    description: "Efficient development with a powerful code editor.",
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
    description: "Backend development and server-side scripting.",
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
    description: "Rapid UI styling with utility-first CSS.",
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="header">Skills</h2>
      <p className={styles.subtitle}>
        Technologies I use to ship modern, scalable web experiences.
      </p>

      <div className={styles.grid}>
        {SKILLS.map((skill) => (
          <article key={skill.name} className={styles.skillCard}>
            <span className={styles.skillBadge}>
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className={styles.skillIcon}
              />
            </span>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.skillMeta}>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

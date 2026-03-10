import { createElement } from "react";
import { Monitor, Palette, Server, Workflow } from "lucide-react";
import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    description:
      "UI work centered on React, component reuse, responsive layout, and interaction detail.",
    icon: Monitor,
    items: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    description:
      "Pragmatic server-side tooling for data-backed features, integrations, and application logic.",
    icon: Server,
    items: ["Node.js", "Express.js", "MongoDB", "Python", "REST APIs"],
  },
  {
    title: "Styling & UI",
    description:
      "Frontend presentation focused on polish, maintainability, and strong usability across screen sizes.",
    icon: Palette,
    items: ["CSS Modules", "CSS3", "Responsive Design", "Lucide React"],
  },
  {
    title: "Workflow & Tooling",
    description:
      "Tools I use to keep delivery organized, fast to iterate on, and easy to collaborate around.",
    icon: Workflow,
    items: ["Git", "GitHub", "Vite", "EmailJS"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className={`sectionInner ${styles.content}`}>
        <div className={styles.headerBlock}>
          <h2 className="header">Tools & Technologies</h2>
          <p className={styles.subtitle}>
            My stack stays frontend-first, with enough backend and workflow
            depth to build products cleanly from interface to integration.
          </p>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map(({ title, description, icon, items }) => (
            <article key={title} className={styles.groupCard}>
              <div className={styles.groupHeader}>
                <span className={styles.iconWrap}>
                  {createElement(icon, { size: 20, strokeWidth: 2 })}
                </span>
                <div>
                  <h3 className={styles.groupTitle}>{title}</h3>
                  <p className={styles.groupDescription}>{description}</p>
                </div>
              </div>

              <ul className={styles.stackList}>
                {items.map((item) => (
                  <li key={item} className={styles.stackItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

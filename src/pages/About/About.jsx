import { createElement } from "react";
import { Boxes, Monitor, Rocket, Server } from "lucide-react";
import Approach from "../Approach/Approach";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  {
    value: "Frontend-heavy",
    label: "Focused on polished interfaces, interaction details, and responsive systems that feel production-ready.",
    icon: Monitor,
  },
  {
    value: "Maintainable by default",
    label: "I structure UI into reusable sections, cards, and modules so product work stays easier to extend.",
    icon: Boxes,
  },
  {
    value: "Product-focused",
    label: "I think beyond visuals and work toward flows, hierarchy, and content that support real user goals.",
    icon: Rocket,
  },
  {
    value: "Full-stack ready",
    label: "Comfortable supporting frontend builds with API integration and pragmatic backend foundations when needed.",
    icon: Server,
  },
];

function About() {
  return (
    <section id="about">
      <div className="sectionInner">
        <h2 className="header">About Me</h2>
        <div className={styles.container}>
          <div className={styles.copyPanel}>
            <p className={styles.description}>
              I am a frontend-heavy fullstack developer who enjoys building
              interfaces that feel polished, useful, and easy to trust from the
              first interaction.
            </p>
            <p className={styles.supportingCopy}>
              My work sits at the intersection of UI quality, maintainable
              architecture, and product thinking. I care about responsive
              layouts, reusable components, clear code structure, and web
              experiences that support the goals behind the product, not just
              the screen design.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {HIGHLIGHTS.map(({ value, label, icon }) => (
              <article key={value} className={styles.statCard}>
                <span className={styles.iconBadge}>
                  {createElement(icon, { size: 20, strokeWidth: 2 })}
                </span>
                <p className={styles.statValue}>{value}</p>
                <p className={styles.statLabel}>{label}</p>
              </article>
            ))}
          </div>
        </div>

        <Approach />
      </div>
    </section>
  );
}

export default About;

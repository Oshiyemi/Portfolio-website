import { createElement } from "react";
import { Component, Layers3, MonitorSmartphone, Workflow } from "lucide-react";
import styles from "./Approach.module.css";

const PILLARS = [
  {
    title: "Reusable component systems",
    description:
      "I prefer UI patterns that can be extended cleanly instead of one-off screens that become hard to maintain.",
    icon: Component,
  },
  {
    title: "Responsive and accessible UI",
    description:
      "Layouts, spacing, interaction states, and readable structure are treated as core product quality, not polish added later.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clean frontend architecture",
    description:
      "I organize interfaces into focused sections, reusable cards, and styling patterns that stay understandable as the app grows.",
    icon: Layers3,
  },
  {
    title: "API-driven product thinking",
    description:
      "Even when a build starts frontend-first, I think about data shape, integration points, and how features can scale into full products.",
    icon: Workflow,
  },
];

function Approach() {
  return (
    <div className={styles.approachBlock}>
      <div className={styles.headerBlock}>
        <h3 className={styles.heading}>How I Build</h3>
        <p className={styles.subtitle}>
          My process stays centered on reusable interfaces, solid structure,
          and product decisions that hold up beyond the first iteration.
        </p>
      </div>

      <div className={styles.grid}>
        {PILLARS.map(({ title, description, icon }) => (
          <article key={title} className={styles.card}>
            <span className={styles.iconWrap}>
              {createElement(icon, { size: 22, strokeWidth: 2 })}
            </span>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Approach;

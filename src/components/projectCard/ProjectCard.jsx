import { createElement } from "react";
import { Code2, ExternalLink, MessageSquareMore } from "lucide-react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, category, summary, codeUrl, visitUrl, Icon, technologies }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.eyebrow}>{category}</span>
        <span className={styles.iconWrap} aria-hidden="true">
          {createElement(Icon, {
            className: styles.projectIcon,
            size: 18,
            strokeWidth: 1.85,
          })}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.techList}>
          {technologies.map((technology) => (
            <span key={technology} className={styles.techBadge}>
              {technology}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            className={`${styles.actionButton} ${styles.visitButton}`}
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit <ExternalLink size={18} strokeWidth={2} />
          </a>
          <a
            className={`${styles.actionButton} ${styles.codeButton}`}
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code <Code2 size={18} strokeWidth={2} />
          </a>
        </div>

        <a className={styles.link} href="#contact">
          Discuss this project <MessageSquareMore size={18} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;

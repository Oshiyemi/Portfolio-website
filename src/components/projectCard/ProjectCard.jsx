import { createElement } from "react";
import { Code2, ExternalLink, MessageSquareMore } from "lucide-react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, summary, codeUrl, visitUrl, Icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconPanel} aria-hidden="true">
        <span className={styles.iconWrap}>
          {createElement(Icon, {
            className: styles.projectIcon,
            size: 40,
            strokeWidth: 1.9,
          })}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.actions}>
          <a
            className={`${styles.actionButton} ${styles.codeButton}`}
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code <Code2 size={18} strokeWidth={2} />
          </a>
          <a
            className={`${styles.actionButton} ${styles.visitButton}`}
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit <ExternalLink size={18} strokeWidth={2} />
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

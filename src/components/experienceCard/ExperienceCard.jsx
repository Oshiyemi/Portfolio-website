import styles from "./ExperienceCard.module.css";

function ExperienceCard({
  role,
  company,
  location,
  timeline,
  summary,
  impacts,
  technologies,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.context}>
            {company}
            <span aria-hidden="true" className={styles.contextDivider}>
              |
            </span>
            {location}
          </p>
        </div>
        <span className={styles.timeline}>{timeline}</span>
      </div>

      <p className={styles.summary}>{summary}</p>

      <ul className={styles.impactList}>
        {impacts.map((impact) => (
          <li key={impact} className={styles.impactItem}>
            {impact}
          </li>
        ))}
      </ul>

      <div className={styles.techList}>
        {technologies.map((technology) => (
          <span key={technology} className={styles.techBadge}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;

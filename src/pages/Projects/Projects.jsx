import { useEffect, useRef, useState } from "react";
import {
  Code2,
  CheckSquare,
  ExternalLink,
  Film,
  LineChart,
  ShoppingCart,
} from "lucide-react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Projects.module.css";

const FEATURED_PROJECT = {
  title: "Modern Ecommerce Storefront",
  summary:
    "A storefront case study focused on clearer product discovery, stronger purchase flow guidance, and a modular UI that can grow into a fuller commerce product.",
  problem:
    "Commerce interfaces often become noisy or cramped on smaller screens, which weakens trust and makes browsing feel heavier than it should.",
  solution:
    "I rebuilt the experience around reusable product cards, clearer CTA hierarchy, and responsive layout patterns that keep catalog browsing easy to scan and extend.",
  features: [
    "Responsive catalog and promotional sections",
    "Clear call-to-action hierarchy for browse and purchase moments",
    "Consistent section system for hero, catalog, and promotion blocks",
    "Reusable UI blocks that can expand into API-driven commerce flows",
  ],
  technologies: ["React", "JavaScript", "CSS Modules", "Vite"],
  architecture: [
    { label: "Frontend", value: "React + Vite" },
    { label: "Data flow", value: "Reusable product state and modular UI sections" },
    { label: "Styling", value: "CSS Modules" },
    { label: "Deployment", value: "Netlify" },
  ],
  codeUrl: "https://github.com/Oshiyemi/E-Commerce-website",
  visitUrl: "https://kodshopping.netlify.app/",
};

const FEATURED_LABEL_REVEAL_DELAY_MS = 3000;
const FEATURED_LABEL_REVEAL_HOLD_MS = 1700;

const PROJECTS = [
  {
    title: "Modern Ecommerce Storefront",
    category: "Ecommerce",
    summary:
      "A modern storefront interface built around product browsing, structured sections, and cleaner purchase flow messaging.",
    codeUrl: "https://github.com/Oshiyemi/E-Commerce-website",
    visitUrl: "https://kodshopping.netlify.app/",
    icon: ShoppingCart,
    technologies: ["React", "JavaScript", "CSS Modules", "Vite"],
  },
  {
    title: "Personal Finance Dashboard",
    category: "Finance",
    summary:
      "A finance-focused dashboard for tracking spending, reviewing categories, and presenting personal data in a more usable way.",
    codeUrl: "https://github.com/Oshiyemi/react-finance-tracker",
    visitUrl: "https://kod-fintrack.netlify.app/",
    icon: LineChart,
    technologies: ["React", "JavaScript", "CSS3", "Responsive UI"],
  },
  {
    title: "Movie Discovery Platform",
    category: "Entertainment",
    summary:
      "A search and discovery experience for browsing trending titles, filtering by interest, and creating a lightweight watchlist flow.",
    codeUrl: "https://github.com/Oshiyemi/Movie-tracker-website.git",
    visitUrl: "https://kod-movietracker.netlify.app/",
    icon: Film,
    technologies: ["React", "REST APIs", "JavaScript", "CSS Modules"],
  },
  {
    title: "TaskFlow Productivity App",
    category: "Productivity",
    summary:
      "A productivity app for organizing priorities, tracking progress, and keeping everyday planning simple and focused.",
    codeUrl: "https://github.com/Oshiyemi/Todo-list-app",
    visitUrl: "https://kod-taskflow.netlify.app/",
    icon: CheckSquare,
    technologies: ["React", "JavaScript", "CSS3", "UI Architecture"],
  },
];

function Projects() {
  const [isFeaturedBadgeExpanded, setIsFeaturedBadgeExpanded] = useState(false);
  const featuredCardRef = useRef(null);
  const isFeatureVisibleRef = useRef(false);
  const revealTimeoutRef = useRef(null);
  const collapseTimeoutRef = useRef(null);

  useEffect(() => {
    const featuredCard = featuredCardRef.current;
    if (!(featuredCard instanceof HTMLElement) || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const clearFeatureTimers = () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
        revealTimeoutRef.current = null;
      }

      if (collapseTimeoutRef.current !== null) {
        window.clearTimeout(collapseTimeoutRef.current);
        collapseTimeoutRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (isFeatureVisibleRef.current) {
            return;
          }

          isFeatureVisibleRef.current = true;
          clearFeatureTimers();

          revealTimeoutRef.current = window.setTimeout(() => {
            setIsFeaturedBadgeExpanded(true);
            revealTimeoutRef.current = null;

            collapseTimeoutRef.current = window.setTimeout(() => {
              setIsFeaturedBadgeExpanded(false);
              collapseTimeoutRef.current = null;
            }, FEATURED_LABEL_REVEAL_HOLD_MS);
          }, FEATURED_LABEL_REVEAL_DELAY_MS);

          return;
        }

        isFeatureVisibleRef.current = false;
        clearFeatureTimers();
        setIsFeaturedBadgeExpanded(false);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(featuredCard);

    return () => {
      observer.disconnect();
      clearFeatureTimers();
    };
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="sectionInner">
        <div className={styles.headerBlock}>
          <h2 className="header">Projects</h2>
          <p className={styles.copy}>
            A set of product-focused builds covering ecommerce, finance,
            entertainment, and productivity experiences.
          </p>
        </div>

        <article ref={featuredCardRef} className={styles.featuredCard}>
          <div className={styles.featuredTopRow}>
            <span
              className={`${styles.featuredBadge} ${
                isFeaturedBadgeExpanded ? styles.featuredBadgeExpanded : ""
              }`}
            >
              <svg
                className={styles.featuredBadgeStar}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12 2.25l2.92 5.917l6.53.949l-4.725 4.605l1.116 6.504L12 17.157l-5.841 3.068l1.116-6.504L2.55 9.116l6.53-.949z"
                />
              </svg>
              <span className={styles.featuredBadgeText}>Featured Project</span>
            </span>
          </div>

          <div className={styles.featuredIntro}>
            <h3 className={styles.featuredTitle}>{FEATURED_PROJECT.title}</h3>
            <p className={styles.featuredSummary}>{FEATURED_PROJECT.summary}</p>

            <div className={`${styles.metaBlock} ${styles.stackBlock}`}>
              <h4 className={styles.storyTitle}>Stack</h4>
              <div className={styles.techList}>
                {FEATURED_PROJECT.technologies.map((technology) => (
                  <span key={technology} className={styles.techBadge}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.metaBlock} ${styles.keyFeaturesBlock}`}>
            <h4 className={styles.storyTitle}>Key Features</h4>
            <ul className={styles.featureList}>
              {FEATURED_PROJECT.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.storyGrid}>
            <div className={styles.storyBlock}>
              <h4 className={styles.storyTitle}>Problem</h4>
              <p className={styles.storyText}>{FEATURED_PROJECT.problem}</p>
            </div>
            <div className={styles.storyBlock}>
              <h4 className={styles.storyTitle}>Solution</h4>
              <p className={styles.storyText}>{FEATURED_PROJECT.solution}</p>
            </div>
          </div>

          <div className={`${styles.metaBlock} ${styles.architectureBlock}`}>
            <h4 className={styles.storyTitle}>Architecture Summary</h4>
            <div className={styles.architectureList}>
              {FEATURED_PROJECT.architecture.map((item) => (
                <div key={item.label} className={styles.architectureItem}>
                  <span className={styles.architectureLabel}>{item.label}</span>
                  <span className={styles.architectureValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featuredActions}>
            <a
              className={styles.primaryAction}
              href={FEATURED_PROJECT.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit <ExternalLink size={18} strokeWidth={2} />
            </a>
            <a
              className={styles.secondaryAction}
              href={FEATURED_PROJECT.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <Code2 size={18} strokeWidth={2} />
            </a>
          </div>
        </article>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              summary={project.summary}
              codeUrl={project.codeUrl}
              visitUrl={project.visitUrl}
              Icon={project.icon}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

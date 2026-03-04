import {
  CheckSquare,
  Film,
  LineChart,
  ShoppingCart,
} from "lucide-react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    title: "Ecommerce Website",
    summary: "Manage products, orders, and customer activity through a clean storefront experience.",
    codeUrl: "https://github.com/Oshiyemi/E-Commerce-website",
    visitUrl: "https://kodshopping.netlify.app/",
    icon: ShoppingCart,
  },
  {
    title: "Financial Tracker",
    summary: "Track spending, monitor trends, and review category performance with clear visual insights.",
    codeUrl: "https://github.com/your-username/financial-tracker",
    visitUrl: "https://financial-tracker-demo.example.com",
    icon: LineChart,
  },
  {
    title: "Movie Discovery App",
    summary: "Search titles, save watchlists, and discover trending releases.",
    codeUrl: "https://github.com/Oshiyemi/Movie-tracker-website.git",
    visitUrl: "https://kod-movietracker.netlify.app/",
    icon: Film,
  },
  {
    title: "Task Planner",
    summary: "Organize daily priorities with deadlines and status tracking.",
    codeUrl: "https://github.com/your-username/task-planner",
    visitUrl: "https://task-planner-demo.example.com",
    icon: CheckSquare,
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.headerBlock}>
        <h2 className="header">Projects</h2>
        <p className={styles.copy}>
          A selection of portfolio builds focused on ecommerce, finance,
          entertainment, and productivity workflows.
        </p>
      </div>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
            codeUrl={project.codeUrl}
            visitUrl={project.visitUrl}
            Icon={project.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

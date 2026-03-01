import styles from "./Projects.module.css";
import projectImage from "../../assets/project image.png";

const PROJECTS = [
  {
    title: "Expense Tracker",
    summary: "Track spending with clear analytics and category insights.",
    codeUrl: "https://github.com/your-username/expense-tracker",
    visitUrl: "https://expense-tracker-demo.example.com",
  },
  {
    title: "E-Commerce Dashboard",
    summary: "Manage products, orders, and customer activity efficiently.",
    codeUrl: "https://github.com/your-username/ecommerce-dashboard",
    visitUrl: "https://ecommerce-dashboard-demo.example.com",
  },
  {
    title: "Movie Discovery App",
    summary: "Search titles, save watchlists, and discover trending releases.",
    codeUrl: "https://github.com/Oshiyemi/Movie-tracker-website.git",
    visitUrl: "https://kod-movietracker.netlify.app/",
  },
  {
    title: "Task Planner",
    summary: "Organize daily priorities with deadlines and status tracking.",
    codeUrl: "https://github.com/your-username/task-planner",
    visitUrl: "https://task-planner-demo.example.com",
  },
  {
    title: "Employee Management",
    summary: "Handle employee records, attendance, and team structure.",
    codeUrl: "https://github.com/your-username/employee-management",
    visitUrl: "https://employee-management-demo.example.com",
  },
  {
    title: "Portfolio CMS",
    summary: "Update website content quickly with an admin-friendly panel.",
    codeUrl: "https://github.com/your-username/portfolio-cms",
    visitUrl: "https://portfolio-cms-demo.example.com",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="header">Projects</h2>

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={projectImage} alt={`${project.title} preview`} />
            </div>

            <div className={styles.body}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.actions}>
                <a
                  className={`${styles.actionButton} ${styles.codeButton}`}
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"></path></g></svg>
                  
                </a>
                <a
                  className={`${styles.actionButton} ${styles.visitButton}`}
                  href={project.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={42} d="M11 5h-6v14h14v-6"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="42;0"></animate></path><path strokeDasharray={12} strokeDashoffset={12} d="M13 11l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" to={0}></animate></path><path strokeDasharray={8} strokeDashoffset={8} d="M21 3h-6M21 3v6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to={0}></animate></path></g></svg>
                </a>
              </div>
              <a className={styles.link} href="#contact">
                Discuss this project <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-12C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5H5v2.96c0 .42.48.65.81.39L10 14z"></path><path fill="currentColor" d="M20.5 8H19v4.5c0 1.93-1.57 3.5-3.5 3.5h-4.8l-1.51 1.21c.25.47.74.79 1.31.79H14l4.19 3.35c.33.26.81.03.81-.39V18h1.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5"></path></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

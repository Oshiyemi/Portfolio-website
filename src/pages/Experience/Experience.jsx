import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import styles from "./Experience.module.css";

const EXPERIENCE_ITEMS = [
  {
    role: "Full Stack Developer",
    company: "Rekrut Consulting",
    location: "Lagos, Nigeria",
    timeline: "May 2023 - Present",
    summary:
      "Delivering full-stack product work with a frontend-first mindset, while keeping APIs and data structures dependable and scalable.",
    impacts: [
      "Develop and maintain full-stack web applications using React, Node.js, Express, and PostgreSQL.",
      "Design RESTful APIs that support smooth communication between frontend interfaces and backend services.",
      "Build responsive user interfaces with modern React architecture and strong attention to usability and performance.",
      "Implement scalable database queries and structures that support core application functionality.",
      "Collaborate on feature delivery, code quality improvements, and overall application performance enhancements.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Sidmach Technologies",
    location: "Lagos, Nigeria",
    timeline: "Mar 2024 - Sep 2024",
    summary:
      "Contributed to production-facing frontend delivery in a collaborative engineering environment with a focus on responsive quality.",
    impacts: [
      "Developed responsive web interfaces using JavaScript, React, and Tailwind CSS.",
      "Contributed to frontend implementation work related to the WAEC website.",
      "Collaborated with engineers to debug issues and improve UI quality across devices and screen sizes.",
      "Helped strengthen frontend consistency, responsiveness, and performance in a professional engineering environment.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Frontend Development",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Rekrut Consulting Ltd",
    location: "Lagos, Nigeria",
    timeline: "Jan 2022 - Apr 2023",
    summary:
      "Built strong visual communication fundamentals that now support cleaner interface hierarchy and better frontend presentation choices.",
    impacts: [
      "Designed logos, branding assets, and marketing graphics using Adobe Photoshop.",
      "Produced UI mockups and visual assets that supported web-based projects and digital deliverables.",
      "Maintained visual consistency across brand materials and digital platforms.",
      "Built a strong foundation in layout, hierarchy, and visual communication that now informs frontend UI work.",
    ],
    technologies: [
      "Figma",
      "Adobe Photoshop",
      "Brand Design",
      "UI/UX Mockups",
      "Visual Design",
      
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.pageSection}>
      <div className={`sectionInner ${styles.wrapper}`}>
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.intro}>
            Full-stack and frontend delivery across consulting, product
            interfaces, and design-led work, with a consistent focus on
            usability, maintainable implementation, and polished output.
          </p>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE_ITEMS.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

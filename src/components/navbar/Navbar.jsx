import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo new.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

const SECTION_IDS = ["home", "skills", "about", "projects", "contact"];
const THEME_STORAGE_KEY = "portfolio-theme";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const scrollPosition = window.scrollY + navHeight + 14;

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActive(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo} aria-label="Go to Home section">
        <img src={logo} alt="Portfolio logo" />
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {SECTION_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.link} ${active === id ? styles.active : ""}`}
            aria-current={active === id ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}

        <a href="/cv.pdf" download className={styles.cv}>
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className={styles.cvIcon}
          >
            <path
              fill="currentColor"
              d="M11.625 15.513q-.175-.063-.325-.213l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062t-.375-.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"
            />
          </svg>
        </a>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img
            src={isDark ? sunIcon : moonIcon}
            alt=""
            aria-hidden="true"
            className={styles.themeIcon}
          />
        </button>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 32 32">
	          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h22M5 16h22M5 24h22"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

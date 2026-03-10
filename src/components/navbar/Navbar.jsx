import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/new-logo.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import cv from "../../assets/Kashope CV.pdf";
import { getSectionScrollTop, scrollToSection } from "../../utils/scrollToSection";

const SECTION_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const THEME_STORAGE_KEY = "portfolio-theme";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeRef = useRef("home");
  const frameRef = useRef(0);
  const navRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    const syncNavHeight = () => {
      const navHeight = Math.round(navRef.current?.getBoundingClientRect().height || 72);
      root.style.setProperty("--nav-height", `${navHeight}px`);
    };

    syncNavHeight();
    window.addEventListener("resize", syncNavHeight);

    const resizeObserver =
      typeof window !== "undefined" && "ResizeObserver" in window
        ? new window.ResizeObserver(syncNavHeight)
        : null;

    if (navRef.current && resizeObserver) {
      resizeObserver.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("resize", syncNavHeight);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const navHeight = Math.round(navRef.current?.getBoundingClientRect().height || 72);
      const scrollPosition = window.scrollY + navHeight;
      let nextActive = "home";

      for (const { id } of SECTION_LINKS) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (scrollPosition >= getSectionScrollTop(section)) {
          nextActive = id;
          continue;
        }

        break;
      }

      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    const handleScroll = () => {
      if (frameRef.current !== 0) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        updateActive();
        frameRef.current = 0;
      });
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameRef.current !== 0) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === "dark" ? "light" : "dark"));
  };

  const handleDownloadCv = (event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Kashope Software engineer cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  const handleSectionLinkClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);
    const didScroll = scrollToSection(sectionId, "smooth");

    if (!didScroll) {
      return;
    }

    window.history.replaceState({}, "", `#${sectionId}`);
    activeRef.current = sectionId;
    setActive(sectionId);
  };

  const isDark = theme === "dark";

  return (
    <nav ref={navRef} className={styles.nav} data-site-nav="primary">
      <div className={`sectionInner ${styles.navInner}`}>
        <a
          href="#home"
          className={styles.logo}
          aria-label="Go to Home section"
          onClick={(event) => handleSectionLinkClick(event, "home")}
        >
          <img
            src={logo}
            alt="Portfolio logo"
            className={`${styles.logoImage} ${isDark ? styles.logoDark : ""}`}
          />
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {SECTION_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.link} ${active === item.id ? styles.active : ""}`}
              aria-current={active === item.id ? "page" : undefined}
              onClick={(event) => handleSectionLinkClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={cv}
            download="Kashope oshiyemi Software Engineer cv.pdf"
            className={styles.cv}
            onClick={handleDownloadCv}
          >
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
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h22M5 16h22M5 24h22"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

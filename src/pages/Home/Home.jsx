import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import profileImage from "../../assets/new image.jpg";

function Home() {
  const [showTitle, setShowTitle] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const hoverResetRef = useRef(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowTitle(true);
    }, 3800);

    return () => {
      window.clearTimeout(timeoutId);
      if (hoverResetRef.current) {
        window.clearTimeout(hoverResetRef.current);
      }
    };
  }, []);

  const handlePointerEnter = () => {
    if (showTitle) {
      setIsHovering(true);
    }
  };

  const handlePointerLeave = () => {
    setIsHovering(false);
    if (hoverResetRef.current) {
      window.clearTimeout(hoverResetRef.current);
    }
  };

  const handlePointerDown = (event) => {
    if (!showTitle || event.pointerType !== "touch") {
      return;
    }

    setIsHovering(true);

    if (hoverResetRef.current) {
      window.clearTimeout(hoverResetRef.current);
    }

    hoverResetRef.current = window.setTimeout(() => {
      setIsHovering(false);
    }, 1100);
  };

  const showIntroText = !showTitle || isHovering;

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span
            className={`${styles.kicker} ${showTitle ? styles.kickerReady : ""} ${
              isHovering ? styles.kickerHovering : ""
            }`}
            aria-live="polite"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
          >
            <span
              className={`${styles.kickerInner} ${
                showIntroText ? "" : styles.kickerFlipped
              }`}
            >
              <span className={styles.kickerFaceFront}>Hi I&apos;m Oshiyemi David</span>
              <span className={styles.kickerFaceBack}>Full Stack Developer</span>
            </span>
          </span>
          <h1 className={styles.header}>
            Transforming ideas into reliable and engaging digital products.
          </h1>
          <p className={styles.description}>
            I design and build web applications that balance polished user
            experience with stable backend architecture. I focus on clean code,
            accessible interfaces, and measurable business impact.
          </p>

          <div className={styles.buttons}>
            <a className={styles.primaryButton} href="#projects">
              View Projects <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
	<path fill="currentColor" fillRule="evenodd" d="M3 4a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1h-8.586l-1.707-1.707A1 1 0 0 0 10 4z" clipRule="evenodd"></path>
</svg>
            </a>
            <a className={styles.secondaryButton} href="/cv.pdf" download>
              Download CV <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"/><path fill="currentColor" d="M15.75 2.824c0-.184.193-.301.336-.186q.182.147.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z"/></svg>
            </a>
          </div>

          <div className={styles.quickStats}>
            <span>Open to full-time and freelance work</span>
            <span>Fast collaboration and consistent communication</span>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <div className={styles.profileCardShell}>
            <article className={styles.profileCard} aria-label="Profile card">
              <div className={styles.profileCardMedia}>
                <img
                  className={styles.profileCardImage}
                  src={profileImage}
                  alt="Portrait of developer"
                />
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;

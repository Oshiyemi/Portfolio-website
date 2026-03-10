import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import styles from "./Home.module.css";
import profileImage from "../../assets/new image.jpg";
import cv from "../../assets/Kashope CV.pdf";

const ROTATING_TEXTS = [
  "Hi, I'm Oshiyemi David",
  "Frontend-heavy Fullstack Developer",
];
const PRIMARY_TEXT = ROTATING_TEXTS[1];
const AUTO_ROTATE_DELAY_MS = 3800;
const REVERT_DELAY_MS = 3000;
const TEXT_TRANSITION_MS = 420;
const CREDIBILITY_ITEMS = [
  "Frontend-heavy full-stack developer",
  "4 shipped builds",
  "Reusable UI systems",
  "Open to impactful roles",
];

function getNextText(currentText) {
  const currentIndex = ROTATING_TEXTS.indexOf(currentText);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  return ROTATING_TEXTS[(safeIndex + 1) % ROTATING_TEXTS.length];
}

function Home() {
  const [displayedText, setDisplayedText] = useState(ROTATING_TEXTS[0]);
  const [exitingText, setExitingText] = useState("");
  const [hasAutoRotated, setHasAutoRotated] = useState(false);
  const autoRotateTimeoutRef = useRef(null);
  const revertTimeoutRef = useRef(null);
  const textTransitionTimeoutRef = useRef(null);
  const displayedTextRef = useRef(ROTATING_TEXTS[0]);
  const kickerMeasureRef = useRef(null);
  const [kickerTextWidth, setKickerTextWidth] = useState(null);

  useLayoutEffect(() => {
    const measureNode = kickerMeasureRef.current;
    if (!(measureNode instanceof HTMLElement)) {
      return;
    }

    const nextWidth = Math.ceil(measureNode.getBoundingClientRect().width);
    setKickerTextWidth((previousWidth) =>
      previousWidth === nextWidth ? previousWidth : nextWidth
    );
  }, [displayedText]);

  useEffect(() => {
    const syncWidthOnResize = () => {
      const measureNode = kickerMeasureRef.current;
      if (!(measureNode instanceof HTMLElement)) {
        return;
      }

      const nextWidth = Math.ceil(measureNode.getBoundingClientRect().width);
      setKickerTextWidth((previousWidth) =>
        previousWidth === nextWidth ? previousWidth : nextWidth
      );
    };

    window.addEventListener("resize", syncWidthOnResize);
    return () => {
      window.removeEventListener("resize", syncWidthOnResize);
    };
  }, []);

  function transitionToText(nextText) {
    const currentText = displayedTextRef.current;

    if (currentText === nextText) {
      return;
    }

    setExitingText(currentText);
    setDisplayedText(nextText);
    displayedTextRef.current = nextText;

    if (textTransitionTimeoutRef.current !== null) {
      window.clearTimeout(textTransitionTimeoutRef.current);
    }

    textTransitionTimeoutRef.current = window.setTimeout(() => {
      setExitingText("");
      textTransitionTimeoutRef.current = null;
    }, TEXT_TRANSITION_MS);
  }

  useEffect(() => {
    displayedTextRef.current = displayedText;
  }, [displayedText]);

  useEffect(() => {
    if (!hasAutoRotated) {
      autoRotateTimeoutRef.current = window.setTimeout(() => {
        transitionToText(PRIMARY_TEXT);
        setHasAutoRotated(true);
        autoRotateTimeoutRef.current = null;
      }, AUTO_ROTATE_DELAY_MS);
    }

    return () => {
      if (autoRotateTimeoutRef.current !== null) {
        window.clearTimeout(autoRotateTimeoutRef.current);
        autoRotateTimeoutRef.current = null;
      }
    };
  }, [hasAutoRotated]);

  useEffect(() => {
    return () => {
      if (autoRotateTimeoutRef.current !== null) {
        window.clearTimeout(autoRotateTimeoutRef.current);
        autoRotateTimeoutRef.current = null;
      }

      if (revertTimeoutRef.current !== null) {
        window.clearTimeout(revertTimeoutRef.current);
        revertTimeoutRef.current = null;
      }

      if (textTransitionTimeoutRef.current !== null) {
        window.clearTimeout(textTransitionTimeoutRef.current);
        textTransitionTimeoutRef.current = null;
      }
    };
  }, []);

  const handleKickerClick = () => {
    if (autoRotateTimeoutRef.current !== null) {
      window.clearTimeout(autoRotateTimeoutRef.current);
      autoRotateTimeoutRef.current = null;
    }

    if (!hasAutoRotated) {
      setHasAutoRotated(true);
    }

    transitionToText(getNextText(displayedTextRef.current));

    if (revertTimeoutRef.current !== null) {
      window.clearTimeout(revertTimeoutRef.current);
    }

    revertTimeoutRef.current = window.setTimeout(() => {
      transitionToText(PRIMARY_TEXT);
      revertTimeoutRef.current = null;
    }, REVERT_DELAY_MS);
  };

  return (
    <section id="home" className={styles.homeSection}>
      <div className={`sectionInner ${styles.container}`}>
        <div className={styles.hero}>
          <div className={styles.kickerWrap}>
            <button
              type="button"
              className={`${styles.kicker} ${hasAutoRotated ? styles.kickerReady : ""}`}
              aria-live="polite"
              aria-atomic="true"
              aria-label="Rotate introduction text"
              onClick={handleKickerClick}
            >
              <span className={styles.kickerDot} aria-hidden="true">
                <span className={styles.kickerDotCore}></span>
              </span>
              <span
                className={styles.kickerTextViewport}
                style={
                  kickerTextWidth !== null
                    ? { width: `${kickerTextWidth}px` }
                    : undefined
                }
              >
                {exitingText ? (
                  <span
                    key={`exiting-${exitingText}`}
                    className={`${styles.kickerTextLayer} ${styles.kickerTextExit}`}
                    aria-hidden="true"
                  >
                    {exitingText}
                  </span>
                ) : null}
                <span
                  key={displayedText}
                  className={`${styles.kickerTextLayer} ${styles.kickerTextEnter}`}
                >
                  {displayedText}
                </span>
              </span>
              <span ref={kickerMeasureRef} className={styles.kickerTextMeasure} aria-hidden="true">
                {displayedText}
              </span>
            </button>

            <span className={styles.kickerCue} aria-hidden="true">
              <ArrowLeft size={14} strokeWidth={2} />
            </span>
          </div>
          <h1 className={styles.header}>
            Building polished frontend interfaces and dependable full-stack
            products.
          </h1>
          <p className={styles.description}>
            I design React experiences with strong UX detail, then support them
            with maintainable architecture, pragmatic backend foundations, and
            product-focused engineering decisions.
          </p>

          <div className={styles.buttons}>
            <a className={styles.primaryButton} href="#projects">
              Explore Projects{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 4a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1h-8.586l-1.707-1.707A1 1 0 0 0 10 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className={styles.secondaryButton}
              href={cv}
              download="Kashope Software Engineer CV.pdf"
            >
              Download CV{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M15.75 2.824c0-.184.193-.301.336-.186q.182.147.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z"
                ></path>
              </svg>
            </a>
          </div>

          <div className={styles.quickStats} aria-label="Professional highlights">
            {CREDIBILITY_ITEMS.map((item) => (
              <span key={item}>{item}</span>
            ))}
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
                  decoding="async"
                  fetchPriority="high"
                  sizes="(max-width: 1000px) 78vw, 400px"
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

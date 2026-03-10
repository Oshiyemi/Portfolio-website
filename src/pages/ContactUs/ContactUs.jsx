import ContactForm from "../../components/ContactForm";
import styles from "./Contactus.module.css";

const CONTACT_INFO = {
  phoneDisplay: "+234 704 596 9801",
  phoneHref: "tel:+2347045969801",
  email: "kashopeoshiyemi@gmail.com",
  emailComposeHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=kashopeoshiyemi@gmail.com&su=Project%20or%20Job%20Opportunity",
  whatsappHref: "https://wa.me/2347045969801",
  location: "Open to remote and on-site opportunities",
  linkedin: "https://www.linkedin.com/in/oshiyemikashope/",
  github: "https://github.com/Oshiyemi",
};

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`sectionInner ${styles.wrapper}`}>
        <div className={styles.contactShell}>
          <header className={styles.headerBlock}>
            <span className={styles.badge}>Open for opportunities</span>
            <h2 className={styles.title}>
              Contact me for roles, product work, or collaboration.
            </h2>
            <p className={styles.subtitle}>
              I am available for full-time roles, freelance builds, and product
              collaborations where thoughtful frontend execution and dependable
              delivery matter.
            </p>
          </header>

          <div className={styles.formLane}>
            <ContactForm />
          </div>

          <div className={styles.contactPanel}>
            <div className={styles.socialRow}>
              <a
                className={styles.socialLink}
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  ></path>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className={styles.contactCards}>
              <article className={styles.contactCard}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path
                      d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1.1 1.1 0 0 1 1.1-.3c1.2.4 2.4.6 3.7.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.5 21 3 13.5 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Phone</h3>
                  <a className={styles.cardLink} href={CONTACT_INFO.phoneHref}>
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </article>

              <article className={styles.contactCard}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path
                      d="M3 6.8A2.8 2.8 0 0 1 5.8 4h12.4A2.8 2.8 0 0 1 21 6.8v10.4a2.8 2.8 0 0 1-2.8 2.8H5.8A2.8 2.8 0 0 1 3 17.2zm2.5-.8l6.5 5.2L18.5 6zM19 8l-6.4 5a1 1 0 0 1-1.2 0L5 8v9.2c0 .7.6 1.3 1.3 1.3h11.4c.7 0 1.3-.6 1.3-1.3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Email</h3>
                  <a
                    className={styles.cardLink}
                    href={CONTACT_INFO.emailComposeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </article>

              <article className={styles.contactCard}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path
                      d="M12 2A8 8 0 0 0 4 10c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8m0 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Availability</h3>
                  <p className={styles.cardText}>{CONTACT_INFO.location}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

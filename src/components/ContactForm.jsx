import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../pages/ContactUs/Contactus.module.css";

const FIELD_LIMITS = {
  name: 80,
  email: 120,
  role: 120,
  message: 1200,
};

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  role: "",
  message: "",
  companyWebsite: "",
};

// Paste your EmailJS Service ID into VITE_EMAILJS_SERVICE_ID in .env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// Paste your EmailJS Template ID into VITE_EMAILJS_TEMPLATE_ID in .env
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// Paste your EmailJS Public Key into VITE_EMAILJS_PUBLIC_KEY in .env
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setSubmitStatus({ type: "idle", message: "" });
  };

  const validate = () => {
    const nextErrors = {};
    const nameValue = formData.name.trim();
    const emailValue = formData.email.trim();
    const roleValue = formData.role.trim();
    const messageValue = formData.message.trim();

    if (!nameValue) {
      nextErrors.name = "Please enter your name.";
    } else if (nameValue.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    } else if (nameValue.length > FIELD_LIMITS.name) {
      nextErrors.name = `Name must be ${FIELD_LIMITS.name} characters or fewer.`;
    }

    if (!emailValue) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      nextErrors.email = "Please enter a valid email address.";
    } else if (emailValue.length > FIELD_LIMITS.email) {
      nextErrors.email = `Email must be ${FIELD_LIMITS.email} characters or fewer.`;
    }

    if (roleValue.length > FIELD_LIMITS.role) {
      nextErrors.role = `Role must be ${FIELD_LIMITS.role} characters or fewer.`;
    }

    if (!messageValue) {
      nextErrors.message = "Please enter a message.";
    } else if (messageValue.length > FIELD_LIMITS.message) {
      nextErrors.message = `Message must be ${FIELD_LIMITS.message} characters or fewer.`;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus({ type: "idle", message: "" });

    if (formData.companyWebsite.trim()) {
      setSubmitStatus({ type: "error", message: "Unable to send your message." });
      return;
    }

    if (!validate()) {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS values to .env and try again.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={formRef} className={styles.formCard} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.formTitle}>Send a direct message</h3>
      <p className={styles.formIntro}>
        Share your project scope, role details, or collaboration idea.
      </p>

      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="name"
        required
        maxLength={FIELD_LIMITS.name}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? "name-error" : undefined}
      />
      {errors.name ? (
        <p id="name-error" className={styles.errorText}>
          {errors.name}
        </p>
      ) : null}

      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        id="email"
        name="email"
        type="email"
        placeholder="you@company.com"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        inputMode="email"
        required
        maxLength={FIELD_LIMITS.email}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      {errors.email ? (
        <p id="email-error" className={styles.errorText}>
          {errors.email}
        </p>
      ) : null}

      <label className={styles.label} htmlFor="role">
        Role (Optional)
      </label>
      <input
        className={`${styles.input} ${errors.role ? styles.inputError : ""}`}
        id="role"
        name="role"
        type="text"
        placeholder="Frontend build, full-stack app, bug fixes..."
        value={formData.role}
        onChange={handleChange}
        autoComplete="organization-title"
        maxLength={FIELD_LIMITS.role}
        aria-invalid={Boolean(errors.role)}
        aria-describedby={errors.role ? "role-error" : undefined}
      />
      {errors.role ? (
        <p id="role-error" className={styles.errorText}>
          {errors.role}
        </p>
      ) : null}

      <label className={styles.label} htmlFor="message">
        Message
      </label>
      <textarea
        className={`${styles.input} ${styles.textarea} ${
          errors.message ? styles.inputError : ""
        }`}
        id="message"
        name="message"
        placeholder="Tell me about your role, project, or idea."
        value={formData.message}
        onChange={handleChange}
        required
        maxLength={FIELD_LIMITS.message}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? "message-error" : undefined}
      />
      {errors.message ? (
        <p id="message-error" className={styles.errorText}>
          {errors.message}
        </p>
      ) : null}

      <div className={styles.honeypotField} aria-hidden="true">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
      </div>

      <button className={styles.submitButton} type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send message"}
      </button>

      {submitStatus.type === "success" ? (
        <p className={styles.successText} role="status">
          {submitStatus.message}
        </p>
      ) : null}
      {submitStatus.type === "error" ? (
        <p className={styles.submitErrorText} role="alert">
          {submitStatus.message}
        </p>
      ) : null}
    </form>
  );
}

export default ContactForm;

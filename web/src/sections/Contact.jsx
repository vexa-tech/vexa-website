import React, { useState } from "react";
import "./contact.css";
import { siteContent } from "../config/siteContent";

const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setSubmitState("error");
      setSubmitMessage("Form is not configured yet. Please add the Formspree endpoint.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setSubmitState("success");
        setSubmitMessage("Thanks! Your message was sent successfully.");
        return;
      }

      const responseBody = await response.json().catch(() => null);
      const formspreeError = responseBody?.errors?.[0]?.message;
      setSubmitState("error");
      setSubmitMessage(formspreeError || "Something went wrong while sending your message.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-top">
          <h2>
            {siteContent.contact.headingLines[0]}
            <br />
            {siteContent.contact.headingLines[1]}
          </h2>

          <div className="contact-conversation">
            <p>{siteContent.contact.conversation.label}</p>
            <a href={`mailto:${siteContent.contact.conversation.email}`}>
              {siteContent.contact.conversation.email}
            </a>
          </div>
        </div>

        <div className="contact-divider" />

        <div className="contact-content">
          <div className="contact-copy">
            {siteContent.contact.copyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <span className="contact-shape" aria-hidden="true" />
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              {siteContent.contact.form.fields.map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                  required
                />
              ))}
            </div>

            <textarea
              name="message"
              placeholder={siteContent.contact.form.messagePlaceholder}
              aria-label={siteContent.contact.form.messageLabel}
              rows={5}
              required
            />

            <div className="contact-actions">
              <label className="terms-label">
                <input type="checkbox" name="termsAccepted" value="yes" required />
                <span>{siteContent.contact.form.termsText}</span>
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : siteContent.contact.form.submitLabel}
              </button>
            </div>

            {submitState !== "idle" && submitMessage ? (
              <p role={submitState === "error" ? "alert" : "status"} aria-live="polite">
                {submitMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

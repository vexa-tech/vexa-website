import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import { siteContent } from "../config/siteContent";

const FORMSPREE_FORM_KEY = (process.env.REACT_APP_FORMSPREE_ENDPOINT || "").trim();

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_KEY);
  const isFormConfigured = Boolean(FORMSPREE_FORM_KEY);

  const onSubmit = (event) => {
    if (!isFormConfigured) {
      event.preventDefault();
      return;
    }

    handleSubmit(event);
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

          <form className="contact-form" onSubmit={onSubmit}>
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

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder={siteContent.contact.form.messagePlaceholder}
              aria-label={siteContent.contact.form.messageLabel}
              rows={5}
              required
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <div className="contact-actions">
              <label className="terms-label">
                <input type="checkbox" name="termsAccepted" value="yes" required />
                <span>{siteContent.contact.form.termsText}</span>
              </label>

              <button type="submit" disabled={!isFormConfigured || state.submitting}>
                {state.submitting ? "Sending..." : siteContent.contact.form.submitLabel}
              </button>
            </div>

            {!isFormConfigured ? (
              <p role="alert" aria-live="polite">
                Form is not configured yet. Please add the Formspree endpoint.
              </p>
            ) : null}

            {state.succeeded ? (
              <p role="status" aria-live="polite">
                Thanks! Your message was sent successfully.
              </p>
            ) : null}

            {state.errors?.length ? (
              <p role="alert" aria-live="polite">
                Something went wrong while sending your message.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

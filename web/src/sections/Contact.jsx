import React from "react";
import "./contact.css";
import { siteContent } from "../config/siteContent";

const Contact = () => {
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

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form-grid">
              {siteContent.contact.form.fields.map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
              ))}
            </div>

            <textarea
              placeholder={siteContent.contact.form.messagePlaceholder}
              aria-label={siteContent.contact.form.messageLabel}
              rows={5}
            />

            <div className="contact-actions">
              <label className="terms-label">
                <input type="checkbox" />
                <span>{siteContent.contact.form.termsText}</span>
              </label>

              <button type="submit">{siteContent.contact.form.submitLabel}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

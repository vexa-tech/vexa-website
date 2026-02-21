import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-top">
          <h2>
            Lets Discuss
            <br />
            Your Project
          </h2>

          <div className="contact-conversation">
            <p>Or Start Conversation</p>
            <a href="mailto:info@asdtechnologies.online">info@asdtechnologies.online</a>
          </div>
        </div>

        <div className="contact-divider" />

        <div className="contact-content">
          <div className="contact-copy">
            <p>*Lorem Ipsum Dolor Sit Amet, Consectetur</p>
            <p>Adipisicing Elit. Maecenas Ac Ligula Diam. Etiam</p>
            <p>Commodo Aliquet Sapien At Tristique. Donec Ligula</p>
            <p>Lectus, Aliquam Eget</p>
            <span className="contact-shape" aria-hidden="true" />
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form-grid">
              <input type="text" placeholder="First Name*" aria-label="First Name" />
              <input type="text" placeholder="Last Name*" aria-label="Last Name" />
              <input type="email" placeholder="Email*" aria-label="Email" />
              <input type="tel" placeholder="Phone*" aria-label="Phone" />
              <input type="text" placeholder="Subject*" aria-label="Subject" />
              <input type="text" placeholder="Category*" aria-label="Category" />
            </div>

            <textarea placeholder="Type Message Here*" aria-label="Message" rows={5} />

            <div className="contact-actions">
              <label className="terms-label">
                <input type="checkbox" />
                <span>I accept the terms & Conditions</span>
              </label>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { IconFacebook, IconInstagram } from "../../components/Icons/SocialIcons";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    // Simulate send
    console.log("Sending:", formData);

    // Clear fields
    setFormData({ name: "", email: "", phone: "", message: "" });
    setShowPopup(true);

    // Auto hide after 3 seconds (optional, removing if user wants manual close?
    // User said "show like a pop up" - let's give it a close button or auto fade.
    // Let's do a nice overlay.
  };

  return (
    <section className="contactUsPage">
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupCard">
            <div className="popupIcon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. We’ll get back to you shortly.</p>
            <button className="btnPrimary smallBtn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container contactGrid">
        {/* LEFT: Glass form */}
        <div className="contactLeft">
          <div className="contactKicker">Get in touch</div>
          <h1 className="contactTitle">Contact Us</h1>

          <form className="contactForm" onSubmit={handleSend}>
            <label className="field">
              <span className="label">Name</span>
              <input
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input
                className="input"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="field">
              <span className="label">Phone (optional)</span>
              <input
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="field fieldFull">
              <span className="label">Message</span>
              <textarea
                className="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              />
            </label>

            <button className="btnPrimary fullBtn" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Map + Info Overlay */}
        <div className="contactRight">
          {/* Google Map Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.2743906323658!2d78.562148!3d17.4785652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5845fe4945%3A0xc431e0c873e625f3!2sThrive%20Academy%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thrive Academy Hyderabad Location"
            className="mapFrame"
          />

          <div className="contactInfoBox">
            <div className="infoItem">
              <span className="iconGold">📍</span>
              <span>
                <a href="https://maps.app.goo.gl/sE9cRYToKycrZzF7A" target="_blank" rel="noreferrer">
                  Judy Davidson’s EDGEucation Forum, Hyderabad
                </a>
              </span>
            </div>
            <div className="infoItem">
              <span className="iconGold">📞</span>
              <span><a href="tel:+917207174555">+91 72071 74555</a></span>
            </div>
            <div className="infoItem">
              <span className="iconGold">✉️</span>
              <span><a href="mailto:jdedgeucationforum@gmail.com">jdedgeucationforum@gmail.com</a></span>
            </div>

            <div className="socialRow">
              <a
                href="https://www.facebook.com/share/1BKuU3QcCa/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="socialLink"
                aria-label="Facebook"
              >
                <IconFacebook className="iconSvg" />
              </a>
              <a
                href="https://www.instagram.com/thrive.hyd/"
                target="_blank"
                rel="noreferrer"
                className="socialLink"
                aria-label="Instagram"
              >
                <IconInstagram className="iconSvg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

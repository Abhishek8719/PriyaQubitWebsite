

import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-wrapper">

      <div className="pq-container">
        {/* Device / Panel */}
        <div className="contact-device">

          <div className="contact-container">

          {/* Left Content */}
          <div className="contact-left">
            <div className="contact-label-wrapper">
              <span className="contact-label">
                <span className="material-symbols-outlined">chat_bubble_outline</span>
                Get In Touch
              </span>
            </div>

            <h2>
              Let’s Build Something <br />
              <span>Amazing Together</span>
            </h2>

            <p>
              We deliver cutting-edge technology solutions from
              AI-powered applications to enterprise-grade cloud
              infrastructure. Your digital transformation partner.
            </p>

            <div className="contact-info">
              <p>
                <span className="material-symbols-outlined">call</span>
                Questions? Call us at
              </p>
              <strong>+91 1234567890</strong>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-right">
            <form className="contact-form">
              <label>Your Name</label>
              <input type="text" placeholder="Enter Name" />

              <label>Email Address</label>
              <input type="email" placeholder="Enter Email Address" />

              <label>Your Message</label>
              <textarea placeholder="Tell us about your project..." />

              <button type="submit">
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;

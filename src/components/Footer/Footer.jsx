import './Footer.css';

import logoUrl from '../../assets/icons/priyaqubit-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container pq-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoUrl} alt="PriyaQubit" />
              <h3>PriyaQubit</h3>
            </div>
            <p>
              Tailored Technology Solutions To Drive Your Business
              Transformation. Your Trusted Partner For Digital Success.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <i className="devicon-linkedin-plain"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="devicon-twitter-original"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="devicon-facebook-plain"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <span className="material-symbols-outlined">call</span>
              04035689217
            </p>
            <p>
              <span className="material-symbols-outlined">mail</span>
              care@priyaqubit.com
            </p>
            <p>
              <span className="material-symbols-outlined">location_on</span>
              2/91/20, BP Raju Marg,<br />
              Laxmi Cyber City, Whitefields,<br />
              Kondapur, Telangana 500081
            </p>
          </div>

          {/* Location */}
          <div className="footer-map">
            <h4>Our Location</h4>
            <iframe
              title="PriyaQubit Location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 PriyaQubit. All Rights Reserved.</p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

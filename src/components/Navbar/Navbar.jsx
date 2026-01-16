import './Navbar.css';

export default function Navbar() {
  return (
    <header className="pq-navbar" role="banner">
      <div className="pq-navbar__inner pq-container">
        <a className="pq-navbar__brand" href="#" aria-label="PriyaQubit">
          <strong>
            Priya<span>Qubit</span>
          </strong>
        </a>
        <nav className="pq-navbar__nav" aria-label="Primary">
          <a className="pq-navbar__btn" href="#services">
            Services
          </a>
          <a className="pq-navbar__btn" href="#technology">
            Technology
          </a>
          <a className="pq-navbar__btn" href="#whyUs">
            WhyUs
          </a>
          <a className="pq-navbar__btn" href="#testimonials">
            Testimonials
          </a>
          <a className="pq-navbar__btn" href="#achievements">
            Achivements
          </a>
          <a className="pq-navbar__btn" href="#about">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

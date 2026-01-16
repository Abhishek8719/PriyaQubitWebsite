import { useState } from 'react';
import './Hero.css';
import logoUrl from '../../assets/icons/priyaqubit-logo.png';
import heroBg from '../../assets/images/quantum-network-bg.png';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSuccess(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
			setError(data.message || `Request failed (${response.status})`);
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero">
      {/* Background */}
      <img
        src={heroBg}
        alt="Quantum Network Background"
        className="hero-bg"
      />

      <div className="hero-container pq-container">
        {/* Left content */}
        <div className="hero-left">
          <div className="hero-logo">
            <img src={logoUrl} alt="PriyaQubit logo" />
            <span>PriyaQubit</span>
          </div>

          <h1>
            Build The Future <br />
            With <span>PriyaQubit</span>
          </h1>

          <p>
            We Deliver Cutting-Edge Technology Solutions From
            AI-Powered Applications To Enterprise-Grade Cloud
            Infrastructure. Your Digital Transformation Partner.
          </p>
        </div>

        {/* Right form */}
        <div className="hero-right">
          <form className="hero-card" onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>

            <div>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Tell Us About Your Project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <span className="material-symbols-outlined">send</span>
            </button>

            {success && <p className="success-text">{success}</p>}
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

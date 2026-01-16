import './WhyUs.css';

const whyUsData = [
  {
    title: 'Enterprise Security',
    description: 'Best-in-class security practices protecting your data and infrastructure.',
    icon: 'shield'
  },
  {
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow seamlessly with your business.',
    icon: 'trending_up'
  },
  {
    title: 'Expert Team',
    description: 'Highly skilled professionals with deep industry experience.',
    icon: 'groups'
  },
  {
    title: 'Proven Process',
    description: 'Structured development lifecycle ensuring quality and speed.',
    icon: 'verified'
  },
  {
    title: 'Client-Centric',
    description: 'We prioritize transparency, collaboration, and results.',
    icon: 'favorite'
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support ensuring uninterrupted operations.',
    icon: 'support_agent'
  }
];

const WhyUs = () => {
  return (
    <section id="whyUs" className="whyus">
      <div className="whyus-container pq-container">

        {/* Header */}
        <div className="whyus-header">
          <span className="whyus-label">WHY CHOOSE US</span>
          <h2>
            The PriyaQubit <span className="whyus-highlight">Advantage</span>
          </h2>
          <div className="whyus-divider"></div>
          <p>
            Partner with us and experience the difference that expertise,
            dedication, and innovation can make for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="whyus-grid">
          {whyUsData.map((item, index) => (
            <div key={index} className="whyus-card">
              <div className="whyus-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;

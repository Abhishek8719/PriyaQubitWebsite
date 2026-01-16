import './Services.css';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: 'Web Application',
    description: 'Secure and scalable web solutions tailored to your business.',
    icon: 'language'
  },
  {
    title: 'Mobile Application',
    description: 'Cross-platform mobile apps with modern UI and performance.',
    icon: 'smartphone'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment services.',
    icon: 'cloud'
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights.',
    icon: 'bar_chart'
  },
  {
    title: 'AI Integration',
    description: 'Cutting-edge AI and machine learning solutions.',
    icon: 'psychology'
  },
  {
    title: 'Security Services',
    description: 'Enterprise-grade security and compliance solutions.',
    icon: 'security'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container pq-container">

        {/* Header */}
        <div className="services-header">
          <span className="services-label">OUR SERVICES</span>
          <h2>Comprehensive Technology Solutions</h2>
          <p>
            From concept to deployment, we provide end-to-end
            technology services that transform your business.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

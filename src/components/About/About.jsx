import './About.css';

const statsData = [
  {
    icon: 'groups', // Represents Happy Clients
    value: '500+',
    label: 'Happy Clients'
  },
  {
    icon: 'design_services', // Represents Services
    value: '200+',
    label: 'Services'
  },
  {
    icon: 'task_alt', // Represents Projects Completed
    value: '400+',
    label: 'Projects Completed'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container pq-container">

        {/* Header */}
        <div className="about-header">
          <span className="about-label">ABOUT US</span>

          <h2>
            INNOVATING SOLUTIONS FOR <br />
            REAL-WORLD <span>CHALLENGES</span>
          </h2>
          <div className="about-divider"></div>

          <p>
            Welcome To Priya Qubit, Where Innovation Meets Excellence. We Are A Dynamic And Forward-Thinking
            Organization Dedicated To Transforming Ideas Into Powerful Solutions. With A Passion For Innovation, We
            Strive To Create Products And Services That Empower Businesses, Simplify Lives, And Shape The Future.
            At Priya Qubit, We Believe In The Power Of Knowledge, Innovation And Creativity To Drive Change. Our
            Skilled Team Of Experts Brings Together A Unique Blend Of Scientific Innovation And Dedication To Deliver
            World-Class Solutions. Whether It’s Through Cutting-Edge Technologies, Business-Focused Planning, Or
            Sustainable Practices, Our Goal Is To Make A Positive Difference In The World.
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {statsData.map((item, index) => (
            <div key={index} className="about-stat-card">
              <div className="about-stat-icon-wrapper">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;

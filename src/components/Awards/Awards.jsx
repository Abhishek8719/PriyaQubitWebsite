import './Awards.css';

const awardsData = [
  { year: '2024', title: 'Best IT Services', subtitle: 'Tech Excellence Award' },
  { year: '2023', title: 'Best IT Services', subtitle: 'Tech Excellence Award' },
  { year: '2022', title: 'Best IT Services', subtitle: 'Tech Excellence Award' },
  { year: '2021', title: 'Best IT Services', subtitle: 'Tech Excellence Award' },
  { year: '2020', title: 'Best IT Services', subtitle: 'Tech Excellence Award' },
  { year: '2019', title: 'Best IT Services', subtitle: 'Tech Excellence Award' }
];

const Awards = () => {
  return (
    <section id="achievements" className="awards">
      <div className="awards-container pq-container">

        {/* Header */}
        <div className="awards-header">
          <span className="awards-label">ACHIEVEMENTS</span>
          <h2>AWARDS & RECOGNITION</h2>
          <div className="awards-divider"></div>
          <p>
            Our commitment to excellence has been recognized by
            industry leaders and organizations worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div key={index} className="award-card">
              <span className="award-year">{award.year}</span>
              <h3>{award.title}</h3>
              <p>{award.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;

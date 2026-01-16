import './TechShowcase.css';

const TechShowcase = () => {
  const featuredTechs = [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'WordPress', icon: 'devicon-wordpress-plain colored' }
  ];

  return (
    <div className="tech-showcase">
      {/* <div className="tech-showcase-grid">
        {featuredTechs.map((tech, index) => (
          <div key={index} className="tech-showcase-item">
            <i className={tech.icon}></i>
            <span>{tech.name}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TechShowcase;

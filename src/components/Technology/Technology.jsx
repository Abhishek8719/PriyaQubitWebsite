import './Technology.css';
import TechShowcase from './TechShowcase';


// Icon mapping for technologies
const techIcons = {
  // Frontend
  'React': 'devicon-react-original colored',
  'Angular': 'devicon-angular-plain colored',
  'Vue.js': 'devicon-vuejs-plain colored',
  'Next.js': 'devicon-nextjs-plain',
  'JavaScript': 'devicon-javascript-plain colored',
  'TypeScript': 'devicon-typescript-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'HTML5': 'devicon-html5-plain colored',
  'CSS3': 'devicon-css3-plain colored',
  'Bootstrap': 'devicon-bootstrap-plain colored',
  // Backend
  'Node.js': 'devicon-nodejs-plain colored',
  'Python': 'devicon-python-plain colored',
  'Java': 'devicon-java-plain colored',
  'PHP': 'devicon-php-plain colored',
  'Go': 'devicon-go-plain colored',
  'Express': 'devicon-express-original',
  'Spring Boot': 'devicon-spring-plain colored',
  // Design
  'Figma': 'devicon-figma-plain colored',
  'Adobe XD': 'devicon-xd-plain colored',
  'Sketch': 'devicon-sketch-plain colored',
  'Photoshop': 'devicon-photoshop-plain colored',
  'Illustrator': 'devicon-illustrator-plain colored',
  // Databases
  'MySQL': 'devicon-mysql-plain colored',
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'MongoDB': 'devicon-mongodb-plain colored',
  'Redis': 'devicon-redis-plain colored',
  'Firebase': 'devicon-firebase-plain colored',
  // Mobile
  'React Native': 'devicon-react-original colored',
  'Flutter': 'devicon-flutter-plain colored',
  'Android': 'devicon-android-plain colored',
  'iOS': 'devicon-apple-original',
  'Kotlin': 'devicon-kotlin-plain colored',
  'Swift': 'devicon-swift-plain colored',
  // DevOps & Cloud
  'AWS': 'devicon-amazonwebservices-plain-wordmark colored',
  'Docker': 'devicon-docker-plain colored',
  'Kubernetes': 'devicon-kubernetes-plain colored',
  'GitHub Actions': 'devicon-github-original',
  'Terraform': 'devicon-terraform-plain colored',
  // Testing
  'Jest': 'devicon-jest-plain colored',
  'Cypress': 'devicon-cypressio-plain colored',
  'Selenium': 'devicon-selenium-original colored',
  'Postman': 'devicon-postman-plain colored',
  // CMS & Other
  'WordPress': 'devicon-wordpress-plain colored'
};

const technologyData = [
  {
    category: 'Frontend Development',
    items: [
      'React',
      'Angular',
      'Vue.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Bootstrap'
    ]
  },
  {
    category: 'Backend Development',
    items: [
      'Node.js',
      'Python',
      'Java',
      'PHP',
      'Go',
      'Express',
      'Spring Boot'
    ]
  },
  {
    category: 'Design & Prototyping',
    items: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Photoshop',
      'Illustrator'
    ]
  },
  {
    category: 'Databases & ORM',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Firebase'
    ]
  },
  {
    category: 'Mobile Development',
    items: [
      'React Native',
      'Flutter',
      'Android',
      'iOS',
      'Kotlin',
      'Swift'
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform'
    ]
  },
  {
    category: 'Testing & QA',
    items: [
      'Jest',
      'Cypress',
      'Selenium',
      'Postman'
    ]
  }
];

const Technology = () => {
  return (
    <section id="technology" className="technology">
      <div className="technology-container pq-container">

        {/* Header */}
        <div className="technology-header">
          <h2>Technologies We Use</h2>
          <p>
            We leverage modern technologies and tools to build
            scalable, secure, and high-performance solutions.
          </p>
        </div>

        {/* Featured Tech Showcase */}
        {/* <TechShowcase /> */}

        {/* Groups */}
        <div className="technology-groups">
          {technologyData.map((group, index) => (
            <div key={index} className="technology-group">
              <h3>{group.category}</h3>

              <div className="technology-tags">
                {group.items.map((tech, i) => (
                  <span key={i} className="technology-tag">
                    {techIcons[tech] && (
                      <i className={techIcons[tech]}></i>
                    )}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technology;

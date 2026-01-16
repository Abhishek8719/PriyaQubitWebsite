const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;

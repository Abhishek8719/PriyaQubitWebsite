import { useState } from 'react';
import './Reviews.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, GlobalTech Solutions',
    image: 'https://i.pravatar.cc/200?img=47',
    rating: 5,
    message:
      'The Team’s Deep Understanding Of Cybersecurity Helped Us Achieve ISO 27001 Compliance. Their Proactive Approach To Security Has Been Invaluable To Our Organization.'
  },
  {
    name: 'David Reynolds',
    role: 'Founder, InnovateX',
    image: 'https://i.pravatar.cc/200?img=12',
    rating: 5,
    message:
      'PriyaQubit delivered a robust and scalable solution that exceeded our expectations. Transparent communication and outstanding results have made them our go-to partner.'
  },
  {
    name: 'Emily Carter',
    role: 'Product Manager, NexaSoft',
    image: 'https://i.pravatar.cc/200?img=32',
    rating: 5,
    message:
      'Their technical expertise and design sense helped us launch a high-quality product on time. The attention to detail and proactive support were truly impressive.'
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  // Logic to show partial next card (mocked for visual effect) or just improved carousel structure
  return (
    <section id="testimonials" className="reviews">
      <div className="reviews-container pq-container">

        {/* Header */}
        <div className="reviews-header">
          <span className="reviews-label">TESTIMONIALS</span>
          <h2>Here From Our Clients</h2>
          <p>
            Don’t Just Take Our Word For It. Here’s What Our Valued Clients Have
            To Say About Working With PriyaQubit.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="reviews-carousel-wrapper">
          
          <div className="review-card">
            
            {/* Left Side: Profile */}
            <div className="review-card-left">
              <div className="review-image-wrapper">
                <img src={current.image} alt={current.name} />
              </div>
              <h3>{current.name}</h3>
              <p>{current.role}</p>
            </div>

            {/* Right Side: Content */}
            <div className="review-card-right">
              <div className="review-stars-quote">
                <div className="review-stars">
                  {'★'.repeat(current.rating)}
                </div>
                <div className="review-quote-icon">99</div>
              </div>
              
              <p className="review-message">"{current.message}"</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="review-nav-overlay">
            <button className="nav-btn prev" onClick={prevReview}>
              <span className="material-symbols-outlined">navigate_before</span>
            </button>
            <button className="nav-btn next" onClick={nextReview}>
              <span className="material-symbols-outlined">navigate_next</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Reviews;

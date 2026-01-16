import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What services does PriyaQubit provide?',
    answer:
      'We provide end-to-end technology solutions including web development, AI-powered applications, cloud infrastructure, and enterprise software solutions.'
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Project timelines depend on scope and complexity. Most projects are completed between 4 to 12 weeks.'
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we provide ongoing maintenance, monitoring, and support to ensure long-term success.'
  },
  {
    question: 'Is PriyaQubit suitable for startups?',
    answer:
      'Absolutely. We work with startups, SMEs, and enterprises to build scalable and cost-effective solutions.'
  },
  {
    question: 'How can I get started?',
    answer:
      'You can get started by contacting us through the form below or scheduling a consultation call.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <div className="pq-container">
        <div className="faq-device">

        <h2 className="faq-title">
          Frequently Asked Questions <span>(FAQs)</span>
        </h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className={`faq-icon material-symbols-outlined ${activeIndex === index ? 'rotate' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

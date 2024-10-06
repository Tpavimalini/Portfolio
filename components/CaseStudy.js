import React from 'react';
import './CaseStudy.css';

function CaseStudy() {
  const caseStudies = [
    { date: 'August 2024', event: 'Power BI Workshop', color: '#1f1f7a', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7246552348775329793/' },
    { date: 'June 2024', event: 'Cryptoshield Hackathon - Runner-up', color: '#1f1f7a', link: 'https://example.com/cryptoshield-hackathon' },
    { date: 'March 2024', event: 'Attended React Workshop', color: '#1f1f7a', link: 'https://example.com/react-workshop' },

   
    // Add more case studies with different links here
  ];

  return (
    <div className="timeline-container">
      <h1>Event Timeline</h1>
      <div className="timeline">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{ backgroundColor: item.color }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                  {item.event}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;

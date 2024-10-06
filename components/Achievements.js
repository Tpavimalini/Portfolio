import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    { title: 'Runner-up in Cryptoshield Hackathon', description: 'Financial literacy project with React and ML concepts.' },
    { title: 'Completed Power BI Workshop', description: 'Gained data wrangling and dynamic dashboard skills.' },
    // Add more achievements here
  ];

  const projects = [
    { title: 'Personalized Investment Quiz & Plan Generator', description: 'Developed using React, integrated with portfolio manager.' },
    { title: 'Ecommerce Portfolio', description: 'Displays case studies, technology, and blogs.' },
    // Add more projects here
  ];

  return (
    <div className="achievements-container">
      {/* <h1>Achievements and Projects</h1> */}
      <h1>Achievements</h1>
      <ul>
        {achievements.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
      <h1>Projects</h1>
      <ul>
        {projects.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;

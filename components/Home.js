import React from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <div className="intro-text">
          <h1>Hi, I'm <span className="highlight">PAVIMALINI T</span></h1>
          <h2>MSc Software Systems Student</h2>
          <button className="contact-button">Contact Me</button>
        </div>
         <div className="profile-image">
          <img src="c28c11417bc123879643a07f4312311a.jpg" alt="Profile" />
        </div> 
      </div>
    </div>
  );
}

export default Home;
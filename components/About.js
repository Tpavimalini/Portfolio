import React from 'react';
import './About.css';

function About() {
  return (
    <ul>
      <li className="link-container">
        <img src="linkedin.webp" alt="LinkedIn" className="logo" />
        <a href="https://www.linkedin.com/in/pavi-malini-248035256/">LinkedIn</a>
      </li>
      <li className="link-container">
        <img src="githubb.png" alt="GitHub" className="logo" />
        <a href="https://github.com/Tpavimalini">GitHub</a>
      </li>
      <li className="link-container">
        <img src="leetcode.webp" alt="LeetCode" className="logo" />
        <a href="https://leetcode.com/u/Pavi_Malini/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </li>
      <li className="link-container">
        <img src="email.webp" alt="Email" className="logo" />
        <a href="mailto:tpavimalini@gmail.com">Email</a>
      </li>
      <li className="link-container">
        <img src="hackerrank.png" alt="HackerRank" className="logo" />
        <a href="https://www.hackerrank.com/profile/tpavimalini">HackerRank</a>
      </li>
      <li className="link-container">
        <img src="redditt.png" alt="Reddit" className="logo" />
        <a href="https://www.reddit.com/user/Odd_Dependent5196/">Reddit</a>
      </li>
    </ul>
  );
}

export default About;

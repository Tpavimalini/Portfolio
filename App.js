import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Achievements from './components/Achievements';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback route for debugging */}
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

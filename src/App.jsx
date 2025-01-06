import React from 'react';
import './App.css';

function App() {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="data:image/png;base64,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" alt="Logo" />
        <span>Moodify</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Dropdown Menu */}
      <div className="menu">
        <span className="menu-icon">☰</span>
        <div className="dropdown">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default App;
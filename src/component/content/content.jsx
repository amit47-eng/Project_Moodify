import React from 'react';
import './content.css';
import hony_singh from '../assets/hony_singh.jpg';
import arijit from '../assets/arijit.jpg';
import darsan from '../assets/darsan.jpg';
import image1 from '../assets/image1.jpg'; 
import gippi from '../assets/gippi.jpg'; 

function MainContent() {
  return (
    <div className="main-content">
      <header>
        <h2>Top 2023</h2>
        <nav>
          <span>New Releases</span>
          <span>New Feed</span>
          <span>Shuffle Play</span>
        </nav>
      </header>
      <section className="playlist">
        <div className="playlist-card">
          <h3>Blinding Light</h3>
          <p>Enjoy vivid emotions with this stunning music album. Each track is a story.</p>
          <p>83,012 Likes | 18 Songs, 39 min 43 sec</p>
        </div>
        <div className="popular-artists">
          <h3>Popular Artists</h3>
          <div className="artists-list">
            <div className="artist">
            <img src={hony_singh} alt="The Creator" />
            <span className="artist-name">Hony Singh</span>
            </div>
            <div className="artist">
            <img src={arijit} alt="21 Savage" />
            <span className="artist-name">Ariji Singh</span>
            </div>
            <div className="artist">
            <img src={darsan} alt="6ix9ine" />
            <span className="artist-name">Darsan Rawal</span>
            </div>
            <div className="artist">
            <img src={image1} alt="6ix9ine" />
            <span className="artist-name">Neha Kakkar</span>
            </div>
            <div className="artist">
            <img src={gippi} alt="6ix9ine" />
            <span className="artist-name">Gippy Garewal</span>
            </div>
          </div>
        </div>
        <div className="recently-played">
          <h3>Recently Played</h3>
          <ul>
            <li>
              <span>Mr. Right Now</span>
              <span>Metro Boomin</span>
            </li>
            <li>
              <span>Many Men</span>
              <span>21 Savage</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MainContent;

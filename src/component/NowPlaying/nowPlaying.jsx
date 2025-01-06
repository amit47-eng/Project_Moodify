import React from "react"; 
import "./nowPlaying.css";

function NowPlaying() {
  return (
    <div className="now-playing">
      <h3>Now Playing</h3>
      <div className="song-details">
        <img src="song-thumbnail.jpg" alt="Now Playing" />
        <div>
          <h4>Snowfall</h4>
          <p>Oneheart</p>
        </div>
      </div>
      <ul className="playlist-queue">
        <li>Therapy - Oneheart</li>
        <li>Apathy - Tezce</li>
        <li>Look I'm here - Oneheart</li>
      </ul>
    </div>
  );
}

export default NowPlaying;

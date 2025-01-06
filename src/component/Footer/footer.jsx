import React from "react";
import "./footer.css";

function FooterPlayer() {
  return (
    <div className="footer-player">
      <div className="controls">
        <button>⏮</button>
        <button>▶️</button>
        <button>⏭</button>
      </div>
      <div className="progress-bar">
        <input type="range" min="0" max="100" />
      </div>
      <div className="volume-control">
        <span>🔊</span>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}

export default FooterPlayer;

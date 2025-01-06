import React from "react";
import "./sidebar.css";
// import logo1 from "../assets/logo1.png";

function Sidebar() {
  return (
    <div className="sidebar">
        {/* <img src={logo1} alt="App Logo" class="logo"></img> */}
      <h3>Library</h3>
      <ul>
        <li className="active">Browse</li>
        <li>Songs</li>
        <li>Albums</li>
        <li>Artists</li>
        <li>Radio</li>
      </ul>
      <h3>My Music</h3>
      <ul>
        <li>Recently Played</li>
        <li>Favorite Songs</li>
        <li>Local File</li>
      </ul>
    </div>
  );
}

export default Sidebar;

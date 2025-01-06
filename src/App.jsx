import React from "react";
import Sidebar from "./component/Sidebar/sidebar";
import MainContent from "./component/content/content";
import NowPlaying from "./component/NowPlaying/nowPlaying";
import FooterPlayer from "./component/Footer/footer";
import "./App.css";


function App() {
  return (
    <div className="app-container">
     <Sidebar/>
      <MainContent />
      <NowPlaying />
      <FooterPlayer/>
    </div>
  );
}

export default App;

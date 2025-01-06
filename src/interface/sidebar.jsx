import Content from "../content/content";
import "./sidebar.css";

function Sidebar() {

    return (
<div className="body">
  <div className="sidebar">
    <div>
      <div className="emoji-row">
        <span className="emoji">😊</span>
        <span className="emoji">😔</span>
        <span className="emoji">😝</span>
        <span className="emoji">🥰</span>
      </div>
      <div className="sidebar-options">
        <a href="#">My Account</a>
        <a href="#">Settings</a>
        <a href="#">Help/Support</a>
      </div>
    </div>
  </div>
 <Content/>
</div>
)
}

export default Sidebar;
import React from "react";
import "./style.css";

const siteProps = {
  name: "Yash",
  title: "Frontend Developer",
  email: "yash@example.com",
  gitHub: "https://github.com/yash",
  linkedIn: "https://linkedin.com/in/yash"
};

function App() {
  return (
    <div className="container">
      <h1>{siteProps.name}</h1>
      <p>{siteProps.title}</p>

      <div className="icons">
        <a href={siteProps.gitHub} className="socialIcon">GitHub</a>
        <a href={siteProps.linkedIn} className="socialIcon">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import profile from "../profile.jpg";

function Home() {
  return (
    <div className="container">

      <div className="hero">
        <img src={profile} alt="Profile" className="profile-img" />

        <h1>SINGIREDDY YASHWANTH REDDY</h1>

        <p>
          Computer Science Engineering student at Mahindra University passionate about backend development, APIs, and scalable systems. Experienced in building real-world applications using modern technologies.
        </p>

        <div className="buttons">
          <a href="resume.pdf" target="_blank" rel="noreferrer">📄 Resume</a>
          <a href="https://github.com/Yash4009" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/singireddy-yashwanth-reddy-636680298/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </div>
      </div>

      <h2>Skills</h2>

      <div className="skill">
        <p>C / C++</p>
        <div className="bar"><div style={{width: "85%"}}></div></div>
      </div>

      <div className="skill">
        <p>Python</p>
        <div className="bar"><div style={{width: "80%"}}></div></div>
      </div>

      <div className="skill">
        <p>Java</p>
        <div className="bar"><div style={{width: "75%"}}></div></div>
      </div>

      <div className="skill">
        <p>HTML / CSS</p>
        <div className="bar"><div style={{width: "85%"}}></div></div>
      </div>

      <div className="skill">
        <p>MySQL</p>
        <div className="bar"><div style={{width: "70%"}}></div></div>
      </div>

      <h2>Contact</h2>

      <div className="contact">
        <p>📞 <a href="tel:9010528602">9010528602</a></p>
        <p>📧 <a href="mailto:SINGIREDDYYASHWANTHREDDY4009@GMAIL.COM">Email Me</a></p>
      </div>

    </div>
  );
}

export default Home;
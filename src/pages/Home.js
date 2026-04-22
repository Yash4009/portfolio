import React from "react";
import profile from "../profile.jpg"; // make sure image name matches

function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>
        I am a Computer Science Engineering student at Mahindra University with strong interest in software development and problem solving. I enjoy building scalable backend systems and interactive web applications. I am passionate about learning new technologies and applying them to real-world projects, especially in areas like web development and system design.
      </p>

      <img src={profile} alt="Profile" className="profile-img" />

      <h2>Research Interests</h2>
      <p>Web Development, Backend Systems, Software Engineering, System Design</p>

      <h2>Personal Details</h2>
      <p><strong>Name:</strong> SINGIREDDY YASHWANTH REDDY</p>
      <p><strong>Phone:</strong> 9010528602</p>
      <p><strong>Personal Email:</strong> SINGIREDDYYASHWANTHREDDY4009@GMAIL.COM</p>
      <p><strong>College Email:</strong> SE23UMCS058@MAHINDRAUNIVERSITY.EDU.IN</p>

      <h2>Skills</h2>
      <p>C, C++, Python, Java, Matlab, HTML, CSS, MySQL</p>
    </div>
  );
}

export default Home;
import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="project">
        <h3>Event Management API</h3>
        <ul>
          <li>Built using TypeScript and Express.js with JWT authentication</li>
          <li>Designed event scheduling and multi-type ticket booking system</li>
          <li>Integrated Stripe and PayPal payment simulation</li>
          <li>Implemented QR-based check-in system</li>
          <li>Developed analytics APIs for dashboard insights</li>
        </ul>
        <a href="https://github.com/Yash4009/Event-managment-API" target="_blank" rel="noreferrer">
          🔗 View Code
        </a>
      </div>

      <div className="project">
        <h3>Memory Game</h3>
        <ul>
          <li>Developed interactive web-based memory game</li>
          <li>Implemented card matching and shuffle logic</li>
          <li>Built UI using HTML, CSS, and JavaScript</li>
          <li>Integrated score tracking and game state management</li>
          <li>Used event-driven programming for user interaction</li>
        </ul>
        <a href="https://github.com/jaswanth-student/Memory-Game" target="_blank" rel="noreferrer">
          🔗 View Code
        </a>
      </div>

    </div>
  );
}

export default Projects;
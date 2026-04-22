import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project">
        <h3>Event Management API</h3>
        <p>
          Built an Event Management API using TypeScript and Express.js with JWT authentication.
          Designed event scheduling and multi-type ticket booking system.
          Integrated payment simulation with Stripe and PayPal.
          Implemented QR-based check-in for seamless event entry.
          Developed analytics APIs and added logging and monitoring.
        </p>
        <a href="https://github.com/Yash4009/Event-managment-API" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </div>

      <div className="project">
        <h3>Memory Game</h3>
        <p>
          Designed and developed a web-based Memory Game.
          Implemented card matching and shuffle logic.
          Built UI using HTML, CSS, and JavaScript.
          Integrated score tracking and event-driven interactions.
        </p>
        <a href="#" target="_blank" rel="noreferrer">
          GitHub Link (Add if available)
        </a>
      </div>

    </div>
  );
}

export default Projects;
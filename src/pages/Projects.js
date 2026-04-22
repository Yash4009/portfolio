import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      <div className="project">
        <h3>Event Management API</h3>
        <p>
          Full-featured backend system with JWT authentication, ticket booking,
          Stripe/PayPal integration, QR check-in, and analytics dashboard.
        </p>
        <a href="https://github.com/Yash4009/Event-managment-API" target="_blank" rel="noreferrer">
          🔗 View Code
        </a>
      </div>

      <div className="project">
        <h3>Memory Game</h3>
        <p>
          Interactive browser game with shuffle logic, score tracking,
          and event-driven UI.
        </p>
        <a href="#" target="_blank" rel="noreferrer">
          🔗 Add GitHub Link
        </a>
      </div>

    </div>
  );
}

export default Projects;
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
        <title>
          Viraj's Portfolio Website
        </title>
      </head>

      <body>
        <header>
          <nav>
            <ul role="presentation">
              <li>
                Home
              </li>
              <li>
                Hardware Projects
              </li>
              <li>
                Software Projects
              </li>
              <li>
                Skills
              </li>
              <li>
                Resume
              </li>
              <li>
                Book reviews
              </li>
              <li>
                Blog
              </li>
              <li>
                Vlog
              </li>
              <li>
                Contact
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="profile-section">
            <h1 id="name">
              Viraj B. Kumar
            </h1>
            <h2 id="picture">
              Software Developer at Lazot Technologies
            </h2>
            <h3 id="contact">
              virajkumar12345@gmail.com | +917595959541
            </h3>
            <button id="left-next-button"></button>
            <button id="right-next-button"></button>
          </section>
          <section className="freelance-services">
            <h2 id="freelance">
              FREELANCE SERVICES
            </h2>
            <h3 id="website">
              Design and build full-stack website
            </h3>
            <h3 id="mobile-apps">
              Develop cross-platform mobile apps
            </h3>
            <h3 id="data-science">
              Data science solutions and financial modelling
            </h3>
          </section>
          <section className="contact-link">
            <button id="contact-1">
              Contact me for a quote
            </button>
          </section>
          <section className="tutoring-services">
            <h2 id="tutoring">
              TUTORING SERVICES
            </h2>
            <h3 id="math">
              Mathematics for grades 1-12
            </h3>
            <h3 id="cs">
              Computer Science for grades 1-12
            </h3>
            <h3 id="english">
              English for grades 1-12
            </h3>
          </section>
          <section className="contact-link">
            <button id="contact-2">
              Contact to schedule a trial class
            </button>
          </section>
        </main>
      </body>
  </html>
  );
}

export default App;
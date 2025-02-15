import React from "react";
import "./styles.css";

export default function App() {
  // Function to show hobbies
  const showHobbies = () => {
    alert("My hobbies include coding, gaming, and reading.");
  };

  return (
    <div className="App">
      <header className="text-white text-center">
        <h1>John Mark L. Mayote</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="container text-center my-5">
        <h2>Welcome</h2>
        <p>
          Hi, I'm John Mark L. Mayote, a College student passionate about
          information technology.
        </p>
      </section>

      <section id="about" className="container text-center my-5">
        <h2>About Me</h2>
        <h3>Education</h3>
        <p>Currently studying at Lyceum of Alabang.</p>
        <h3>School Activities</h3>
        <p>Just a simple student.</p>
        <h3>Skills</h3>
        <ul className="list-unstyled">
          <li>Programming (Vb.net, Python)</li>
          <li>Leadership & Teamwork</li>
        </ul>
        <button className="btn btn-danger" onClick={showHobbies}>
          Show Hobbies
        </button>
      </section>

      <section id="contact" className="container my-5">
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input type="text" className="form-control" id="subject" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Send
          </button>
        </form>
      </section>

      <footer className="text-center">
        <p>
          &copy; 2025 John Mark L. Mayote |{" "}
          <a href="#home" className="text-white">
            Back to Top
          </a>
        </p>
      </footer>
    </div>
  );
}

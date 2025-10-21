import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import profileImage from "../images/profile.jpeg";

export default function Home() {
  return (
    <main className="page">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <header className="hero">
        <h1>
          Hi, I’m Jeton!
        </h1>
        <p className="lead">
          <strong>Software Engineer</strong> from Australia.
        </p>
        <p className="lead">
          I’m passionate about building Android apps, clean backends, and scalable systems.
        </p>
        <p className="currentWorking">
          I’m currently working on{" "}
          <a href="#projects" className="link">Streamly</a> and{" "}
          <a href="#projects" className="link">PocketLibrary</a>.
        </p>
      </header>

      {/* PROJECTS */}
      <section id="posts" className="posts-section">
        <div className="posts-container">
          <h2 className="section-title">Projects</h2>

          <div className="posts-grid">
            <article className="post-card">
              <h3>Building Streamly</h3>
              <p>
                A deep dive into my Android app Streamly — building a movie catalog
                with Kotlin, RecyclerView, and Firebase.
              </p>
              <a href="/posts/streamly" className="post-link">Read More →</a>
            </article>

            <article className="post-card">
              <h3>Designing PocketLibrary</h3>
              <p>
                Lessons from building an offline-first book manager with Room and
                Firestore sync for seamless access.
              </p>
              <a href="#" className="post-link">Read More →</a>
            </article>

            <article className="post-card">
              <h3>Film Festival Database</h3>
              <p>
                How I designed and implemented a relational MySQL database for global
                film festivals, complete with triggers and indexes.
              </p>
              <a href="#" className="post-link">Read More →</a>
            </article>

            <article className="post-card">
              <h3>TownSimulator (Java)</h3>
              <p>
                A simulation game using the State and Observer patterns to manage 
                town growth, railways, and resource systems.
              </p>
              <a href="#" className="post-link">Read More →</a>
            </article>

            <article className="post-card">
              <h3>FN Plastering Website</h3>
              <p>
                A professional trade website built with React and Node.js, including 
                a dynamic cost calculator and photo gallery.
              </p>
              <a href="#" className="post-link">Read More →</a>
            </article>
            
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">About</h2>

          {/* top row: image left, text right */}
          <div className="about-row">
            <img src={profileImage} alt="Jeton Hasani" className="about-photo" />

            <div className="about-text">
              <h3 className="about-intro">Hi, I’m Jeton 👋</h3>
              <p>
                I’m a <strong>Software Engineer</strong> from Australia who enjoys
                building elegant, scalable systems and user-friendly mobile apps.
                I’m passionate about Android development, backend architecture,
                and crafting seamless experiences that connect people and ideas.
              </p>
              <p>
                My projects like{" "}
                <a href="/posts/streamly" className="about-link">Streamly</a> and{" "}
                <a href="#" className="about-link">PocketLibrary</a> combine design,
                data, and performance into products people love to use.
              </p>
              <p>
                Outside of code, I’m into business, AI, and creating digital tools
                that help others learn and grow.
              </p>
            </div>
          </div>

          {/* bottom row: full-width text under image */}
          <div className="about-bottom">
            <h3 className="about-subtitle">What I’m passionate about</h3>
            <p>
              I’m largely self-taught and love communities that share knowledge.
              I enjoy technical writing, building educational content, and
              making software more inclusive and accessible. I care about clean
              APIs, great docs, and thoughtful UX that helps people do their best work.
            </p>
          </div>
        </div>
      </section>

      <section id="socials" className="social-section">
        <div className="social-container">
          <h2 className="section-title">Let’s Connect 🌐</h2>
          <p className="social-tagline">
            Whether it’s collaboration, ideas, or opportunities — reach out anytime.
          </p>

          <div className="social-grid">
            <a href="mailto:inbox@jetonhasani.com" className="social-card email">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p>inbox@jetonhasani.com</p>
            </a>

            <a href="https://www.linkedin.com/in/jetonhasani/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
              <div className="icon">💼</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/jetonhasani</p>
            </a>

            <a href="https://github.com/jetonhasani" target="_blank" rel="noopener noreferrer" className="social-card github">
              <div className="icon">💻</div>
              <h3>GitHub</h3>
              <p>github.com/jetonhasani</p>
            </a>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Jeton Hasani
      </footer>
    </main>
  );
}

export const Head = () => (
  <>
    <title>Jeton Hasani</title>
    <meta name="description" content="Software Engineer portfolio of Jeton Hasani" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);

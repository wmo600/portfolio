import { motion } from "framer-motion";
import { useTabs } from "../contexts/TabsContext";
import useTypewriterWithSound from "../hooks/useTypeWriter.js";

// ─── Data ────────────────────────────────────────────────────────────────────

const roles = [
  "AI enthusiast",
  "Cloud developer",
  "Full-stack builder",
  "Automation tinkerer",
];

const stack = [
  "Python",
  "JavaScript",
  "React",
  "AWS",
  "Flutter",
  "Node.js",
  "Power Platform",
  "UiPath",
];

const links = {
  github: "https://github.com/Jack-Wmo-Student",
  linkedin: "https://www.linkedin.com/in/winmoeoo",
  email: "winmoeoo.personal@gmail.com",
  resume: "/CV.pdf",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Home = () => {
  const { openTab } = useTabs();
  const typedRole = useTypewriterWithSound(roles, 50, 1500);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="home"
    >
      {/* whoami */}
      <section className="home-section">
        <h1 className="home-prompt">$ whoami</h1>
        <p className="home-name">Win Moe Oo</p>
        <p className="home-role">
          {"> "}
          <span className="home-role-text">{typedRole}</span>
          <span className="blinking-cursor">█</span>
        </p>
        <p className="home-bio">
          Final-year IT student who likes building things that ship — across
          cloud, full-stack, and a bit of automation. Always chasing the next
          problem worth solving.
        </p>
      </section>

      {/* tech stack */}
      <section className="home-section">
        <h2 className="home-prompt">$ cat stack.txt</h2>
        <div className="home-stack">
          {stack.map((tech) => (
            <span key={tech} className="home-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <section className="home-section">
        <h2 className="home-prompt">$ ls ./links</h2>

        {/* Primary — projects */}
        <button
          className="home-cta home-cta--primary"
          onClick={() => openTab("/projects")}
        >
          → View my projects
        </button>

        {/* Secondary row */}
        <div className="home-cta-row">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta"
          >
            GitHub ↗
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta"
          >
            LinkedIn ↗
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta"
          >
            Resume ↓
          </a>
          <a href={`mailto:${links.email}`} className="home-cta">
            Email ✉
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

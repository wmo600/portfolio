import projects from "../data/projects";

const ProjectList = () => (
  <div className="project-list">
    <h2 className="terminal-command">$ ls ./projects</h2>
    <ul>
      {projects.map((proj) => (
        <li key={proj.name} className="terminal-section">
          <h3 className="terminal-title">{proj.name}</h3>
          {proj.description && <p>{proj.description}</p>}
          {proj.tech && (
            <p className="text-sm text-green-500">Tech: {proj.tech.join(", ")}</p>
          )}
          <div className="mt-1 space-x-4">
            {proj.repo && (
              <a
                href={proj.repo}
                className="terminal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {proj.demo && (
              <a
                href={proj.demo}
                className="terminal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectList;

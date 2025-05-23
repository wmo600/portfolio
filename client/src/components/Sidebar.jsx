import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>EXPLORER</h2>
    <ul>
      <li><Link to="/">Home.jsx</Link></li>
      <li><Link to="/projects">Projects.jsx</Link></li>
      <li><Link to="/contact">Contact.jsx</Link></li>
    </ul>
  </aside>
);

export default Sidebar;

import { motion } from 'framer-motion';

const Projects = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>$ ls ./projects</h1>
    <ul>
      <li>AIFormFiller.js</li>
      <li>MovieExplorer.jsx</li>
      <li>posture-pi.py</li>
    </ul>
  </motion.div>
);

export default Projects;

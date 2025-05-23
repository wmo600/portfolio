import { motion } from 'framer-motion';
import useTypewriterWithSound from '../hooks/useTypeWriter.js';

const Home = () => {
  const typedText = useTypewriterWithSound(
    ['Welcome to my terminal.', 'Explore my projects.', 'Let’s connect!'],
    50, // typeSpeed in ms
    1500
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>$ whoami</h1>
      <p>Win Moe Oo – Final-year IT student eager to develop impactful solutions.</p>

      <h2 className="mt-4">$ echo</h2>
      <p className="typewriter">
        {typedText}
        <span className="blinking-cursor">█</span>
      </p>
    </motion.div>
  );
};

export default Home;

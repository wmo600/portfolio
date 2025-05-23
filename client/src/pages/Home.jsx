import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => (
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
      <Typewriter
        words={[
          'Welcome to my code editor.',
          'Learn more about me.',
          'Let’s connect!',
        ]}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </p>
  </motion.div>
);

export default Home;

import '../styles/contact.css';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    className="contact-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1>$ contact --me</h1>
    <p>
      email: <a href="mailto:Jack.Win.tech@proton.me">Jack.Win.tech@proton.me</a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/winmoeoo"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.linkedin.com/in/winmoeoo
      </a>
    </p>
  </motion.div>
);

export default Contact;

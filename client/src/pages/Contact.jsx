import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>$ contact --me</h1>
    <p>📧 win@example.com</p>
  </motion.div>
);

export default Contact;

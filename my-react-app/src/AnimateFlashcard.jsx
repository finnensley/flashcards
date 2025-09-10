import { motion } from "framer-motion";


function AnimateFlashcard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 3 }} // was 1
    >
    </motion.div>
  );
}

export default AnimateFlashcard;
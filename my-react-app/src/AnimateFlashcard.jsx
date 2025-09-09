import { motion } from "framer-motion";


function AnimateFlashcard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }} // was 1
    >
    </motion.div>
  );
}

export default AnimateFlashcard;
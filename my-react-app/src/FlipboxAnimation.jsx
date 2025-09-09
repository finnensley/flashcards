import { motion } from "framer-motion";
import "./App.css";

function FlipboxAnimation() {
  return (
    <motion.div
      className="flip-box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <h2>Front Side</h2>
        </div>
        <div className="flip-box-back">
          <h2>Back Side</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default FlipboxAnimation;
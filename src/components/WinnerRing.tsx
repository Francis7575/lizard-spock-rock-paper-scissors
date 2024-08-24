import { motion } from "framer-motion";

const WinnerRing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="winner-ring">
    </motion.div>
  );
};

export default WinnerRing
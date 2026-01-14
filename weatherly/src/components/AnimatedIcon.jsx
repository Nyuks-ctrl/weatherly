import { motion } from 'framer-motion';

export default function AnimatedIcon({ code }) {
  const map = {
    0: '☀️',
    1: '🌤️',
    2: '⛅',
    3: '☁️',
    61: '🌧️',
    95: '⛈️'
  };

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ fontSize: '3rem' }}
    >
      {map[code] || '❓'}
    </motion.div>
  );
}

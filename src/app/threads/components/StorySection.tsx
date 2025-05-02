'use client';

import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Our Story
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-zinc-600"
      >
        South Crew Threads is more than apparel—it’s a movement. Each piece carries the vibrant spirit of South India’s street culture, from filter coffee mornings to late-night temple festivals. We blend tradition with modern streetwear to create garments that tell a story.
      </motion.p>
    </div>
  );
}

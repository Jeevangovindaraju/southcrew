// File: src/app/threads/components/Testimonials.tsx
'use client';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: 'Best oversized tees I have ever owned!', author: 'Arun K.' },
  { id: 2, text: 'The quality and fit are unmatched.', author: 'Priya S.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">What Customers Say</h2>
      <div className="max-w-3xl mx-auto space-y-8 px-4">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border-l-4 border-orange-500 pl-6 italic text-zinc-700"
          >
            “{t.text}”
            <footer className="mt-2 text-right font-semibold">— {t.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

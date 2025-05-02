'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'South Oversized Tee', img: '/thread1.jpg' },
  { id: 2, name: 'Crew Hoodie', img: '/thread2.jpg' },
  { id: 3, name: 'Lungi Hybrid Tee', img: '/thread3.jpg' },
  { id: 4, name: 'Filter Coffee Tee', img: '/thread4.jpg' },
  { id: 5, name: 'Temple Print Hoodie', img: '/thread5.jpg' },
  { id: 6, name: 'South Side Long Tee', img: '/thread6.jpg' },
];

export default function ProductGrid() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {products.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <Link href={`/threads/product/${p.id}`}>
            <div className="relative w-full h-64">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-zinc-600 mt-2">Explore the style</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/aurora-background";

export default function HomePage() {
  const cards = [
    {
      name: "Threads",
      desc: "Oversized fits, South-style.",
      image: "/threads.png",
      href: "/threads",
    },
    {
      name: "Motions",
      desc: "Stories in motion – Video & Film.",
      image: "/motions.png",
      href: "/motions",
    },
    {
      name: "Trails",
      desc: "Journeys curated for the soul.",
      image: "/trails.png",
      href: "/trails",
    },
    {
      name: "Vibes",
      desc: "Parties, events & energy unleashed.",
      image: "/vibes.png",
      href: "/vibes",
    },
  ];

  return (
    <AuroraBackground>
      <main className="min-h-screen text-zinc-800 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full text-center flex flex-col items-center"
        >
          {/* Logo */}
          <div className="w-40 h-40 mb-8">
            <Image
              src="/southcrew-hero.png"
              alt="South Crew Mascot"
              width={160}
              height={160}
              className="rounded-full object-contain"
            />
          </div>

          {/* Title */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl font-extrabold mt-12 mb-10"
          >
            South Crew
          </motion.h1>

          <p className="text-lg text-zinc-600 max-w-xl mb-10">
            A collective of style, stories, journeys & vibes. Explore our verticals and join the crew.
          </p>

          {/* Grid of Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {cards.map((card) => (
              <Link key={card.name} href={card.href} className="block group">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl shadow overflow-hidden"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  <div className="bg-white px-4 py-3 text-left">
                    <h2 className="text-xl font-bold text-zinc-800">{card.name}</h2>
                    <p className="text-sm text-zinc-600 mt-1">{card.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </AuroraBackground>
  );
}

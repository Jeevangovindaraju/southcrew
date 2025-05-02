"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          South Crew
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/threads">Threads</Link>
          <Link href="/motions">Motions</Link>
          <Link href="/trails">Trails</Link>
          <Link href="/vibes">Vibes</Link>
        </nav>

        {/* CTA Button */}
        <Button variant="default" className="hidden md:inline-block">
          Join Crew
        </Button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 px-4 pb-4"
        >
          <div className="flex flex-col space-y-3">
            <Link href="/threads">Threads</Link>
            <Link href="/motions">Motions</Link>
            <Link href="/trails">Trails</Link>
            <Link href="/vibes">Vibes</Link>
            <Button variant="default" className="w-fit">
              Join Crew
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

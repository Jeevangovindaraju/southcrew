'use client';

import { motion } from 'framer-motion';

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white ${className}`}
    >
      {/* Wave Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="wave-animation" />
        <div className="wave-animation2" />
        <div className="wave-animation3" />
      </div>

      {/* Page Content */}
      <div className="z-10 w-full">{children}</div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <nav className="relative z-50 mx-6 mt-6 flex items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white shadow-[0_25px_55px_-30px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.25),transparent_45%)]"
      />
      <motion.div
        className="relative z-10 flex items-center space-x-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-purple-500">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SaltedPixel</span>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/services" className="text-white/80 transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/about" className="text-white/80 transition-colors hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-white/80 transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Link href="/get-started" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </nav>
  );
}

export default SiteNav;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <nav className="relative z-50 mx-6 mt-6 flex items-center justify-between gap-6 rounded-full border border-white/10 px-6 py-4 text-white shadow-[0_22px_55px_-35px_rgba(10,26,63,0.85)] backdrop-blur-xl">
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
          className="border border-white/20 bg-white/10 text-white transition-colors hover:border-white/40 hover:bg-white/20"
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

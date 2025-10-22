"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <nav className="relative z-50 flex items-center justify-between p-6" aria-label="Primary">
      <motion.div
        className="flex items-center space-x-8"
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-purple-500">
            <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold">SaltedPixel</span>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/services" className="text-gray-300 transition-colors hover:text-white" data-analytics-goal="nav-services">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 transition-colors hover:text-white" data-analytics-goal="nav-about">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 transition-colors hover:text-white" data-analytics-goal="nav-contact">
            Contact
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Link href="/contact" className="flex items-center gap-2" data-analytics-goal="nav-primary-cta">
            Get a Free Growth Plan
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </nav>
  );
}

export default SiteNav;

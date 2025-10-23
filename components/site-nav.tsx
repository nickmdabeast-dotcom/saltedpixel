"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <nav className="relative z-50 flex items-center justify-between p-6">
      <motion.div
        className="flex items-center space-x-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image
              src="https://res.cloudinary.com/dqbxmbzhj/image/upload/v1761253474/image__1_-removebg-preview_imgupscaler.ai_v1_Fast__2K_wjb0gs.png"
              alt="SaltedPixel logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold">SaltedPixel</span>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/services" className="text-gray-300 transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 transition-colors hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Link href="/contact" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </nav>
  );
}

export default SiteNav;

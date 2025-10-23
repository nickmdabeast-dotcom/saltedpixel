"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import {
  Globe,
  Search,
  Bot,
  Star, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Smartphone,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteNav from "@/components/site-nav";
import { saltedPixelLogoDataUrl } from "@/lib/logo";

// Utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Floating Paths Component
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Service Item Component
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceItem({ icon, title, description, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="text-blue-400 bg-blue-400/10 p-4 rounded-lg mb-4 group-hover:bg-blue-400/20 transition-colors duration-300"
        whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Stat Counter Component
interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-blue-400/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-400/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-white flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-300 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-blue-400 mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}

// Main SaltedPixel Website Component
function SaltedPixelWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Website Design",
      description: "Mobile-friendly, professional websites that make your business stand out from the competition with modern design principles."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Local SEO Optimization",
      description: "Ensure customers actually find you online with strategic local SEO that puts your business on the map."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Automate bookings, reviews, and content creation with intelligent AI tools that work around the clock."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Approach",
      description: "Every website we build is optimized for mobile devices, ensuring perfect performance on all screen sizes."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Strategic content creation and management that engages your audience and drives conversions."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Growth",
      description: "Track your success with detailed analytics and ongoing optimization to maximize your ROI."
    }
  ];

  const stats = [
    { icon: <Target />, value: 150, label: "Local Businesses Helped", suffix: "+" },
    { icon: <TrendingUp />, value: 300, label: "Average Traffic Increase", suffix: "%" },
    { icon: <Star />, value: 98, label: "Client Satisfaction Rate", suffix: "%" },
    { icon: <Award />, value: 24, label: "Months Support Included", suffix: "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        style={{ y: y2 }}
      />

      {/* Navigation */}
      <SiteNav />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium">Complete Growth Systems for Small Business</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
              We Don't Just Build
            </span>
            <span className="block text-white">
              Websites
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            SaltedPixel creates complete growth systems combining modern website design, local SEO, and AI automation. 
            Unlike other developers who disappear after delivery, we provide ongoing support to keep your business ahead of the competition.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
            >
              <Link href="/growth-system" className="flex items-center gap-2">
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Link href="/work" className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-300" />
                View Our Work
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Three Essential Services
            </span>
            <br />
            <span className="text-white">One Complete System</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine website design, SEO, and AI automation into one powerful growth system 
            that gives small businesses the professional presence of enterprise companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Proven Results for Local Business
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            As Binghamton University School of Management students, we understand both technology and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-12 rounded-2xl border border-white/10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the professional online presence of a big brand at an affordable price, 
            with ongoing support that keeps you ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg"
            >
              <Link href="/consultation" className="flex items-center gap-2">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>No commitment required</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src={saltedPixelLogoDataUrl}
                alt="SaltedPixel logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold">SaltedPixel</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 SaltedPixel. Binghamton University School of Management Students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SaltedPixelDemo() {
  return <SaltedPixelWebsite />;
}

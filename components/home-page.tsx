"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Globe,
  Search,
  Bot,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Smartphone,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SiteNav from "@/components/site-nav";
import FooterStrip from "@/components/footer-strip";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 -
      i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 -
      i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg className="h-full w-full text-slate-950" viewBox="0 0 696 316" fill="none">
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

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceItem({ icon, title, description, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300"
        whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ProofPointProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  delay: number;
}

function ProofPoint({ icon, label, description, delay }: ProofPointProps) {
  return (
    <motion.div
      className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-400/10 text-purple-300" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{label}</h3>
      <p className="mt-3 text-gray-300">{description}</p>
    </motion.div>
  );
}

function SaltedPixelWebsite() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isProofInView = useInView(proofRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const services = [
    {
      icon: <Globe className="h-8 w-8" aria-hidden="true" />,
      title: "Modern Website Design",
      description: "Mobile-friendly, professional websites that help local service brands make memorable first impressions.",
    },
    {
      icon: <Search className="h-8 w-8" aria-hidden="true" />,
      title: "Local SEO Visibility",
      description: "Reviews, listings, and content working together so neighbors discover you right when they need you.",
    },
    {
      icon: <Bot className="h-8 w-8" aria-hidden="true" />,
      title: "AI-Powered Automation",
      description: "Smart follow-up, chat, and reminders that respond instantly and keep pipelines warm without extra staff.",
    },
    {
      icon: <Smartphone className="h-8 w-8" aria-hidden="true" />,
      title: "Mobile-First Experience",
      description: "Fast, accessible experiences that feel native on phones, tablets, and desktops alike.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" aria-hidden="true" />,
      title: "Content Strategy",
      description: "Voice-of-customer messaging and on-page storytelling tuned for local intent and conversions.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" aria-hidden="true" />,
      title: "Analytics & Growth",
      description: "Dashboards and reporting that flag wins, gaps, and next experiments for steady compounding growth.",
    },
  ];

  const proofPoints: ProofPointProps[] = [
    {
      icon: <Target className="h-6 w-6" aria-hidden="true" />,
      label: "24-hour first response",
      description: "Every inquiry gets a thoughtful reply and quick next steps in under a day—usually within a few hours.",
      delay: 0,
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden="true" />,
      label: "Founder-led strategy call",
      description: "Collaborate directly with the people who craft your roadmap, not an outsourced account manager.",
      delay: 0.1,
    },
    {
      icon: <TrendingUp className="h-6 w-6" aria-hidden="true" />,
      label: "Typical launch in 14–21 days",
      description: "Focused sprints, transparent project boards, and automation-ready deliverables keep timelines tight.",
      delay: 0.2,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <motion.div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" style={{ y: y1 }} aria-hidden="true" />
      <motion.div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" style={{ y: y2 }} aria-hidden="true" />

      <SiteNav />

      <main id="page-content" className="relative z-10">
        <section ref={sectionRef} className="container mx-auto px-4 pb-32 pt-20">
          <motion.div className="mx-auto max-w-4xl text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div
              className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap className="h-4 w-4 text-blue-400" aria-hidden="true" />
              <span className="text-sm font-medium">Complete Growth Systems for Local Service Brands</span>
            </motion.div>

            <motion.h1
              className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                We build revenue engines
              </span>
              <span className="block text-white">for ambitious small businesses</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-12 max-w-3xl text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              SaltedPixel blends design, local SEO, and automation so every customer touchpoint feels polished and moves the conversation forward. You keep running the business—we keep your growth engine tuned.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center gap-2" data-analytics-goal="hero-primary-cta">
                  Get a Free Growth Plan
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 px-8 py-4 text-lg text-white hover:bg-white/10"
              >
                <Link href="/work" className="flex items-center gap-2" data-analytics-goal="hero-secondary-cta">
                  <Star className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-20" aria-label="Core Services">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Three essential services</span>
              <br />
              <span>One connected system</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
              Website design, local SEO, and automation under one roof so your marketing stays cohesive from first impression to booked appointment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceItem key={service.title} icon={service.icon} title={service.title} description={service.description} delay={index * 0.15} />
            ))}
          </div>
        </section>

        <section ref={proofRef} className="container mx-auto px-4 py-20" aria-label="Proof Points">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl">Proof we move fast with you</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              No inflated vanity metrics—just the commitments our clients feel in every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {proofPoints.map((proof) => (
              <ProofPoint key={proof.label} {...proof} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20" aria-label="Commitments">
          <motion.div
            className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 text-center backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white md:text-4xl">Ready to map your growth plan?</h3>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Share your goals and we’ll reply with a roadmap, budget ranges, and three next steps you can act on immediately—no obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact" className="flex items-center gap-2" data-analytics-goal="cta-section-primary">
                  Get a Free Growth Plan
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="mr-2 h-5 w-5 text-green-400" aria-hidden="true" />
                <span>Founder on every call</span>
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="relative z-10 border-t border-white/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-purple-500">
                  <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-lg font-bold">SaltedPixel</span>
              </div>
              <div className="text-sm text-gray-400">© {new Date().getFullYear()} SaltedPixel. Built in Binghamton, partnering nationwide.</div>
            </div>
            <FooterStrip />
          </div>
        </footer>
      </main>
    </div>
  );
}

export function HomePage() {
  return <SaltedPixelWebsite />;
}

export default HomePage;

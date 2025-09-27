import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Wand2,
  Workflow,
} from "lucide-react"

const heroHighlights = [
  {
    title: "Websites that convert",
    description: "High-performing designs tailored to how your neighbours actually search and buy.",
  },
  {
    title: "Local-first strategy",
    description: "SEO, automations, and nurture campaigns engineered for Upstate New York small businesses.",
  },
  {
    title: "Hands-on partners",
    description: "You work directly with the team shipping your project – no handoffs, no guesswork.",
  },
]

const services = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Signature websites",
    description:
      "From the first wireframe to launch, we craft fast, accessible websites designed to win enquiries and repeat bookings.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Local SEO & content",
    description:
      "Rank for the services that matter. We handle listings, review flows, and keyword-rich content that keeps you visible.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Automation sprints",
    description:
      "Tidy your tech stack with AI-assisted workflows that respond to leads, qualify prospects, and follow up automatically.",
  },
]

const results = [
  { value: "42%", label: "Average lift in qualified enquiries" },
  { value: "12d", label: "Typical turnaround for launch-ready sites" },
  { value: "30+", label: "Local businesses supported since 2022" },
  { value: "95%", label: "Clients on an ongoing growth plan" },
]

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We unpack your goals, audit existing assets, and map the competitive landscape so the strategy matches your reality.",
  },
  {
    step: "02",
    title: "Design & build",
    description:
      "Content, visuals, and development move together. You preview every milestone in a collaborative workspace.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "SEO, analytics, and automations are switched on from day one. We stick around to monitor performance and iterate.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Monthly experiments, reporting, and strategy sessions keep the pipeline warm and your website improving.",
  },
]

const testimonials = [
  {
    quote:
      "SaltedPixel took our dated site and rebuilt it in three weeks. We went from invisible on Google to booking out our schedule.",
    name: "Danielle Whitaker",
    role: "Owner, Riverbend Wellness",
  },
  {
    quote:
      "They feel like an extension of our in-house team. The automations they set up reply to leads faster than we ever could.",
    name: "Miguel Ortiz",
    role: "Director, Southern Tier Events",
  },
]

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950" aria-hidden />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" aria-hidden />
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200/80">Binghamton born. Building nationwide.</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Modern websites and growth systems for local businesses ready to scale
          </h1>
          <p className="mt-6 text-lg text-slate-200 sm:text-xl">
            SaltedPixel combines design, development, and automation under one roof so your small business can look world-class
            without the agency runaround.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-400"
            >
              Start a project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              See our work
            </Link>
          </div>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="flex items-center gap-2 text-base font-semibold text-white">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  {highlight.title}
                </h2>
                <p className="mt-3 text-sm text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200/70">Services</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Everything you need to grow locally</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
            >
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">{service.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200/70">Proven results</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                We partner with founders to remove guesswork and keep the growth flywheel spinning
              </h2>
              <p className="mt-6 text-base text-slate-200">
                Every engagement blends design, engineering, and marketing fundamentals. The result: launch-ready digital assets
                paired with automations that capture and nurture demand while you focus on the work you love.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <Target className="h-4 w-4 text-blue-300" />
                  Conversion-focused UX
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <MessageSquare className="h-4 w-4 text-blue-300" />
                  Automated follow-up
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <Compass className="h-4 w-4 text-blue-300" />
                  Local search visibility
                </span>
              </div>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition duration-200 hover:border-blue-400/60 hover:bg-white/10"
                >
                  <dt className="text-3xl font-semibold text-white">{result.value}</dt>
                  <dd className="mt-3 text-sm text-slate-200">{result.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200/70">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A collaborative process designed for momentum</h2>
          <ol className="mt-12 grid gap-8 lg:grid-cols-4">
            {process.map((item) => (
              <li key={item.step} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-lg font-semibold text-blue-200">
                  {item.step}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200/70">Client stories</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Local teams seeing national-level results</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-200 hover:border-blue-400/60 hover:bg-white/10"
              >
                <Wand2 className="h-5 w-5 text-blue-300" />
                <blockquote className="mt-4 text-base text-slate-200">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-slate-400">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                  <span className="mx-2">•</span>
                  {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/40 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200/70">Ready when you are</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s build your next growth channel</h2>
          <p className="mt-6 text-base text-slate-200">
            Whether you need a full rebuild or you are finally ready to automate the busywork, our team will put together a
            roadmap tailored to your goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-400"
            >
              Book a consultation
              <Rocket className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              Talk with the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

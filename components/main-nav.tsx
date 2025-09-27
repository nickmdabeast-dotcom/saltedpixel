"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Growth System", href: "/growth-system" },
  { label: "Contact", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-blue-300"
          onClick={closeMenu}
        >
          Salted<span className="text-blue-400">Pixel</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors",
                pathname === item.href ? "text-white" : "text-slate-300 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-slate-100 transition hover:border-blue-400 hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-white/10 bg-slate-950/95 px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white",
                )}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="block rounded-lg bg-blue-500 px-3 py-2 text-base font-semibold text-white transition hover:bg-blue-400"
              onClick={closeMenu}
            >
              Start a project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default MainNav

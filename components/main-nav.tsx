"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, Sparkles, MessageSquare } from "lucide-react"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Services", url: "/services", icon: Sparkles },
  { name: "Work", url: "/work", icon: Briefcase },
  { name: "Contact", url: "/contact", icon: MessageSquare },
]

export function MainNav() {
  return <NavBar items={navItems} />
}

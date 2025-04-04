"use client"
import { useState } from "react"
import Link from "next/link"
import { GreekSymbol } from "./decorative/greek-symbol"
import { ThemeToggle } from "./theme-toggle"
import { Github, Twitter, Linkedin, Mail, AppWindow, Info, Briefcase, FolderKanban, FileText, Phone, Menu, X } from "lucide-react"

interface StackedNavbarProps {
  currentPage: string
}

export function StackedNavbar({ currentPage }: StackedNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "ABOUT", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "SERVICES", path: "/services", icon: <FolderKanban className="w-4 h-4" /> },
    { name: "WORKS", path: "/works", icon: <AppWindow className="w-4 h-4" /> },
    { name: "CONTACT", path: "/contact", icon: <Phone className="w-4 h-4" /> },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
  ]

  return (
    <header className="border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <GreekSymbol symbol="V" size="sm" animated />
            <Link href="/" className="text-2xl font-serif text-white">VOLTERRA</Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6 text-slate-300">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`hover:text-yellow-300 transition-colors flex items-center gap-2 ${
                    item.name === currentPage ? "text-yellow-300" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 py-4">
          <div className="container mx-auto px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 hover:text-yellow-300 transition-colors flex items-center gap-2 ${
                  item.name === currentPage ? "text-yellow-300" : "text-slate-300"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-slate-400 hover:text-yellow-300 transition-colors p-2 rounded-full border border-yellow-300/30"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      {/* Bottom row - Secondary links and social links */}
      <div className="border-t border-slate-700/30 hidden md:block">
        <div className="container mx-auto p-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-slate-400">
              <Link href="/blog" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                BLOG
              </Link>
              <Link href="/careers" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                CAREERS
              </Link>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-yellow-300 transition-colors p-2 rounded-full border border-yellow-300/30"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

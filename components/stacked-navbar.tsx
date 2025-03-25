import Link from "next/link"
import { GreekSymbol } from "./decorative/greek-symbol"
import { ThemeToggle } from "./theme-toggle"
import { Github, Twitter, Linkedin, Mail, Home, Info, Briefcase, FolderKanban, FileText, Phone } from "lucide-react"

interface StackedNavbarProps {
  currentPage: string
}

export function StackedNavbar({ currentPage }: StackedNavbarProps) {
  const navItems = [
    { name: "HOME", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "ABOUT", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "SERVICES", path: "/services", icon: <Briefcase className="w-4 h-4" /> },
    { name: "WORKS", path: "/works", icon: <FolderKanban className="w-4 h-4" /> },
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
      {/* Top row - Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GreekSymbol symbol="Ν" size="sm" animated />
            <span className="text-2xl font-serif text-white">VOLTERRA</span>
          </div>
          <div className="flex items-center gap-6">
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
        </div>
      </div>

      {/* Bottom row - Secondary links and social links */}
      <div className="bg-slate-900/50 border-t border-slate-700/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-slate-400">
              <Link href="/blog" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
                <FileText className="w-4 h-4" />
                BLOG
              </Link>
              <Link href="/careers" className="hover:text-yellow-300 transition-colors flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                CAREERS
              </Link>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-yellow-300 transition-colors"
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


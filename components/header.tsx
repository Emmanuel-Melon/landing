import Link from "next/link"
import { GreekSymbol } from "./decorative/greek-symbol"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  currentPage: string
}

export function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "WORKS", path: "/works" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header className="border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
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
                  className={`hover:text-yellow-300 transition-colors ${
                    item.name === currentPage ? "text-yellow-300" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}


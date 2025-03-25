import { GreekSymbol } from "./decorative/greek-symbol"
import { Separator } from "./decorative/separators"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white">Volterra</h3>
            <p className="text-slate-300">
              Powering the future of software development with divine engineering solutions.
            </p>
            <GreekSymbol symbol="Ν" size="md" animated />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white">Contact</h3>
            <p className="text-slate-300">hello@volterra.dev</p>
            <p className="text-slate-400 text-sm">We aim to respond within 24 hours</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <Separator variant="greek" className="my-8" />
        <div className="text-center text-slate-400">
          <p>© 2024 Volterra. Blessed by Zeus himself.</p>
        </div>
      </div>
    </footer>
  )
}


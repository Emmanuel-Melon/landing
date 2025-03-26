import type React from "react"
import { Lightbulb, Cpu } from "lucide-react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface DualCTAProps {
  title?: string
  leftTitle?: string
  leftDescription?: string
  leftIcon?: React.ReactNode
  rightTitle?: string
  rightDescription?: string
  rightIcon?: React.ReactNode
  primaryButtonText?: string
  primaryButtonLink?: string
}

export function DualCTA({
  title = "How We Work",
  leftTitle = "Bring us your idea",
  leftDescription = "We'll transform it into a successful product and support you along the way.",
  leftIcon = <Lightbulb className="w-12 h-12 text-yellow-300 mb-6" />,
  rightTitle = "Focus on your business",
  rightDescription = "We'll take care of the tech, so you can concentrate on what you do best.",
  rightIcon = <Cpu className="w-12 h-12 text-yellow-300 mb-6" />,
  primaryButtonText = "Start Your Project",
  primaryButtonLink = "/contact",
}: DualCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-white">{title}</h2>
          <p>At Volterra, we embrace creativity and communication</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-8">
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
              <div className="bg-slate-900/80 p-12 flex flex-col items-center text-center h-full">
                {leftIcon}
                <h3 className="text-3xl font-serif text-white mb-4">{leftTitle}</h3>
                <p className="text-slate-300 text-lg mb-6">{leftDescription}</p>
              </div>
            </div>

            <div className="relative p-8">
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
              <div className="bg-slate-900/80 p-12 flex flex-col items-center text-center h-full">
                {rightIcon}
                <h3 className="text-3xl font-serif text-white mb-4">{rightTitle}</h3>
                <p className="text-slate-300 text-lg mb-6">{rightDescription}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
              <Link href={primaryButtonLink} className="flex items-center gap-2">
                {primaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


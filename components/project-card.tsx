import type React from "react"
import { Border } from "./decorative/borders"
import { Lightning } from "./decorative/lightning"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  location: string
  description: string
  technologies: string[]
  icon: React.ReactNode
  tagline: string
  color?: "yellow" | "green"
  reversed?: boolean
  borderVariant?: "zeus" | "olympus" | "scroll"
}

export function ProjectCard({
  title,
  location,
  description,
  technologies,
  icon,
  tagline,
  color = "yellow",
  reversed = false,
  borderVariant = "zeus",
}: ProjectCardProps) {
  const colorClass = color === "yellow" ? "bg-yellow-300" : "bg-emerald-500"

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={`${reversed ? "order-2 md:order-1" : ""}`}>
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colorClass}`} />
            <span className="text-sm text-slate-400 uppercase tracking-wider">{location}</span>
          </div>
          <h2 className="text-4xl font-serif text-white">{title}</h2>
          <p className="text-slate-300">{description}</p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div>
            <Button className="group flex items-center gap-2 bg-yellow-300 text-slate-900 hover:bg-yellow-400">
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      <div className={`${reversed ? "order-1 md:order-2" : ""}`}>
        <Border variant={borderVariant}>
          <div className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lightning intensity="low" className="w-full h-full opacity-20" />
                </div>
                <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                  <div className="w-16 h-16 text-yellow-300 mx-auto mb-4">{icon}</div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                    <p className="text-slate-400">{tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Border>
      </div>
    </div>
  )
}


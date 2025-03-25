import { Border } from "./decorative/borders"
import { ArrowRight } from "lucide-react"

interface Service {
  category: string
  title: string
  description: string
  color?: "green" | "orange"
}

interface ServicesGridProps {
  title: string
  services: Service[]
}

export function ServicesGrid({ title, services }: ServicesGridProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-white mb-12 border-b border-slate-700/50 pb-4">{title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Border key={index} variant="scroll" className="bg-slate-800/30">
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        service.color === "orange" ? "bg-yellow-300" : "bg-emerald-500"
                      }`}
                    />
                    <span className="text-sm text-slate-400 uppercase tracking-wider">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>
              </Border>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


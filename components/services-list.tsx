import { ArrowRight } from "lucide-react"

interface ServiceItem {
  category: string
  title: string
  description: string
}

interface ServicesListProps {
  title: string
  description: string
  services: ServiceItem[]
}

export function ServicesList({ title, description, services }: ServicesListProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-5xl font-serif text-white mb-8">{title}</h2>
              <p className="text-slate-300 text-lg">{description}</p>
            </div>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-b border-slate-700/50 pb-8 hover:border-yellow-300/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="text-sm text-slate-400 uppercase tracking-wider">{service.category}</div>
                    <h3 className="text-2xl font-serif text-white group-hover:text-yellow-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 max-w-2xl">{service.description}</p>
                  </div>
                  <ArrowRight className="text-slate-400 group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


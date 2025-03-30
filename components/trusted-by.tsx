"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

const clients = [
  { name: "Life Capsule", location: "Utah, USA" },
  { name: "NotePilot", location: "East Africa" },
  { name: "TradeHub24", location: "London, UK" },
  { name: "OpenEval", location: "Texas, USA" },
  { name: "Grace Estates", location: "Kampala, Uganda" },
]

export function TrustedBy() {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ x: "-100%", transition: { duration: 20, ease: "linear" } })
      controls.set({ x: "100%" })
      await controls.start({ x: "0%", transition: { duration: 0 } })
      sequence()
    }
    sequence()
  }, [controls])

  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-12">
          Trusted By Innovative Companies
        </h2>
        <motion.div 
          className="flex space-x-16"
          animate={controls}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex-shrink-0 text-center group cursor-default relative p-4 w-64">
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-serif text-white mb-1 group-hover:text-yellow-300 transition-colors">
                {client.name}
              </h3>
              <p className="text-sm text-slate-400">{client.location}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

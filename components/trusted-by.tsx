"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Life Capsule", location: "Utah, USA" },
  { name: "NotedPilot", location: "East Africa" },
  { name: "TradeHub24", location: "United Kingdom" },
  { name: "Cookie Club", location: "Kampala, Uganda" },
]

export function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-12 border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-12"
          >
            Trusted By Innovative Companies
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="text-center group cursor-default"
              >
                <h3 className="text-xl font-serif text-white mb-1 group-hover:text-yellow-300 transition-colors">
                  {client.name}
                </h3>
                <p className="text-sm text-slate-400">{client.location}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

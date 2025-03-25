"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface Stat {
  label: string
  value: string
}

interface ExperienceImpactProps {
  title?: string
  description?: string
  badges?: string[]
  stats?: Stat[]
}

export function ExperienceImpact({
  title = "Experience & Impact",
  description = "We've had the privilege of working with amazing companies and teams, contributing to impactful projects and delivering exceptional software solutions.",
  badges = ["Since 2022", "3 Countries"],
  stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Delivered", value: "8+" },
    { label: "Satisfied Clients", value: "5+" },
  ],
}: ExperienceImpactProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.h2 variants={itemVariants} className="text-5xl font-serif text-white mb-8">
                {title}
              </motion.h2>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                    <span className="text-sm text-slate-300">{badge}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={itemVariants} className="text-slate-300 text-lg">
                {description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="border-b border-slate-700/50 pb-4">
                  <div className="text-slate-400">{stat.label}</div>
                  <div className="text-4xl font-serif text-yellow-300">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


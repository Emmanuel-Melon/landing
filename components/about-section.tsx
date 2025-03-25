"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function AboutSection() {
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
                About <span className="text-yellow-300">Volterra</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-8">
                Founded in 2022, Volterra is a dynamic software agency delivering exceptional solutions from the heart
                of Africa to clients worldwide. We combine technical excellence with creative energy to build powerful
                software that solves complex problems. Our team brings together expertise in distributed systems,
                location-based applications, and innovative SaaS solutions.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button className="group flex items-center gap-2 bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div variants={itemVariants} className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center p-8">
                  <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                    <div className="text-center">
                      <h3 className="text-2xl font-serif text-white mb-2">Forging Digital Excellence</h3>
                      <p className="text-slate-300">From Kigali to the World</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

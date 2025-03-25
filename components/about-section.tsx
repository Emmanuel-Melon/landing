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

              <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-6">
                Founded in 2022, Volterra is a dynamic software agency delivering exceptional solutions from the heart
                of Africa to clients worldwide. We combine technical excellence with creative energy to build powerful
                software that solves complex problems.
              </motion.p>

              <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-8">
                Our team brings together expertise in distributed systems, location-based applications, and innovative
                SaaS solutions. We believe in the transformative power of technology and are committed to helping our
                clients achieve their digital ambitions.
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

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  title: "Our Mission",
                  description:
                    "To deliver exceptional software solutions that empower businesses to achieve their goals and transform their industries.",
                },
                {
                  title: "Our Vision",
                  description:
                    "To be the leading software agency in East Africa, known for technical excellence, innovation, and client satisfaction.",
                },
                {
                  title: "Our Values",
                  description:
                    "Technical excellence, creative energy, global perspective, and a commitment to delivering exceptional results.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative p-6">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                  <div className="bg-slate-900/80 p-6">
                    <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


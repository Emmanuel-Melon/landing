"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface CaseStudyIntroProps {
  title?: string
  subtitle?: string
}

export function CaseStudyIntro({
  title = "Featured Case Study",
  subtitle = "How we helped NotedPilot transform East African business reviews"
}: CaseStudyIntroProps) {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1 rounded-full">CASE STUDY</div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl font-serif text-white mb-4">
            {title}
          </motion.h2>

          <motion.h3 variants={itemVariants} className="text-2xl font-serif text-yellow-300 mb-6">
            {subtitle}
          </motion.h3>

        </motion.div>
      </div>
    </section>
  )
}


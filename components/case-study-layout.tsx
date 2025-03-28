"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Lightbulb, AlertCircle, CheckCircle, Code, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Separator } from "./decorative/separators"
import { StackedNavbar } from "./stacked-navbar"
import { Footer } from "./footer"
import { Border, RunicBorder } from "./decorative/borders"

interface Achievement {
  title: string
  description: string
}

interface LinkItem {
  title: string
  url: string
}

interface ProjectLink {
  title: string
  slug: string
}

interface CaseStudyLayoutProps {
  title: string
  location: string
  image: string
  impact: {
    achievements: Achievement[]
  }
  inspiration: string
  problem: string
  solution: string
  technology: string
  links: LinkItem[]
  nextProject?: ProjectLink
  prevProject?: ProjectLink
}

export function CaseStudyLayout({
  title,
  location,
  image,
  impact,
  inspiration,
  problem,
  solution,
  technology,
  links,
  nextProject,
  prevProject,
}: CaseStudyLayoutProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <StackedNavbar currentPage="WORKS" />

      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              {prevProject ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-300/30 text-yellow-300 hover:bg-yellow-300/10"
                >
                  <Link href={`/works/${prevProject.slug}`} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    {prevProject.title}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-300/30 text-yellow-300 hover:bg-yellow-300/10"
                >
                  <Link href="/works" className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Back to Works
                  </Link>
                </Button>
              )}

              {nextProject && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-300/30 text-yellow-300 hover:bg-yellow-300/10"
                >
                  <Link href={`/works/${nextProject.slug}`} className="flex items-center gap-2">
                    {nextProject.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-300" />
              <span className="text-sm text-slate-400 uppercase tracking-wider">{location}</span>
            </div>

            <h1 className="text-6xl font-serif text-white mb-6">{title}</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Explore the journey of {title}, from inspiration to impact.
            </p>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="max-w-6xl mx-auto space-y-24"
          >
            <motion.div variants={itemVariants}>
              <RunicBorder variant="runes">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full rounded-lg" />
              </RunicBorder>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">Inspiration</h3>
                        <p className="text-slate-300">{inspiration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">Problem</h3>
                        <p className="text-slate-300">{problem}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">Solution</h3>
                        <p className="text-slate-300">{solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Code className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-serif text-white mb-2">Technology</h3>
                        <p className="text-slate-300">{technology}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif text-white mb-12 text-center">Impact & Achievements</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {impact.achievements.map((achievement, index) => (
                  <Border key={index} variant="scroll">
                    <div className="bg-slate-900/80 p-8 h-full">
                      <h3 className="text-xl font-serif text-white mb-4">{achievement.title}</h3>
                      <p className="text-slate-300">{achievement.description}</p>
                    </div>
                  </Border>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif text-white mb-12 text-center">Related Resources</h2>
              <Border variant="zeus">
                <div className="bg-slate-900/80 p-8">
                  <ul className="space-y-4">
                    {links.map((link, index) => (
                      <li key={index} className="border-b border-slate-700/50 pb-4 last:border-0 last:pb-0">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-between items-center text-yellow-300 hover:text-yellow-400 transition-colors"
                        >
                          <span>{link.title}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Border>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
                <div className="relative z-10">
                  <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-serif text-white">Ready to Start Your Own Project?</h2>
                    <p className="text-xl text-slate-300">
                      Let's discuss how we can help bring your ideas to life with our technical expertise and creative
                      approach.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300"
                      >
                        <Link href="/works">View More Works</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

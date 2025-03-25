"use client"

import { motion } from "framer-motion"
import { StackedNavbar } from "./stacked-navbar"
import { Trophy, Users, Lightbulb, AlertCircle, CheckCircle2, Code } from "lucide-react"

interface TeamMember {
  name: string
  role: string
}

interface CaseStudyProps {
  title: string
  location: string
  impact: {
    achievements: { title: string; description: string }[]
  }
  team: TeamMember[]
  inspiration: string
  problem: string
  solution: string
  technology: string
  links?: { title: string; url: string }[]
}

export function CaseStudyLayout({
  title,
  location,
  impact,
  team,
  inspiration,
  problem,
  solution,
  technology,
  links,
}: CaseStudyProps) {
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

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Case Study</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">{location}</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">{title}</h1>
          </div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 py-16 space-y-24"
      >
        {/* Impact Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-300" />
            <h2 className="text-2xl text-white">Impact</h2>
          </div>
          <div className="grid gap-6">
            {impact.achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl text-white">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-yellow-300" />
            <h2 className="text-2xl text-white">Team</h2>
          </div>
          <div className="grid gap-4">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Users className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-white">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          {links && links.length > 0 && (
            <>
              <h3 className="text-lg text-white mt-8">Relevant Links</h3>
              <div className="grid gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-slate-800/50 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </>
          )}
        </motion.section>

        {/* Project Details */}
        <motion.section variants={itemVariants} className="grid gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl text-white">Inspiration</h2>
            </div>
            <p className="text-slate-300">{inspiration}</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl text-white">Problem</h2>
            </div>
            <p className="text-slate-300">{problem}</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl text-white">Solution</h2>
            </div>
            <p className="text-slate-300">{solution}</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl text-white">Technology</h2>
            </div>
            <p className="text-slate-300">{technology}</p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

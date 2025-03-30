import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ServicesList } from "@/components/services-list"
import { DualCTA } from "@/components/dual-cta"
import { WorkProcess } from "@/components/work-process"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="SERVICES" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Expertise</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              OUR <span className="text-yellow-300">SERVICES</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Comprehensive software development services tailored to your business needs. From concept to deployment,
              we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <AnimatedSection>
        <section id="how-we-work">
          <DualCTA
            primaryButtonText="Start Your Project"
            primaryButtonLink="/contact"
          />
        </section>
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* Work Process */}
      <AnimatedSection>
        <WorkProcess />
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* Areas of Focus (moved from homepage) */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-serif text-white mb-12 text-center">AREAS OF FOCUS</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    category: "SYSTEM ARCHITECTURE",
                    title: "Distributed Systems",
                    description: "Building scalable, fault-tolerant systems with the power of Zeus's lightning.",
                  },
                  {
                    category: "CLOUD INFRASTRUCTURE",
                    title: "Cloud Mastery",
                    description: "Command the digital heavens with our cloud expertise and deployment strategies.",
                  },
                  {
                    category: "DEVELOPMENT",
                    title: "Full-Stack Solutions",
                    description: "End-to-end development with divine precision and thunderous performance.",
                  },
                  {
                    category: "INNOVATION",
                    title: "Creative Engineering",
                    description: "Innovative solutions forged in the workshops of Hephaestus himself.",
                  },
                ].map((service, index) => (
                  <div key={index} className="relative p-10">
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                    <div className="bg-slate-900/80 p-6 h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-yellow-300" />
                        <span className="text-sm text-slate-400 uppercase tracking-wider">{service.category}</span>
                      </div>
                      <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-serif text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-slate-300">
                Let's discuss how our services can help you achieve your business goals.
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
                  <Link href="/works">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Border } from "@/components/decorative/borders"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { ServicesList } from "@/components/services-list"
import { FAQSection } from "@/components/faq-section"
import { DualCTA } from "@/components/dual-cta"
import { Testimonials } from "@/components/testimonials"
import { ExperienceImpact } from "@/components/experience-impact"
import { AboutSection } from "@/components/about-section"
import { CaseStudyIntro } from "@/components/case-study-intro"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="HOME" />

      {/* Hero Section - simplified messaging */}
      <section className="relative overflow-hidden border-b border-slate-700/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzQsIDE3OSwgOCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Software Engineering</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              POWERFUL <span className="text-yellow-300">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              We transform complex challenges into elegant, scalable software solutions. Our team delivers high-quality
              code with precision and expertise.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* How We Work - Dual CTA Section */}
      <AnimatedSection>
        <DualCTA secondaryButtonLink="/services#how-we-work" />
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* About Section (replacing Areas of Focus) */}
      <AboutSection />

      <Separator variant="olympus" />

      {/* Experience & Impact Section */}
      <ExperienceImpact />

      <Separator variant="olympus" />

      {/* Case Study Intro */}
      <CaseStudyIntro />

      {/* Featured Project - NotedPilot */}
      <AnimatedSection>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-slate-400 uppercase tracking-wider">East Africa</span>
                  </div>
                  <h2 className="text-4xl font-serif text-white">NotedPilot</h2>
                  <p className="text-slate-300">
                    A TrustPilot-inspired platform tailored for East African businesses, enabling customer reviews and
                    building trust in the regional marketplace. Guided by the wisdom of Athena.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">Tailwind CSS</span>
                  </div>
                  <div>
                    <Button className="group flex items-center gap-2 bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Border variant="olympus">
                    <div className="aspect-w-16 aspect-h-9 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center p-8">
                        <div className="relative">
                          <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                            <Globe className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                            <div className="text-center">
                              <h3 className="text-xl font-medium text-white">NotedPilot</h3>
                              <p className="text-slate-400">Trust and reviews for East Africa</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Border>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* Testimonials Section */}
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* Services List */}
      <AnimatedSection>
        <ServicesList
          title="OUR SERVICES"
          description="Services and expertise that transcend traditional boundaries, offering powerful solutions for modern technical challenges."
          services={[
            {
              category: "ARCHITECTURE",
              title: "System Design & Architecture",
              description: "Expert system design and architecture services that scale to meet enterprise demands.",
            },
            {
              category: "DEVELOPMENT",
              title: "Full-Stack Development",
              description: "End-to-end development with modern technologies and best practices.",
            },
            {
              category: "CLOUD",
              title: "Cloud Infrastructure",
              description: "Cloud solutions that give you control over your digital infrastructure.",
            },
            {
              category: "CONSULTING",
              title: "Technical Consulting",
              description: "Strategic guidance for your technical challenges and business decisions.",
            },
          ]}
        />
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* FAQ Section */}
      <AnimatedSection>
        <FAQSection
          faqs={[
            {
              question: "What technologies do you specialize in?",
              answer:
                "We specialize in a wide range of technologies including React, Next.js, Node.js, Python, Go, AWS, and more. Our team stays up-to-date with the latest advancements to ensure we're using the best tools for each project.",
            },
            {
              question: "How long does a typical project take?",
              answer:
                "Project timelines vary based on complexity and scope. A simple web application might take 4-8 weeks, while more complex systems can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
            },
            {
              question: "Do you offer ongoing maintenance and support?",
              answer:
                "Yes, we offer various maintenance and support packages to ensure your application continues to run smoothly after launch. Our support includes bug fixes, security updates, performance optimization, and feature enhancements.",
            },
            {
              question: "How do you handle project management and communication?",
              answer:
                "We use agile methodologies with regular sprints and check-ins. You'll have access to our project management tools, and we schedule weekly updates to keep you informed of progress. Our team is available via email, Slack, or scheduled calls throughout the project.",
            },
            {
              question: "What is your pricing structure?",
              answer:
                "We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. During our initial consultation, we'll discuss your needs and recommend the most appropriate pricing structure for your project.",
            },
          ]}
        />
      </AnimatedSection>

      <Separator variant="olympus" />

      {/* Contact Section */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="inline-block">
                <div className="text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1 rounded-full">
                  SUMMON US
                </div>
              </div>
              <h2 className="text-4xl font-serif text-white">Ready to Harness the Power?</h2>
              <p className="text-slate-300">
                Like Zeus's lightning, we're ready to strike at your technical challenges. Reach out and let's create
                something legendary.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                  <Link href="/contact">Contact Us</Link>
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


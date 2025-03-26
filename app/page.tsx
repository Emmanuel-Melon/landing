import { Button } from "@/components/ui/button"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { ServicesList } from "@/components/services-list"
import { FAQSection } from "@/components/faq-section"
import { DualCTA } from "@/components/dual-cta"
import { Testimonials } from "@/components/testimonials"
import { ExperienceImpact } from "@/components/experience-impact"
import { AboutSection } from "@/components/about-section"
import { TrustedBy } from "@/components/trusted-by"
import { CaseStudyIntro } from "@/components/case-study-intro"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProject } from "@/components/featured-project"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <StackedNavbar currentPage="HOME" />
      <HeroSection />
      <TrustedBy />
      <AnimatedSection>
        <DualCTA />
      </AnimatedSection>
      <Separator variant="olympus" />
      <AboutSection />
      <Separator variant="olympus" />
      <ExperienceImpact />
      <CaseStudyIntro />
      <FeaturedProject />
      <Separator variant="olympus" />
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

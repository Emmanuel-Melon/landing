import { Border } from "@/components/decorative/borders"
import { GreekSymbol } from "@/components/decorative/greek-symbol"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExperienceImpact } from "@/components/experience-impact"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Globe, Users, Home } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="WORKS" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Divine Creations</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              OLYMPIAN <span className="text-yellow-300">WORKS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Behold the divine creations forged with the power of Zeus. Each project a testament to our mastery of the
              digital realm.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Impact Section */}
      <ExperienceImpact
        title="Our Portfolio Impact"
        description="We've had the privilege of working with innovative companies across multiple countries, delivering solutions that drive business growth and user engagement."
        badges={["Since 2022", "3 Countries", "5 Industries"]}
        stats={[
          { label: "Years of Experience", value: "2+" },
          { label: "Projects Delivered", value: "8+" },
          { label: "Client Satisfaction", value: "100%" },
        ]}
      />

      <Separator variant="olympus" />

      {/* Featured Projects */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-24">
              {/* Project 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-300" />
                      <span className="text-sm text-slate-400 uppercase tracking-wider">Utah, USA</span>
                    </div>
                    <h2 className="text-4xl font-serif text-white">Life Capsule</h2>
                    <p className="text-slate-300">
                      A digital time capsule application that allows users to preserve memories, messages, and media for
                      future generations. Built with the foresight of Apollo himself.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">React Native</span>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">Firebase</span>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">Cloud Storage</span>
                    </div>
                    <div>
                      <Button className="group flex items-center gap-2 bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Border variant="zeus">
                    <div className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center p-8">
                        <div className="relative">
                          <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                            <Users className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                            <div className="text-center">
                              <h3 className="text-xl font-medium text-white">Life Capsule</h3>
                              <p className="text-slate-400">Preserving memories for eternity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Border>
                </div>
              </div>

              <Separator variant="olympus" />

              {/* Project 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Border variant="olympus">
                    <div className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
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
                <div>
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
                </div>
              </div>

              <Separator variant="olympus" />

              {/* Project 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-300" />
                      <span className="text-sm text-slate-400 uppercase tracking-wider">United Kingdom</span>
                    </div>
                    <h2 className="text-4xl font-serif text-white">TradeHub24</h2>
                    <p className="text-slate-300">
                      A platform connecting UK homeowners with qualified trade professionals, streamlining the process
                      of finding reliable service providers. Crafted with the skill of Hephaestus.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">React</span>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">MongoDB</span>
                    </div>
                    <div>
                      <Button className="group flex items-center gap-2 bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Border variant="scroll">
                    <div className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center p-8">
                        <div className="relative">
                          <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                            <Home className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                            <div className="text-center">
                              <h3 className="text-xl font-medium text-white">TradeHub24</h3>
                              <p className="text-slate-400">Connecting homes with professionals</p>
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

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <GreekSymbol symbol="Ω" size="lg" animated className="mx-auto" />
              <h2 className="text-4xl font-serif text-white">Ready to Forge Your Digital Legacy?</h2>
              <p className="text-xl text-slate-300">
                Join the pantheon of satisfied clients who have harnessed the power of Zeus for their digital needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300"
                >
                  <Link href="/services">Explore Our Services</Link>
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


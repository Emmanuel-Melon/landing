import { Button } from "@/components/ui/button"
import { Border } from "@/components/decorative/borders"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export const FeaturedProject = () => {
    return (
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
                      <Link href="/works/noted-pilot" className="flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
    )
}
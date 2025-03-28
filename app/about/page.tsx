import { Border } from "@/components/decorative/borders"
import { GreekSymbol } from "@/components/decorative/greek-symbol"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Globe, Code, Users } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="ABOUT" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Our Story</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              ABOUT <span className="text-yellow-300">VOLTERRA</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              A dynamic software agency delivering exceptional solutions from the heart of Africa to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <Border variant="zeus">
                  <div className="aspect-w-4 aspect-h-3 bg-slate-800 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-center p-8">
                      <div className="relative z-10 bg-slate-900/80 p-8 rounded-lg border border-yellow-300/20">
                        <GreekSymbol symbol="Ν" size="lg" className="mx-auto mb-4" />
                        <div className="text-center">
                          <h3 className="text-xl font-medium text-white">Founded 2024</h3>
                          <p className="text-slate-400">Kigali, Rwanda</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Border>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif text-white">Our Story</h2>
                  <p className="text-slate-300">
                    Volterra was founded by Emmanuel Gatwech (Eman) with a vision to create a software agency that
                    combines technical excellence with creative energy. Based in Kigali, Rwanda, we work with clients
                    from around the world to deliver exceptional software solutions.
                  </p>
                  <p className="text-slate-300">
                    Our team brings together expertise in distributed systems, location-based applications, and
                    innovative SaaS solutions. We believe in the transformative power of technology and are committed to
                    helping our clients achieve their digital ambitions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-yellow-300" />
                      <h3 className="text-lg font-medium text-white">Location</h3>
                    </div>
                    <p className="text-slate-300">Headquartered in Kigali, Rwanda with a global reach</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-yellow-300" />
                      <h3 className="text-lg font-medium text-white">Global</h3>
                    </div>
                    <p className="text-slate-300">Working with clients across continents and time zones</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-yellow-300" />
                      <h3 className="text-lg font-medium text-white">Expertise</h3>
                    </div>
                    <p className="text-slate-300">Specialized in complex systems and innovative solutions</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-yellow-300" />
                      <h3 className="text-lg font-medium text-white">Team</h3>
                    </div>
                    <p className="text-slate-300">Building with passion and purpose</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="relative p-4">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div className="bg-slate-900/80 p-6 rounded-lg">
                  <h3 className="text-2xl font-serif text-white mb-4">Our Mission</h3>
                  <p className="text-slate-300">
                    To deliver exceptional software solutions that empower businesses to achieve their goals and transform their industries.
                  </p>
                </div>
              </div>

              <div className="relative p-4">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div className="bg-slate-900/80 p-6 rounded-lg">
                  <h3 className="text-2xl font-serif text-white mb-4">Our Vision</h3>
                  <p className="text-slate-300">
                    To be the leading software agency in East Africa, known for technical excellence, innovation, and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="relative p-4">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div className="bg-slate-900/80 p-6 rounded-lg">
                  <h3 className="text-2xl font-serif text-white mb-4">Our Values</h3>
                  <p className="text-slate-300">
                    Technical excellence, creative energy, global perspective, and a commitment to delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-white">Ready to Work Together?</h2>
            <p className="text-xl text-slate-300">
              Let's discuss how we can help bring your ideas to life with our technical expertise and creative approach.
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

      <Footer />
    </div>
  )
}

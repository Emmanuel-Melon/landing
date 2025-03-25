import { Border } from "@/components/decorative/borders"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Code, Coffee } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="CAREERS" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              CAREERS AT <span className="text-yellow-300">VOLTERRA</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Join our team of talented engineers and help us build powerful software solutions for clients around the
              world.
            </p>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-white mb-16 text-center">Why Join Volterra</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Code className="w-12 h-12 text-yellow-300 mb-6" />,
                  title: "Technical Excellence",
                  description:
                    "Work on challenging projects using cutting-edge technologies. We believe in continuous learning and professional growth.",
                },
                {
                  icon: <Users className="w-12 h-12 text-yellow-300 mb-6" />,
                  title: "Collaborative Culture",
                  description:
                    "Join a team that values collaboration, open communication, and diverse perspectives. We succeed together.",
                },
                {
                  icon: <Coffee className="w-12 h-12 text-yellow-300 mb-6" />,
                  title: "Work-Life Balance",
                  description:
                    "We believe in sustainable work practices that allow our team to thrive both professionally and personally.",
                },
              ].map((benefit, index) => (
                <div key={index} className="relative p-10">
                  <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
                  <div className="bg-slate-900/80 p-8 flex flex-col items-center text-center h-full">
                    {benefit.icon}
                    <h3 className="text-2xl font-serif text-white mb-4">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* Current Openings */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-white mb-8 text-center">Current Openings</h2>
            <Border variant="zeus" className="p-12">
              <div className="text-center space-y-6">
                <Briefcase className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-white">No Current Openings</h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  We don't have any open positions at the moment, but we're always interested in connecting with
                  talented individuals. Send us your resume for future opportunities.
                </p>
                <div className="pt-6">
                  <Button className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </Border>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* What We Look For */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-white mb-12 text-center">What We Look For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technical Skills",
                  items: [
                    "Strong programming fundamentals",
                    "Experience with modern web technologies",
                    "Understanding of software architecture",
                    "Problem-solving abilities",
                  ],
                },
                {
                  title: "Soft Skills",
                  items: [
                    "Excellent communication",
                    "Collaborative mindset",
                    "Self-motivation and initiative",
                    "Adaptability and willingness to learn",
                  ],
                },
              ].map((category, index) => (
                <div key={index} className="relative p-10">
                  <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
                  <div className="bg-slate-900/80 p-8 h-full">
                    <h3 className="text-2xl font-serif text-white mb-6">{category.title}</h3>
                    <ul className="space-y-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
            <h2 className="text-4xl font-serif text-white">Interested in Joining Our Team?</h2>
            <p className="text-xl text-slate-300">
              Even though we don't have current openings, we're always looking to connect with talented individuals who
              share our passion for excellence.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                <Link href="/contact">Send Your Resume</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


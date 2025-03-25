import { GreekSymbol } from "@/components/decorative/greek-symbol"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Globe, Users, Home } from "lucide-react"
import Link from "next/link"

export default function WorksPageAlt() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GreekSymbol symbol="Ν" size="sm" animated />
              <span className="text-2xl font-serif text-white">VOLTERRA</span>
            </div>
            <div className="flex gap-6 text-slate-300">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "SERVICES", path: "/services" },
                { name: "WORKS", path: "/works" },
                { name: "CONTACT", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`hover:text-yellow-300 transition-colors ${
                    item.name === "WORKS" ? "text-yellow-300" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

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

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Project 1 */}
            <ProjectCard
              title="Life Capsule"
              location="Utah, USA"
              description="A digital time capsule application that allows users to preserve memories, messages, and media for future generations. Built with the foresight of Apollo himself."
              technologies={["React Native", "Firebase", "Cloud Storage"]}
              icon={<Users className="w-full h-full" />}
              tagline="Preserving memories for eternity"
              color="yellow"
              reversed={true}
              borderVariant="zeus"
            />

            <Separator variant="olympus" />

            {/* Project 2 */}
            <ProjectCard
              title="NotedPilot"
              location="East Africa"
              description="A TrustPilot-inspired platform tailored for East African businesses, enabling customer reviews and building trust in the regional marketplace. Guided by the wisdom of Athena."
              technologies={["Next.js", "PostgreSQL", "Tailwind CSS"]}
              icon={<Globe className="w-full h-full" />}
              tagline="Trust and reviews for East Africa"
              color="green"
              borderVariant="olympus"
            />

            <Separator variant="greek" />

            {/* Project 3 */}
            <ProjectCard
              title="Cookie Club"
              location="Kigali, Rwanda"
              description="A delightful e-commerce platform for a premium bakery specializing in artisanal cookies and sweet treats. Built with the sweetness of Hestia's hearth."
              technologies={["Next.js", "Stripe", "Sanity CMS"]}
              icon={<Home className="w-full h-full" />}
              tagline="Sweet treats delivered to your door"
              color="yellow"
              reversed={true}
              borderVariant="olympus"
            />

            <Separator variant="zeus" />

            {/* Project 4 */}
            <ProjectCard
              title="TradeHub24"
              location="United Kingdom"
              description="A platform connecting UK homeowners with qualified trade professionals, streamlining the process of finding reliable service providers. Crafted with the skill of Hephaestus."
              technologies={["React", "Node.js", "MongoDB"]}
              icon={<Home className="w-full h-full" />}
              tagline="Connecting homes with professionals"
              color="yellow"
              reversed={true}
              borderVariant="scroll"
            />
          </div>
        </div>
      </section>

      <Separator variant="zeus" />

      {/* CTA Section */}
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
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10">
                View More Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Border } from "@/components/decorative/borders"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Globe, Code, Users } from "lucide-react"
import Link from "next/link"
import { StackedNavbar } from "@/components/stacked-navbar"
import Image from "next/image"

const Badge = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
    <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
    <span className="text-sm text-slate-300">{text}</span>
  </div>
)

const ExperienceImpact = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-white">Experience</h2>
          <p className="text-xl text-slate-300">With years of experience in the software industry, we've honed our skills to deliver top-notch solutions for our clients.</p>
          <div className="flex space-x-2">
            <Badge text="5+ Years" />
            <Badge text="20+ Projects" />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-white">Impact</h2>
          <p className="text-xl text-slate-300">Our work has made a significant impact across various industries, helping businesses grow and innovate.</p>
          <div className="flex space-x-2">
            <Badge text="10+ Clients" />
            <Badge text="3 Countries" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <StackedNavbar currentPage="ABOUT" />

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
              Volterra was founded in 2025 by Emmanuel Gatwech (Eman) with a vision to create a software agency that
              combines technical excellence with creative energy. Based in Kigali, Rwanda, we work with clients
              from around the world to deliver exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      <ExperienceImpact />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Our Mission", content: "To deliver exceptional software solutions that empower businesses to achieve their goals and transform their industries." },
                { title: "Our Vision", content: "To be the leading software agency in East Africa, known for technical excellence, innovation, and client satisfaction." },
                { title: "Our Values", content: "Technical excellence, creative energy, global perspective, and a commitment to delivering exceptional results." }
              ].map((item, index) => (
                <div key={index} className="relative p-4">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                  <div className="bg-slate-900/80 p-6 rounded-lg">
                    <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-white">How We Work</h2>
            <p className="text-xl text-slate-300">
              We are a remote-first company, embracing the flexibility and diversity it brings. However, we love getting together at our Kigali hub to bond, brainstorm, and innovate.
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                { src: "/images/norrsken.jpeg", alt: "Norrsken Kigali" },
                { src: "/images/norrsken2.jpeg", alt: "Norrsken Kigali Interior" },
                { src: "/images/norrsken3.jpeg", alt: "Norrsken Kigali Workspace" },
                { src: "/images/norrsken4.jpeg", alt: "Norrsken Kigali Meeting Room" }
              ].map((image, index) => (
                <Border key={index} variant="zeus">
                  <Image src={image.src} alt={image.alt} width={500} height={300} className="rounded-lg" />
                </Border>
              ))}
            </div>
          </div>
        </div>
      </section>

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

import { Border } from "@/components/decorative/borders"
import { Separator } from "@/components/decorative/separators"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Building2 } from "lucide-react"
import { StackedNavbar } from "@/components/stacked-navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <StackedNavbar currentPage="CONTACT" />

      {/* Hero Section */}
      <section className="relative border-b border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              CONTACT <span className="text-yellow-300">US</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Have a project in mind? We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif text-white mb-8">Send Us a Message</h2>
                <Border variant="scroll" className="p-12">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-slate-800 border-slate-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project"
                        className="bg-slate-800 border-slate-700 text-white min-h-[150px]"
                      />
                    </div>
                    <Button className="w-full bg-yellow-300 text-slate-900 hover:bg-yellow-400">Send Message</Button>
                  </form>
                </Border>
              </div>
              <div>
                <h2 className="text-3xl font-serif text-white mb-8">Contact Information</h2>
                <div className="space-y-12">
                  <Border variant="olympus" className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Email</h3>
                        <p className="text-slate-300">hello@volterra.dev</p>
                        <p className="text-slate-400 text-sm mt-2">We aim to respond within 24 hours</p>
                      </div>
                    </div>
                  </Border>
                  <Border variant="olympus" className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Location</h3>
                        <p className="text-slate-300">Kigali, Rwanda</p>
                        <p className="text-slate-400 text-sm mt-2">Working globally, based in East Africa</p>
                      </div>
                    </div>
                  </Border>
                  <Border variant="olympus" className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-yellow-300 mt-1" />
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Phone</h3>
                        <p className="text-slate-300">+250 123 456 789</p>
                        <p className="text-slate-400 text-sm mt-2">Available during business hours (CAT)</p>
                      </div>
                    </div>
                  </Border>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator variant="olympus" />

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-8 text-center">Find Us</h2>
            <Border variant="olympus">
              <div className="flex items-center justify-around">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center text-slate-600">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                    <p className="text-white">Norssken House</p>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center text-slate-600">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                    <p className="text-white">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
              </div>
            </Border>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


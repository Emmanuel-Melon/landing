import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  project: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sophia",
      role: "Product Manager",
      company: "Life Capsule",
      quote:
        "Volterra transformed our concept into a beautiful, functional app in record time. Their technical expertise and attention to detail exceeded our expectations.",
      project: "Life Capsule",
    },
    {
      name: "Albert",
      role: "Founder & CEO",
      company: "NotedPilot",
      quote:
        "Working with Volterra was a game-changer for our business. They understood our vision and delivered a platform that has revolutionized how East African businesses collect and showcase reviews.",
      project: "NotedPilot",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative p-10">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div className="bg-slate-900/80 p-8 h-full flex flex-col">
                  <Quote className="w-12 h-12 text-yellow-300/30 mb-6" />
                  <p className="text-slate-300 italic mb-8 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-white">{testimonial.name}</h3>
                      <p className="text-slate-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="text-sm text-yellow-300 border border-yellow-300/30 px-3 py-1 rounded-full">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


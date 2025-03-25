import { Clock, Users, Zap, CheckCircle } from "lucide-react"

export function WorkProcess() {
  const steps = [
    {
      icon: <Clock className="w-12 h-12 text-yellow-300 mb-6" />,
      title: "Quick Prototyping",
      description:
        "We believe in rapid development. Our team will create a working prototype of your idea within days, not months.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-300 mb-6" />,
      title: "MVP in 2 Weeks",
      description:
        "You'll have a Minimum Viable Product in just two weeks, allowing you to test your concept with real users quickly.",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-300 mb-6" />,
      title: "Close Collaboration",
      description:
        "Work directly with our engineers. We maintain open communication channels and regular check-ins throughout the process.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-yellow-300 mb-6" />,
      title: "Decision Point",
      description:
        "After two weeks, you decide if we're the right fit. No long-term commitment until you're confident in our partnership.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Work Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our process is simple: we're into quick prototyping and iteration. You'll have an MVP in 2 weeks and
              you'll work closely with our team. After the two weeks, you'll decide whether we're a good match or not.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-10">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div className="bg-slate-900/80 p-8 flex flex-col items-center text-center h-full">
                  {step.icon}
                  <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-slate-300">
              Ready to start building your product? Let's turn your vision into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


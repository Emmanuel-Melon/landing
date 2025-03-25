"use client"

import { useState } from "react"
import { Separator } from "./decorative/separators"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQItem[]
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services and process.",
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">{title}</h2>
            <p className="text-slate-300">{description}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-yellow-300/30"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30"></div>
                <div
                  className={`bg-slate-900/80 transition-all duration-300 ${openIndex === index ? "bg-slate-800/30" : ""}`}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                    <div className="text-yellow-300">
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 pt-0">
                      <Separator variant="zeus" className="mb-4" />
                      <p className="text-slate-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400">
              Still have questions?{" "}
              <a href="/contact" className="text-yellow-300 hover:underline">
                Contact us
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Border } from "@/components/decorative/borders"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-yellow-300/5 blur-3xl opacity-50"></div>
      <div className="absolute top-1/3 right-[10%] text-4xl md:text-6xl font-serif text-yellow-300/20 opacity-80">Ω</div>
      <div className="absolute bottom-1/3 right-[15%] text-3xl md:text-5xl font-serif text-yellow-300/20 opacity-80">Δ</div>
      <div className="absolute top-2/3 right-[20%] text-2xl md:text-4xl font-serif text-yellow-300/20 opacity-80">Φ</div>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
            <Border variant="olympus">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={250}
                height={250}
                className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
              />
            </Border>
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-4">
              <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400 hidden md:inline">|</span>
              <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">Software Engineering</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 md:mb-6">
              POWERFUL <span className="text-yellow-300">SOLUTIONS</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 mb-6 md:mb-8">
              We transform complex challenges into elegant, scalable software solutions. Our team delivers high-quality
              code with precision and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-yellow-300 text-slate-900 hover:bg-yellow-400 uppercase tracking-wider">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300 uppercase tracking-wider"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
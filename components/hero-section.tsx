import { Button } from "@/components/ui/button"

export const HeroSection = () => {
    return (
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-yellow-300/5 blur-3xl opacity-50"></div>
        {/* Greek symbols on right side only */}
        <div className="absolute top-1/3 right-[10%] text-6xl font-serif text-yellow-300/20 opacity-80">Ω</div>
        <div className="absolute bottom-1/3 right-[15%] text-5xl font-serif text-yellow-300/20 opacity-80">Δ</div>
        <div className="absolute top-2/3 right-[20%] text-4xl font-serif text-yellow-300/20 opacity-80">Φ</div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Vol. 1, No. 1</span>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Software Engineering</span>
            </div>
            <h1 className="text-6xl font-serif text-white mb-6">
              POWERFUL <span className="text-yellow-300">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              We transform complex challenges into elegant, scalable software solutions. Our team delivers high-quality
              code with precision and expertise.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400 uppercase tracking-wider">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300 uppercase tracking-wider"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}
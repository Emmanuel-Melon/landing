import { Button } from "@/components/ui/button"

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzQsIDE3OSwgOCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
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
              <Button size="lg" className="bg-yellow-300 text-slate-900 hover:bg-yellow-400">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-300 text-white hover:bg-yellow-300/10 hover:text-yellow-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}
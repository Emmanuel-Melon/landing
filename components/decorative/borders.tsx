import type React from "react"
import { cn } from "@/lib/utils"
import { GreekMeander } from "./greek-meander"

interface RunicBorderProps {
  className?: string
  children: React.ReactNode
  variant?: "meander" | "greek" | "olympian"
}

interface BorderProps {
  className?: string
  children: React.ReactNode
  variant?: "zeus" | "olympus" | "scroll"
}

export function Border({ className, children, variant = "zeus" }: BorderProps) {
  return (
    <div className={cn("relative p-8", className)}>
      {variant === "zeus" && (
        <>
          <div className="absolute top-0 left-0 w-20 h-20 border-l-3 border-t-3 border-yellow-300/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-3 border-t-3 border-yellow-300/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-3 border-b-3 border-yellow-300/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-3 border-b-3 border-yellow-300/30" />
          <div className="absolute inset-12 bg-gradient-to-b from-yellow-300/5 via-transparent to-yellow-300/5" />
        </>
      )}

      {variant === "olympus" && (
        <>
          <div className="absolute inset-0 border-3 border-yellow-300/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-5">
            <span className="text-yellow-300 font-serif text-2xl">Ω</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 px-5">
            <span className="text-yellow-300 font-serif text-2xl">Δ</span>
          </div>
        </>
      )}

      {variant === "scroll" && (
        <>
          <div className="absolute inset-0 border-3 border-yellow-300/30 rounded-lg" />
          <div className="absolute top-0 left-0 w-10 h-10 border-3 border-yellow-300/30 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-10 h-10 border-3 border-yellow-300/30 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-3 border-yellow-300/30 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-3 border-yellow-300/30 rounded-br-lg" />
        </>
      )}

      <div className="relative">{children}</div>
    </div>
  )
}

export function RunicBorder({ className, children, variant = "meander" }: RunicBorderProps) {
  return (
    <div className={cn("relative p-12", className)}>
      {variant === "meander" && (
        <>
          <div className="absolute top-0 left-0 w-full">
            <GreekMeander variant="border" className="h-6" />
          </div>
          <div className="absolute bottom-0 left-0 w-full rotate-180">
            <GreekMeander variant="border" className="h-6" />
          </div>
          <div className="absolute top-0 left-0 h-full -rotate-90 origin-top-left">
            <GreekMeander variant="border" className="w-[calc(100%-48px)] h-6" />
          </div>
          <div className="absolute top-0 right-0 h-full rotate-90 origin-top-right">
            <GreekMeander variant="border" className="w-[calc(100%-48px)] h-6" />
          </div>

          {/* Corners */}
          <div className="absolute top-0 left-0">
            <GreekMeander variant="corner" className="w-12 h-12" />
          </div>
          <div className="absolute top-0 right-0 rotate-90">
            <GreekMeander variant="corner" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-0 left-0 -rotate-90">
            <GreekMeander variant="corner" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-0 right-0 rotate-180">
            <GreekMeander variant="corner" className="w-12 h-12" />
          </div>
        </>
      )}

      {variant === "greek" && (
        <>
          <div className="absolute top-0 left-0 w-20 h-20 border-l-3 border-t-3 border-yellow-300/30 flex items-center justify-center">
            <span className="text-yellow-300/60 font-serif text-3xl rotate-45">Α</span>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-3 border-t-3 border-yellow-300/30 flex items-center justify-center">
            <span className="text-yellow-300/60 font-serif text-3xl -rotate-45">Β</span>
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-3 border-b-3 border-yellow-300/30 flex items-center justify-center">
            <span className="text-yellow-300/60 font-serif text-3xl -rotate-45">Γ</span>
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-3 border-b-3 border-yellow-300/30 flex items-center justify-center">
            <span className="text-yellow-300/60 font-serif text-3xl rotate-45">Δ</span>
          </div>
          <div className="absolute inset-12 bg-gradient-to-b from-yellow-300/5 via-transparent to-yellow-300/5" />
        </>
      )}

      {variant === "olympian" && (
        <>
          <div className="absolute inset-0 border-3 border-yellow-300/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-5">
            <span className="text-yellow-300 font-serif text-3xl">Ω</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 px-5">
            <span className="text-yellow-300 font-serif text-3xl">Δ</span>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-900 py-5">
            <span className="text-yellow-300 font-serif text-3xl">Σ</span>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-slate-900 py-5">
            <span className="text-yellow-300 font-serif text-3xl">Φ</span>
          </div>
        </>
      )}

      <div className="relative p-6">{children}</div>
    </div>
  )
}

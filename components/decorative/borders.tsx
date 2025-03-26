import type React from "react"
import { cn } from "@/lib/utils"

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
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-300/30" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-yellow-300/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-yellow-300/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-300/30" />
          <div className="absolute inset-10 bg-gradient-to-b from-yellow-300/5 via-transparent to-yellow-300/5" />
        </>
      )}

      {variant === "olympus" && (
        <>
          <div className="absolute inset-0 border-2 border-yellow-300/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-4">
            <span className="text-yellow-300 font-serif text-xl">Ω</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 px-4">
            <span className="text-yellow-300 font-serif text-xl">Δ</span>
          </div>
        </>
      )}

      {variant === "scroll" && (
        <>
          <div className="absolute inset-0 border-2 border-yellow-300/30 rounded-lg" />
          <div className="absolute top-0 left-0 w-8 h-8 border-2 border-yellow-300/30 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-2 border-yellow-300/30 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-2 border-yellow-300/30 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-yellow-300/30 rounded-br-lg" />
        </>
      )}

      <div className="relative">{children}</div>
    </div>
  )
}


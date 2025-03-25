import { cn } from "@/lib/utils"
import { Zap } from "lucide-react"

interface SeparatorProps {
  className?: string
  variant?: "olympus" | "lightning-line" | "zeus" | "greek"
}

export function Separator({ className, variant = "olympus" }: SeparatorProps) {
  return (
    <div className={cn("relative py-8 w-full", className)}>
      {variant === "olympus" && (
        <div className="flex items-center justify-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-300/50" />
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 rounded-full bg-yellow-300/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-300/50" />
            <div className="w-1 h-1 rounded-full bg-yellow-300/50" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-300/50" />
        </div>
      )}

      {variant === "lightning-line" && (
        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-yellow-300/20" />
          <div className="mx-4">
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>
          <div className="h-px flex-1 bg-yellow-300/20" />
        </div>
      )}

      {variant === "zeus" && (
        <div className="flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />
        </div>
      )}

      {variant === "greek" && (
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-300/50" />
          <div className="flex items-center gap-4 text-yellow-300/70 font-serif text-lg">
            <span>α</span>
            <span>β</span>
            <span>γ</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-300/50" />
        </div>
      )}
    </div>
  )
}


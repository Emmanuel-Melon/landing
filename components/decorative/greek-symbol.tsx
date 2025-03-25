import { cn } from "@/lib/utils"

interface GreekSymbolProps {
  className?: string
  symbol?: "Ν" | "Ω" | "Δ" | "Φ" | "Ψ" | "V"
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export function GreekSymbol({ className, symbol = "Ν", size = "md", animated = false }: GreekSymbolProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-lg",
    md: "w-12 h-12 text-2xl",
    lg: "w-16 h-16 text-3xl",
  }

  return (
    <div
      className={cn(
        "relative rounded-full border border-yellow-300/30 flex items-center justify-center",
        animated && "hover:scale-110 transition-transform duration-300",
        sizeClasses[size],
        className,
      )}
    >
      <span className="font-serif text-yellow-300">{symbol}</span>
      {animated && <div className="absolute inset-0 border border-yellow-300/20 rounded-full animate-ping" />}
    </div>
  )
}


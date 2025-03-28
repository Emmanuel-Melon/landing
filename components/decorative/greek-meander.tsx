import { cn } from "@/lib/utils"

interface GreekMeanderProps {
  className?: string
  variant?: "border" | "separator" | "corner"
  color?: "gold" | "white"
}

export function GreekMeander({ className, variant = "border", color = "gold" }: GreekMeanderProps) {
  const colorClass = color === "gold" ? "text-yellow-300" : "text-white"

  return (
    <div className={cn("relative", className)}>
      {variant === "border" && (
        <svg
          className={cn("w-full h-8", colorClass)}
          viewBox="0 0 800 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25H800M50 0V50M100 25H150M150 25V0M150 0H200M200 0V25M200 25H250M250 25V50M250 50H300M300 50V25M300 25H350M350 25V0M350 0H400M400 0V25M400 25H450M450 25V50M450 50H500M500 50V25M500 25H550M550 25V0M550 0H600M600 0V25M600 25H650M650 25V50M650 50H700M700 50V25M700 25H750M750 25V0"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
        </svg>
      )}

      {variant === "separator" && (
        <div className="flex items-center w-full gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-300/50" />
          <svg
            className={cn("w-32 h-6", colorClass)}
            viewBox="0 0 120 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12H120M10 0V24M20 12H30M30 12V0M30 0H40M40 0V12M40 12H50M50 12V24M50 24H60M60 24V12M60 12H70M70 12V0M70 0H80M80 0V12M80 12H90M90 12V24M90 24H100M100 24V12M100 12H110"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-300/50" />
        </div>
      )}

      {variant === "corner" && (
        <svg className={cn("w-16 h-16", colorClass)} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 32H32M32 32V0M16 16V48M16 48H48M48 48V16M48 16H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        </svg>
      )}
    </div>
  )
}


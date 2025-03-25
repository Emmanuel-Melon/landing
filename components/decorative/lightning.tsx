import { cn } from "@/lib/utils"

interface LightningProps {
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function Lightning({ className, intensity = "medium" }: LightningProps) {
  const intensityConfig = {
    low: {
      bolts: 1,
      duration: "10s",
      delay: "0s",
    },
    medium: {
      bolts: 2,
      duration: "8s",
      delay: "0.5s",
    },
    high: {
      bolts: 3,
      duration: "6s",
      delay: "0.3s",
    },
  }

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: intensityConfig[intensity].bolts }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            animation: `lightning ${intensityConfig[intensity].duration} infinite`,
            animationDelay: `calc(${intensityConfig[intensity].delay} * ${i + 1})`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}


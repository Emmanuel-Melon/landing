import { Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface LightningLineProps {
  className?: string
}

export function LightningLine({ className }: LightningLineProps) {
  return (
    <div className={cn("w-full flex items-center justify-center py-8", className)}>
      <div className="h-px flex-1 bg-yellow-300/20" />
      <div className="mx-4">
        <Zap className="w-5 h-5 text-yellow-300" />
      </div>
      <div className="h-px flex-1 bg-yellow-300/20" />
    </div>
  )
}


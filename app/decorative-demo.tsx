export default function DecorativeDemo() {
  return (
    <div className="min-h-screen bg-slate-900 p-8 space-y-12">
      <div className="space-y-8">
        <h2 className="text-2xl font-serif text-white">Separators</h2>
        <Separator variant="zeus" />
        <Separator variant="olympus" />
        <Separator variant="lightning" />
        <Separator variant="greek" />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-serif text-white">Borders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Border variant="zeus">
            <div className="h-48 flex items-center justify-center text-white">Zeus Border</div>
          </Border>
          <Border variant="olympus">
            <div className="h-48 flex items-center justify-center text-white">Olympus Border</div>
          </Border>
          <Border variant="scroll">
            <div className="h-48 flex items-center justify-center text-white">Scroll Border</div>
          </Border>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-serif text-white">Greek Symbols</h2>
        <div className="flex flex-wrap gap-8">
          <GreekSymbol symbol="Σ" size="lg" animated />
          <GreekSymbol symbol="Ω" size="lg" animated />
          <GreekSymbol symbol="Δ" size="lg" animated />
          <GreekSymbol symbol="Φ" size="lg" animated />
          <GreekSymbol symbol="Ψ" size="lg" animated />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-serif text-white">Lightning Effects</h2>
        <div className="flex flex-wrap gap-8">
          <div className="w-24 h-24">
            <Lightning intensity="low" />
          </div>
          <div className="w-24 h-24">
            <Lightning intensity="medium" />
          </div>
          <div className="w-24 h-24">
            <Lightning intensity="high" />
          </div>
        </div>
      </div>
    </div>
  )
}


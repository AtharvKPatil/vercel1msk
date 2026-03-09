import { HeroSection } from "@/components/home/hero-section"
import { FocusAreas } from "@/components/home/focus-areas"
import { ValueProposition } from "@/components/home/value-proposition"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FocusAreas />
      <ValueProposition />
      <CTASection />
    </>
  )
}

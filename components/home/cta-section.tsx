import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="text-[20vw] font-bold text-foreground/[0.02] tracking-tighter whitespace-nowrap">
          LET&apos;S TALK
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Ready to Start?
          </span>
          
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            YOUR VISION,
            <br />
            <span className="text-primary">OUR EXPERTISE</span>
          </h2>
          
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re launching a venture, implementing AI, or exploring sustainable 
            investments, we&apos;re ready to guide your journey.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Schedule a Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-muted h-14 px-8 text-base"
            >
              <Link href="/mentoring">
                Explore Mentoring
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-20 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 ${i === 2 ? "bg-primary" : "bg-border"}`} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

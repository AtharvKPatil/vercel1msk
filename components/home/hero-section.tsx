"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

const words = ["AI Innovation", "Entrepreneurship", "Green Energy"]

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-secondary text-secondary-foreground overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-primary opacity-80 animate-pulse" />
      <div className="absolute bottom-1/3 left-[5%] w-20 h-20 bg-accent opacity-60" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 min-h-screen flex flex-col justify-center">
        {/* Marquee ticker */}
        <div className="absolute top-24 left-0 right-0 overflow-hidden border-y border-secondary-foreground/10 py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-8 text-xs uppercase tracking-[0.3em] text-secondary-foreground/40">
                AI Strategy • Entrepreneurship • Sustainable Investments • Green Energy • Advisory • Mentoring • Innovation
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 lg:mt-0">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
              Advisory & Consulting
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85]">
            <span className="block">SHAPING</span>
            <span className="block text-primary">THE FUTURE</span>
            <span className="block">OF BUSINESS</span>
          </h1>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <p className="max-w-md text-lg text-secondary-foreground/70 leading-relaxed">
              We guide visionary leaders through{" "}
              <span className="text-primary font-medium transition-all duration-500">
                {words[currentWord]}
              </span>
              {" "}— building tomorrow&apos;s success today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5 h-14 px-8"
              >
                <Link href="/about" className="flex items-center gap-2">
                  About MSK
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 pt-8 border-t border-secondary-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Years" },
            { number: "200+", label: "Projects" },
            { number: "$2B+", label: "Guided" },
            { number: "50+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm uppercase tracking-wider text-secondary-foreground/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-secondary-foreground/30">Scroll</span>
        <div className="w-px h-12 bg-secondary-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const features = [
  "Deep industry expertise across three transformative sectors",
  "Hands-on partnership, not just consulting",
  "Proven track record with measurable outcomes",
  "Global network of investors and partners",
]

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Big text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Why Choose Us
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
              WE BUILD
              <br />
              <span className="text-primary">TOMORROW&apos;S</span>
              <br />
              SUCCESS TODAY
            </h2>
            
            <div className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-secondary-foreground/70">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
                <Link href="/story" className="flex items-center gap-2">
                  Our Story
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Asymmetric image grid */}
          <div className="relative">
            {/* Main large box */}
            <div className="aspect-[4/3] bg-secondary-foreground/5 border border-secondary-foreground/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-8xl md:text-9xl font-bold text-primary opacity-20">MSK</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary to-transparent">
                <p className="text-sm text-secondary-foreground/60">
                  Trusted by industry leaders worldwide
                </p>
              </div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 w-48">
              <p className="text-4xl font-bold">200+</p>
              <p className="text-sm mt-1 text-primary-foreground/70">Projects delivered with measurable impact</p>
            </div>

            {/* Accent square */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Brain, Rocket, Leaf, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const areas = [
  {
    number: "01",
    title: "AI Strategy",
    subtitle: "Intelligence",
    description: "Transform your business with cutting-edge AI solutions. From strategy to implementation, we help you harness the full potential of artificial intelligence.",
    icon: Brain,
    color: "bg-primary",
    href: "/services#ai"
  },
  {
    number: "02",
    title: "Entrepreneurship",
    subtitle: "Ventures",
    description: "Turn bold ideas into thriving businesses. Our mentorship and strategic guidance help entrepreneurs navigate the path from concept to scale.",
    icon: Rocket,
    color: "bg-accent",
    href: "/services#entrepreneurship"
  },
  {
    number: "03",
    title: "Green Energy",
    subtitle: "Sustainability",
    description: "Invest in the future while protecting our planet. Expert advisory on sustainable energy investments that deliver returns and impact.",
    icon: Leaf,
    color: "bg-primary",
    href: "/services#green-energy"
  },
]

export function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              What We Do
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              THREE PILLARS
              <br />
              <span className="text-muted-foreground">OF EXPERTISE</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Our integrated approach combines deep expertise across AI, entrepreneurship, and 
            sustainable energy to deliver transformative results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
          {areas.map((area, index) => (
            <Link
              key={area.number}
              href={area.href}
              className={`group relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 border-border transition-all duration-500 ${
                hoveredIndex === index ? "bg-secondary text-secondary-foreground" : "bg-background"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-12">
                <span className={`text-sm font-mono ${hoveredIndex === index ? "text-secondary-foreground/40" : "text-muted-foreground"}`}>
                  {area.number}
                </span>
                <div className={`w-12 h-12 ${area.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <area.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] mb-2 ${hoveredIndex === index ? "text-primary" : "text-muted-foreground"}`}>
                  {area.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {area.title}
                </h3>
                <p className={`leading-relaxed ${hoveredIndex === index ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                  {area.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-2">
                <span className={`text-sm font-medium ${hoveredIndex === index ? "text-primary" : "text-foreground"}`}>
                  Learn More
                </span>
                <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${
                  hoveredIndex === index ? "translate-x-1 -translate-y-1 text-primary" : ""
                }`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

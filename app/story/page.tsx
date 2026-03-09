import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story | MSK Consultants",
  description: "Discover the journey of MSK Consultants - from our founding vision to becoming a leading force in AI, entrepreneurship, and sustainable energy consulting.",
}

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Founded with a vision to bridge technology, entrepreneurship, and sustainability."
  },
  {
    year: "2014",
    title: "AI Division Launch",
    description: "Established dedicated AI advisory practice, ahead of the AI revolution."
  },
  {
    year: "2017",
    title: "Green Energy Focus",
    description: "Expanded into sustainable energy investments, guiding over $500M in deals."
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Opened offices in London and Singapore, serving clients across 30+ countries."
  },
  {
    year: "2023",
    title: "Mentoring Initiative",
    description: "Launched comprehensive mentoring programs for the next generation of leaders."
  },
  {
    year: "Now",
    title: "The Future",
    description: "Continuing to shape the future of business, one partnership at a time."
  },
]

export default function StoryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Our Story
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              FROM VISION
              <br />
              <span className="text-primary">TO IMPACT</span>
            </h1>
            <p className="mt-8 text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Every great story starts with a bold idea. Ours began with a simple 
              question: What if we could combine the best of technology, business, 
              and sustainability?
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                The Origin
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                BORN FROM A BELIEF THAT BUSINESS CAN DO BETTER
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  MSK Consultants was founded by three industry veterans who saw a gap 
                  in the consulting world: too many firms focused on short-term gains 
                  at the expense of long-term value and sustainability.
                </p>
                <p>
                  We set out to build something different—a consultancy that combines 
                  deep technical expertise in AI with entrepreneurial thinking and a 
                  commitment to sustainable practices.
                </p>
                <p>
                  Today, we&apos;re proud to work with visionary leaders and organizations 
                  around the world, helping them navigate the complexities of modern 
                  business while building for a better future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12rem] font-bold text-secondary-foreground/5">M</span>
                </div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-sm text-secondary-foreground/60">Est. 2010</p>
                  <p className="text-3xl font-bold text-secondary-foreground mt-2">15+ Years</p>
                  <p className="text-sm text-secondary-foreground/60 mt-1">of transforming businesses</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Our Journey
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
            KEY MILESTONES
          </h2>

          <div className="mt-16 space-y-0">
            {milestones.map((milestone) => (
              <div 
                key={milestone.year} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-t border-border first:border-t-0"
              >
                <div className="md:col-span-2">
                  <span className={`text-2xl font-bold ${milestone.year === "Now" ? "text-primary" : "text-foreground"}`}>
                    {milestone.year}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-bold">{milestone.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            BE PART OF OUR STORY
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/70 max-w-xl mx-auto">
            Join the leaders who are shaping the future with MSK.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | MSK Consultants",
  description: "Learn about MSK Consultants - our mission, values, and the team dedicated to guiding your success in AI, entrepreneurship, and sustainable investments.",
}

const team = [
  {
    name: "Sarah Chen",
    role: "Managing Partner",
    focus: "AI Strategy",
    bio: "Former VP at Google AI, 15+ years in tech leadership"
  },
  {
    name: "Michael Torres",
    role: "Partner",
    focus: "Green Energy",
    bio: "Led $500M+ in sustainable energy investments"
  },
  {
    name: "David Okonkwo",
    role: "Partner",
    focus: "Entrepreneurship",
    bio: "Serial entrepreneur, 3 successful exits"
  },
]

const values = [
  { number: "01", title: "Innovation First", desc: "Pushing boundaries in every engagement" },
  { number: "02", title: "Sustainability", desc: "Building for the long term" },
  { number: "03", title: "Partnership", desc: "Your success is our success" },
  { number: "04", title: "Excellence", desc: "Nothing less than the best" },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              About Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              WE ARE
              <br />
              <span className="text-primary">MSK</span>
            </h1>
            <p className="mt-8 text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              A collective of industry veterans, innovators, and visionaries 
              dedicated to shaping the future of business through AI, entrepreneurship, 
              and sustainable investments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
                EMPOWERING THE NEXT GENERATION OF LEADERS
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                MSK Consultants was founded on a simple belief: the most transformative 
                businesses are those that combine cutting-edge technology with sustainable 
                practices and entrepreneurial spirit.
              </p>
              <p>
                We bring together deep expertise across artificial intelligence, venture 
                building, and green energy to help organizations and individuals navigate 
                the complexities of modern business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Our Values
          </span>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-background">
            {values.map((value) => (
              <div key={value.number} className="p-8 border-b md:border-r last:border-r-0 border-border">
                <span className="text-sm font-mono text-muted-foreground">{value.number}</span>
                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Leadership
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
                MEET THE TEAM
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Industry veterans with decades of combined experience across AI, 
              entrepreneurship, and sustainable investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] bg-secondary mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-secondary-foreground/10">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary via-secondary/80 to-transparent">
                    <span className="text-xs uppercase tracking-wider text-primary">{member.focus}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            READY TO WORK WITH US?
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/70 max-w-xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

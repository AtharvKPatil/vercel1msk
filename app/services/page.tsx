import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Brain, Rocket, Leaf, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | MSK Consultants",
  description: "Comprehensive advisory services in AI strategy, entrepreneurship guidance, green energy investments, and strategic consulting.",
}

const services = [
  {
    id: "ai",
    number: "01",
    icon: Brain,
    title: "AI Strategy & Implementation",
    subtitle: "Transform with Intelligence",
    description: "Navigate the AI revolution with confidence. From strategy development to implementation, we help organizations harness the full potential of artificial intelligence.",
    features: [
      "AI readiness assessment and roadmap",
      "Machine learning strategy development",
      "AI governance and ethics frameworks",
      "Implementation and change management",
      "AI talent strategy and training",
    ],
    color: "bg-primary"
  },
  {
    id: "entrepreneurship",
    number: "02",
    icon: Rocket,
    title: "Entrepreneurship Advisory",
    subtitle: "Build What Matters",
    description: "Turn bold ideas into thriving ventures. Our entrepreneurship advisory combines strategic guidance with hands-on support to help founders build, scale, and succeed.",
    features: [
      "Business model development",
      "Go-to-market strategy",
      "Fundraising preparation and support",
      "Operational scaling frameworks",
      "Exit planning and execution",
    ],
    color: "bg-accent"
  },
  {
    id: "green-energy",
    number: "03",
    icon: Leaf,
    title: "Green Energy Investments",
    subtitle: "Invest in Tomorrow",
    description: "Navigate the sustainable energy landscape with expert guidance. We help investors and organizations identify, evaluate, and execute green energy investments that deliver returns and impact.",
    features: [
      "Investment opportunity assessment",
      "Due diligence and risk analysis",
      "Portfolio strategy for sustainability",
      "Regulatory compliance guidance",
      "Impact measurement and reporting",
    ],
    color: "bg-primary"
  },
  {
    id: "investment",
    number: "04",
    icon: TrendingUp,
    title: "Strategic Advisory",
    subtitle: "Navigate Complexity",
    description: "Strategic guidance for complex business challenges. We work alongside leadership teams to develop and execute strategies that drive sustainable growth.",
    features: [
      "Strategic planning and execution",
      "Market entry and expansion",
      "Digital transformation",
      "Organizational design",
      "M&A advisory",
    ],
    color: "bg-accent"
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              EXPERTISE THAT
              <br />
              <span className="text-primary">DELIVERS</span>
            </h1>
            <p className="mt-8 text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Comprehensive advisory services designed to help visionary leaders and 
              organizations navigate complexity and achieve transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`py-24 lg:py-32 ${index % 2 === 1 ? "bg-muted" : ""} scroll-mt-24`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link href="/contact" className="flex items-center gap-2">
                        Discuss This Service
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-background border border-border p-8 lg:p-10">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    What We Offer
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Discover", desc: "Deep dive into your challenges, goals, and context" },
              { num: "02", title: "Design", desc: "Develop tailored strategies and actionable plans" },
              { num: "03", title: "Deliver", desc: "Execute with precision and measure impact" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <span className="text-5xl font-bold text-primary">{step.num}</span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-secondary-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="text-primary">GREAT TOGETHER</span>
          </h2>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

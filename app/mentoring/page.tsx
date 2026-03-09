import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Users, Target, Zap, CheckCircle2, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Mentoring | MSK Consultants",
  description: "Personalized mentoring programs for aspiring entrepreneurs, emerging leaders, and professionals looking to excel in AI, entrepreneurship, and sustainable investments.",
}

const programs = [
  {
    name: "Executive Track",
    duration: "6 months",
    focus: "Senior leaders and executives",
    description: "One-on-one mentoring for senior leaders navigating complex strategic decisions.",
    features: [
      "Monthly 1:1 sessions with a partner",
      "Strategic challenge workshops",
      "Executive peer network access",
      "Quarterly board-level presentations",
    ],
    icon: Target,
  },
  {
    name: "Founder Track",
    duration: "12 months",
    focus: "Startup founders and entrepreneurs",
    description: "Comprehensive support for founders building and scaling their ventures.",
    features: [
      "Bi-weekly mentor sessions",
      "Investor introduction support",
      "Go-to-market strategy guidance",
      "Founder community access",
    ],
    icon: Zap,
  },
  {
    name: "Emerging Leaders",
    duration: "9 months",
    focus: "Rising professionals",
    description: "Accelerate your career with structured mentoring and skill development.",
    features: [
      "Monthly group sessions",
      "Personal development planning",
      "Industry expert workshops",
      "Career transition support",
    ],
    icon: Users,
  },
]

const testimonials = [
  {
    quote: "The mentoring I received fundamentally changed how I approach strategic decisions. The insights were invaluable.",
    author: "Jennifer Park",
    role: "CEO, TechStart",
  },
  {
    quote: "MSK's founder track gave me the tools and confidence to raise our Series A. Their network is incredible.",
    author: "Marcus Johnson",
    role: "Founder, GreenFlow",
  },
]

export default function MentoringPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Mentoring Programs
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              ACCELERATE
              <br />
              <span className="text-primary">YOUR GROWTH</span>
            </h1>
            <p className="mt-8 text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Personalized mentoring from industry veterans who&apos;ve been where you want to go. 
              Because the best way to learn is from those who&apos;ve done it.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Our Programs
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
              CHOOSE YOUR PATH
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
            {programs.map((program) => (
              <div 
                key={program.name} 
                className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 border-border"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{program.duration}</span>
                </div>
                
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  {program.focus}
                </p>
                <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter mb-16">
            FROM OUR MENTEES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 lg:p-10 border border-border relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-8 right-8" />
                <p className="text-lg leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
                YOUR JOURNEY STARTS HERE
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our mentoring process is designed to meet you where you are and 
                help you get where you want to go.
              </p>
            </div>

            <div className="space-y-0 border border-border">
              {[
                { num: "01", title: "Apply", desc: "Tell us about your goals and challenges" },
                { num: "02", title: "Match", desc: "We pair you with the perfect mentor" },
                { num: "03", title: "Grow", desc: "Regular sessions and structured development" },
                { num: "04", title: "Succeed", desc: "Achieve your goals with ongoing support" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-6 p-6 border-b last:border-b-0 border-border">
                  <span className="text-2xl font-bold text-primary">{step.num}</span>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            READY TO LEVEL UP?
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/70 max-w-xl mx-auto">
            Applications are open for all programs. Let&apos;s discuss which track is right for you.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
              <Link href="/contact" className="flex items-center gap-2">
                Apply Now
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

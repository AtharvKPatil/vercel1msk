import Link from "next/link"
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Story", href: "/story" },
    { name: "Services", href: "/services" },
    { name: "Mentoring", href: "/mentoring" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Strategy", href: "/services#ai" },
    { name: "Entrepreneurship", href: "/services#entrepreneurship" },
    { name: "Green Energy", href: "/services#green-energy" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:contact@mskconsultants.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Big CTA section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/50 mb-4">
                Let&apos;s Work Together
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                READY TO START?
              </h3>
            </div>
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors"
            >
              Get in Touch
              <div className="w-12 h-12 bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MSK</span>
            </Link>
            <p className="mt-6 text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">
              Advisory services at the intersection of AI innovation, 
              entrepreneurship, and sustainable green energy investments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/50 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/50 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-foreground/50 mb-6">
              Connect
            </h4>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 border border-secondary-foreground/20 flex items-center justify-center hover:bg-secondary-foreground/5 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-secondary-foreground/60">
              contact@mskconsultants.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            {new Date().getFullYear()} MSK Consultants. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-secondary-foreground/40 hover:text-secondary-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-secondary-foreground/40 hover:text-secondary-foreground/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

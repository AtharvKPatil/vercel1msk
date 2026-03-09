"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Story", href: "/story" },
  { name: "Services", href: "/services" },
  { name: "Mentoring", href: "/mentoring" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:block">
            MSK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center">
          <Button asChild className="group bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-secondary text-secondary-foreground">
          <div className="flex flex-col h-full pt-24 px-8">
            <div className="flex-1 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-4 text-4xl font-medium border-b border-secondary-foreground/10 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-sm text-secondary-foreground/40 mr-4">0{index + 1}</span>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-8">
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

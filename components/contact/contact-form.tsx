"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const services = [
  "AI Strategy",
  "Entrepreneurship Advisory",
  "Green Energy Investments",
  "Strategic Advisory",
  "Mentoring Programs",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary mx-auto mb-6 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-secondary-foreground/70">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full bg-transparent border-b border-secondary-foreground/20 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:border-primary focus:outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full bg-transparent border-b border-secondary-foreground/20 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:border-primary focus:outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full bg-transparent border-b border-secondary-foreground/20 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:border-primary focus:outline-none transition-colors"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="w-full bg-transparent border-b border-secondary-foreground/20 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:border-primary focus:outline-none transition-colors"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-4">
          I&apos;m interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`px-4 py-2 text-sm border transition-colors ${
                selectedServices.includes(service)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-secondary-foreground border-secondary-foreground/20 hover:border-secondary-foreground/40"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-secondary-foreground/20 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14"
      >
        <span className="flex items-center gap-2">
          Send Message
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Button>
    </form>
  )
}

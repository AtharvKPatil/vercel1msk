import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | MSK Consultants",
  description: "Get in touch with MSK Consultants. Schedule a consultation to discuss how we can help with your AI, entrepreneurship, or sustainable investment needs.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@mskconsultants.com",
    href: "mailto:contact@mskconsultants.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "San Francisco, CA",
    href: "#",
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-foreground/50">
              Contact
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9]">
              LET&apos;S
              <br />
              <span className="text-primary">TALK</span>
            </h1>
            <p className="mt-8 text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
              Ready to transform your vision into reality? We&apos;re here to listen, 
              advise, and partner with you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">
                WE&apos;D LOVE TO
                <br />
                HEAR FROM YOU
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you have a specific project in mind or just want to explore 
                how we might work together, reach out. We respond to every inquiry.
              </p>

              <div className="mt-12 space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-lg font-medium mt-1">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office hours */}
              <div className="mt-12 p-8 bg-muted border border-border">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary text-secondary-foreground p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

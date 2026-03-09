import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm'
});

export const metadata: Metadata = {
  title: 'MSK Consultants | AI, Entrepreneurship & Green Energy Advisory',
  description: 'Expert advisory and consulting services in AI innovation, entrepreneurship, and sustainable green energy investments. Transform your vision into reality.',
  keywords: ['AI consulting', 'entrepreneurship', 'green energy', 'sustainable investments', 'advisory services'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

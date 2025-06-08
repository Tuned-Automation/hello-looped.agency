import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Features } from '@/components/Features'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Features />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import About from './components/About'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    sections.forEach((section) => section.classList.add('reveal-pending'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Timeline />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

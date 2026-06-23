import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import About from './components/About'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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

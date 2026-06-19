import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import About from './components/About'
import Stack from './components/Stack'

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Stack />
    </main>
  )
}

export default App
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Socials from './components/socials'
import Experiences from './components/experiences'
import Projects from './components/projects'
import Contact from './components/contact'

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  navbar.classList.toggle('sticky', window.scrollY > 0)
})

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Socials />
      <Contact />
    </>
  )
}

export default App

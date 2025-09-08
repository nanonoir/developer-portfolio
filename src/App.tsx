import './App.css'
import { About, ContactForm, Footer, Header, HeroSection, ProjectSection } from './components'


function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <ProjectSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App

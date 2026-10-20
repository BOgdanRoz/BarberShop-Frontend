import FinalCta from './sections/FinalCta/FinalCta'
import About from './sections/About/About'
import Barbers from './sections/Barbers/Barbers'
import Gallery from './sections/Gallery/Gallery'
import Hero from './sections/Hero/Hero'
import Portfolio from './sections/Portfolio/Portfolio'
import Services from './sections/Services/Services'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideDecor from './components/SideDecor/SideDecor'

function App() {
  return (
    <div className="page">
      <SideDecor />
      <a className="skip-link" href="#main">
        Перейти до вмісту
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Barbers />
        <Gallery />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App

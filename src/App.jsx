import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './section/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portofolio/Portofolio';
import Testimonials from 'sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';



const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>

    </main>
  )
}

export default App

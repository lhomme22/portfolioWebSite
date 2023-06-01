

import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Services from "./sections/services/Services";
import FAQs from "./sections/faqs/FAQs";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import About from "./sections/about/About" 
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Testimonials from "./sections/testimonials/Testimonials";



const App = () => {
  return <main>  
      <Navbar />
      <Header />
      <Services />
      <FAQs />
      <Footer />
      <FloatingNav />
      <About/>
      <Portfolio/>
      <Contact/>
      <Testimonials/>
    </main>
};

export default App;

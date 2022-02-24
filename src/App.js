import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';
import Gallery from './Components/Gallery/Gallery';
import Services from './Components/Services/Services';
import About from './Components/Aboutme/About';
import Header from './Components/Header/Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Services />
      <Gallery />
      <Testimonial />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;

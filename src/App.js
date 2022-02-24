import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery />
      <Testimonial />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Testimonial />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;

// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout Comp
import Header from './Header';
import Footer from './Footer';

// Pages
import Home from './Home Page/Home';
import About from './About Page/About';
import Contact from './Contact Page/Contact';
import Pricing from './Pricing Page/Pricing';
import Portfolio from './Portfolio Page/Portfolio';

// Styles
import './base.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

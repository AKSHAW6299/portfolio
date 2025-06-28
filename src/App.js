import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </Router>
  )
}

export default App
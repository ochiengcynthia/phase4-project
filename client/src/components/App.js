import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Adoptions from './Adoptions';
import Animals from './Animals';
import Centers from './Centers';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Centers" element={<Centers />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Adoptions" element={<Adoptions />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

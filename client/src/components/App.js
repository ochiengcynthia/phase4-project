import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Adoptions from './Adoptions';
import Animals from './Animals';
import Centers from './Centers';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
    
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Centers" element={<Centers />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Adoptions" element={<Adoptions />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
  );
}

export default App;

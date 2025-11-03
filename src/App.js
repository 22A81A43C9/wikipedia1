import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Wiki from './components/wiki';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wiki />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/wikipedia" element={<Wiki />} />
      </Routes>
      <div className="footer">
  © 2025 Satish Veeravalli
</div>

    </Router>
  );
}

export default App;

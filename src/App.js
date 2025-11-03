import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Wiki from './components/wiki';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Default route for "/" */}
        <Route path="/" element={<Wiki />} />

        <Route path="/nav" element={<Navbar />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/wikipedia" element={<Wiki />} />
      </Routes>
    </Router>
  );
}

export default App;

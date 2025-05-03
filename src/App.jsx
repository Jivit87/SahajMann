// App.jsx - Main Application Component
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import Research from './pages/Research';
import CLD from './pages/CLD';
import EPSAnalysis from './pages/EPSAnalysis';
import DataDashboard from './pages/DataDashboard';
import AboutTeam from './pages/AboutTeam';
import Solutions from './pages/Solutions';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cld" element={<CLD />} />
            <Route path="/eps-analysis" element={<EPSAnalysis />} />
            <Route path="/dashboard" element={<DataDashboard />} />
            <Route path="/solutions" element={<Solutions />} />
           <Route path="/about" element={<AboutTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
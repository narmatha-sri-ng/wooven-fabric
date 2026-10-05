import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Lookbook from './pages/Lookbook';
import Gallery from './pages/Gallery';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="collections" element={<Collections />} />
            <Route path="lookbook" element={<Lookbook />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

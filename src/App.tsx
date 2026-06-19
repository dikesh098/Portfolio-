import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProgress, BackToTop } from './components/ScrollProgress';

import Home           from './pages/Home';
import About          from './pages/About';
import Skills         from './pages/Skills';
import Experience     from './pages/Experience';
import Education      from './pages/Education';
import Projects       from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact        from './pages/Contact';

const PAGE_TRANSITION = {
  initial:  { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  exit:     { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...PAGE_TRANSITION}>
        <Routes location={location}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/skills"         element={<Skills />} />
          <Route path="/experience"     element={<Experience />} />
          <Route path="/education"      element={<Education />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact"        element={<Contact />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <BrowserRouter>
      <Cursor />
      <ScrollProgress />
      <BackToTop />
      {!ready && <Loader onDone={() => setReady(true)} />}
      {ready && (
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}
    </BrowserRouter>
  );
}

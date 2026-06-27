import React, { useState, useEffect } from 'react';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import PeriodicTablePage from './pages/PeriodicTablePage';
import AtomBuilderPage from './pages/AtomBuilderPage';
import QuizPage from './pages/QuizPage';
import LearnPage from './pages/LearnPage';
import Lenis from 'lenis';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical'
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.lenisInstance = lenis;

    return () => {
      lenis.destroy();
      window.lenisInstance = null;
    };
  }, []);

  // Reset scroll to top on page change
  useEffect(() => {
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'table':
        return <PeriodicTablePage />;
      case 'builder':
        return <AtomBuilderPage />;
      case 'quiz':
        return <QuizPage />;
      case 'learn':
        return <LearnPage setActivePage={setActivePage} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Background Floating Orbs */}
      <div className="bg-glow-blob blob-1"></div>
      <div className="bg-glow-blob blob-2"></div>
      <div className="bg-glow-blob blob-3"></div>

      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

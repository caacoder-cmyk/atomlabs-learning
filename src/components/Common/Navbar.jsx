import React from 'react';
import { Atom, Compass, Layers, Award, BookOpen } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'home', label: 'Dashboard', icon: Compass },
    { id: 'learn', label: 'Materi Belajar', icon: BookOpen },
    { id: 'table', label: 'Tabel Periodik', icon: Layers },
    { id: 'builder', label: 'Builder Atom', icon: Atom },
    { id: 'quiz', label: 'Kuis Kimia', icon: Award },
  ];

  return (
    <nav className="glass-panel" style={{
      position: 'relative',
      margin: '16px auto',
      width: 'calc(100% - 32px)',
      maxWidth: '1200px',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 'var(--radius-lg)'
    }}>
      <div 
        onClick={() => setActivePage('home')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-blue))',
          padding: '8px',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
        }}>
          <Atom className="animate-spin-slow" size={24} color="#0a0b10" />
        </div>
        <span className="logo-text" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '20px',
          letterSpacing: '0.05em',
          background: 'linear-gradient(to right, #ffffff, var(--accent-teal))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          AtomLabs
        </span>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px'
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '14px',
                fontWeight: 600,
                color: isActive ? 'var(--accent-teal)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                border: isActive ? '1px solid rgba(0, 242, 254, 0.2)' : '1px solid transparent',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Icon size={18} />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

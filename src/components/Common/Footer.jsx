import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '40px 24px 24px',
      textAlign: 'center',
      borderTop: '1px solid var(--glass-border)',
      width: '100%'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '14px',
          fontWeight: 500
        }}>
          &ldquo;Di alam semesta ini, tidak ada yang diam. Semuanya bergetar, berputar, dan terikat.&rdquo; — Demokritos
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <span>Dibuat dengan</span>
          <Heart size={14} color="var(--color-proton)" fill="var(--color-proton)" />
          <span>untuk pembelajaran kimia interaktif &bull; &copy; {new Date().getFullYear()} AtomLabs</span>
        </div>
      </div>
    </footer>
  );
}

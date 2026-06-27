import React from 'react';
import { Layers, Atom, Award, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export default function Home({ setActivePage }) {
  const cards = [
    {
      id: 'table',
      title: 'Tabel Periodik Interaktif',
      description: 'Eksplorasi unsur-unsur kimia secara mendalam. Pelajari konfigurasi elektron, sifat-sifat fisik, dan fakta unik setiap unsur secara visual.',
      icon: Layers,
      color: 'var(--accent-teal)',
      shadowColor: 'rgba(0, 242, 254, 0.25)',
      badge: 'Unsur & Golongan'
    },
    {
      id: 'builder',
      title: 'Simulasi Builder Atom',
      description: 'Jadilah fisikawan kuantum! Gabungkan proton, neutron, dan elektron secara real-time untuk membangun model Bohr atom dan menemukan nama unsurnya.',
      icon: Atom,
      color: 'var(--accent-magenta)',
      shadowColor: 'rgba(16, 185, 129, 0.25)',
      badge: 'Simulasi Interaktif'
    },
    {
      id: 'quiz',
      title: 'Kuis Evaluasi Kimia',
      description: 'Uji pemahaman Anda tentang struktur atom, elektron valensi, dan periodisitas kimia. Dapatkan lencana skor tertinggi Anda!',
      icon: Award,
      color: 'var(--accent-yellow)',
      shadowColor: 'rgba(56, 189, 248, 0.25)',
      badge: 'Evaluasi Pemahaman'
    }
  ];

  // Subtle floating background chemical formulas
  const formulas = [
    { text: 'H₂O', top: '15%', left: '8%', size: '14px', opacity: 0.15, delay: '0s' },
    { text: 'CH₄', top: '35%', left: '22%', size: '16px', opacity: 0.12, delay: '2s' },
    { text: 'OH⁻', top: '65%', left: '15%', size: '13px', opacity: 0.18, delay: '1s' },
    { text: 'CO₂', top: '80%', left: '6%', size: '16px', opacity: 0.15, delay: '3s' },
    { text: 'NH₃', top: '22%', left: '40%', size: '14px', opacity: 0.1, delay: '4s' },
    { text: 'NaCl', top: '70%', left: '42%', size: '15px', opacity: 0.12, delay: '1.5s' }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
      padding: '20px 0 60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 50%, #05261b 0%, #010907 100%)'
    }}>
      {/* Scoped CSS for exact reference animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-atom {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-orbit1 {
          from { transform: rotateX(65deg) rotateY(-25deg) rotateZ(0deg); }
          to { transform: rotateX(65deg) rotateY(-25deg) rotateZ(360deg); }
        }
        @keyframes spin-orbit2 {
          from { transform: rotateX(55deg) rotateY(30deg) rotateZ(360deg); }
          to { transform: rotateX(55deg) rotateY(30deg) rotateZ(0deg); }
        }
        @keyframes spin-orbit3 {
          from { transform: rotateX(75deg) rotateY(90deg) rotateZ(0deg); }
          to { transform: rotateX(75deg) rotateY(90deg) rotateZ(360deg); }
        }
        @keyframes spin-orbit4 {
          from { transform: rotateX(45deg) rotateY(-60deg) rotateZ(360deg); }
          to { transform: rotateX(45deg) rotateY(-60deg) rotateZ(0deg); }
        }
        @keyframes pulse-core {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px rgba(0, 242, 254, 0.6)); }
          50% { transform: scale(1.04); filter: drop-shadow(0 0 30px rgba(0, 242, 254, 0.85)); }
        }
        @keyframes dna-float {
          0% { transform: translateY(0px) rotate(10deg); opacity: 0.25; }
          50% { transform: translateY(-15px) rotate(12deg); opacity: 0.35; }
          100% { transform: translateY(0px) rotate(10deg); opacity: 0.25; }
        }
        .bg-formula {
          position: absolute;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--accent-blue);
          pointer-events: none;
          animation: float-slow 6s infinite ease-in-out;
          z-index: 0;
        }
        .atom-particle {
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 12px currentColor;
        }
        .beaker-glow {
          position: absolute;
          bottom: 20px;
          opacity: 0.15;
          color: var(--accent-teal);
          pointer-events: none;
          z-index: 0;
          animation: float-slow 8s infinite ease-in-out;
        }
        @media (max-width: 991px) {
          .dna-illustration {
            display: none !important;
          }
        }
      `}} />

      {/* Background Decorative Chemical Formulas */}
      {formulas.map((f, idx) => (
        <div
          key={idx}
          className="bg-formula"
          style={{
            top: f.top,
            left: f.left,
            fontSize: f.size,
            opacity: f.opacity,
            animationDelay: f.delay
          }}
        >
          {f.text}
        </div>
      ))}

      {/* Decorative Beaker Outline at Bottom-Left */}
      <div className="beaker-glow" style={{ left: '3%', bottom: '40px' }}>
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M35 15 H65 M40 15 V45 L20 100 A 10 10 0 0 0 30 110 H70 A 10 10 0 0 0 80 100 L60 45 V15" />
          <path d="M28 80 H72 M23 95 H77" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Decorative Beaker Outline at Bottom-Right */}
      <div className="beaker-glow" style={{ right: '5%', bottom: '40px' }}>
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 10 H60 M38 10 V30 H52 V10 M38 30 L15 95 A 8 8 0 0 0 22 105 H68 A 8 8 0 0 0 75 95 L52 30" />
          <circle cx="45" cy="75" r="5" />
          <circle cx="35" cy="90" r="4" />
          <circle cx="55" cy="85" r="4" />
        </svg>
      </div>

      {/* DNA Helix Background Illustration (Right side, glowing blue/teal behind the atom) */}
      <div className="dna-illustration" style={{
        position: 'absolute',
        top: '10%',
        right: '20px',
        width: '180px',
        height: '600px',
        pointerEvents: 'none',
        animation: 'dna-float 8s infinite ease-in-out',
        zIndex: 0
      }}>
        <svg width="100%" height="100%" viewBox="0 0 100 600" opacity="0.6">
          <defs>
            <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" />
              <stop offset="100%" stopColor="var(--accent-teal)" />
            </linearGradient>
          </defs>
          <path d="M 30,0 Q 80,75 30,150 T 30,300 T 30,450 T 30,600" fill="none" stroke="url(#dnaGrad)" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 70,0 Q 20,75 70,150 T 70,300 T 70,450 T 70,600" fill="none" stroke="url(#dnaGrad)" strokeWidth="2" strokeDasharray="3 3" />

          {[...Array(12)].map((_, i) => {
            const y = 30 + i * 50;
            const width = Math.abs(50 * Math.sin((y * Math.PI) / 150));
            const leftX = 50 - width / 2;
            const rightX = 50 + width / 2;
            return (
              <g key={i}>
                <line x1={leftX} y1={y} x2={rightX} y2={y} stroke="rgba(0, 242, 254, 0.4)" strokeWidth="1.5" />
                <circle cx={leftX} cy={y} r="3" fill="var(--accent-teal)" />
                <circle cx={rightX} cy={y} r="3" fill="var(--accent-blue)" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hero Section (Pixel-Perfect Side-by-Side Layout) */}
      <section className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative',
        zIndex: 1,
        marginTop: '20px'
      }}>

        {/* Left Side: Information & Branding */}
        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px'
        }}>
          {/* Top Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(79, 172, 254, 0.05)',
            border: '1.5px solid rgba(0, 242, 254, 0.4)',
            padding: '8px 18px',
            borderRadius: 'var(--radius-full)',
            fontSize: '12px',
            color: 'var(--accent-teal)',
            fontWeight: 700,
            letterSpacing: '0.05em',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.15)'
          }}>
            <Atom size={14} className="animate-spin-slow" />
            <span>PLATFORM PEMBELAJARAN INTERAKTIF PERKEMBANGAN ATOM</span>
          </div>

          {/* Main Welcome Heading */}
          <h1 style={{
            fontSize: 'clamp(42px, 5.5vw, 60px)',
            lineHeight: '1.15',
            fontWeight: 800,
            margin: 0,
            fontFamily: 'var(--font-heading)'
          }}>
            Selamat Datang di <br />
            <span style={{
              background: 'linear-gradient(to right, #ffffff, var(--accent-blue), var(--accent-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Pembelajaran Atom
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            maxWidth: '520px',
            margin: 0
          }}>
            Platform belajar interaktif untuk memahami konsep atom, struktur materi, dan dunia kimia dengan cara menyenangkan.
          </p>

          {/* Call to Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            width: '100%',
            marginTop: '8px'
          }}>
            <button
              className="btn btn-primary"
              onClick={() => setActivePage('learn')}
              style={{
                padding: '14px 28px',
                borderRadius: 'var(--radius-full)',
                fontSize: '16px',
                minWidth: '150px'
              }}
            >
              Mulai Belajar
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setActivePage('learn')}
              style={{
                padding: '14px 28px',
                borderRadius: 'var(--radius-full)',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                minWidth: '150px',
                backgroundColor: 'transparent',
                borderColor: 'rgba(0, 242, 254, 0.4)'
              }}
            >
              <BookOpen size={16} color="var(--accent-teal)" />
              <span style={{ color: 'var(--text-primary)' }}>Lihat Materi</span>
            </button>
          </div>

          {/* Bottom Highlights (Horizontal rows matching the reference image layout) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            width: '100%',
            marginTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '32px'
          }}>
            {/* Highlight 1 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(138, 43, 226, 0.15)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Layers size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Materi Interaktif</span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Belajar lebih mudah dengan animasi</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(0, 242, 254, 0.15)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <HelpCircle size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Latihan Soal</span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Uji pemahaman tiap pertemuan</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(234, 179, 8, 0.15)',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-yellow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Kuis</span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Uji Pemahamanmu secara general

                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Animated 3D Atom Model (Exactly matching Reference Image) */}
        <div style={{
          flex: '1 1 350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          position: 'relative'
        }}>

          <div style={{
            position: 'relative',
            width: '340px',
            height: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '800px',
            animation: 'float-atom 5s infinite ease-in-out'
          }}>

            {/* Background glowing halo */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,242,254,0.18) 0%, rgba(79,172,254,0.02) 60%, transparent 80%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }} />

            {/* Central Globe / Nucleus (Solid Blue Sphere with Latitude/Longitude Lines matching Reference) */}
            <div style={{
              position: 'absolute',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #5cb6ff, #1d6cfb 40%, #001e52 90%)',
              animation: 'pulse-core 3s infinite ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0, 242, 254, 0.45)',
              zIndex: 10,
              overflow: 'hidden'
            }}>
              {/* Internal grid lines overlay for tech sphere look */}
              <div style={{
                position: 'absolute', width: '100%', height: '100%',
                border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%',
                transform: 'scaleX(0.4)'
              }} />
              <div style={{
                position: 'absolute', width: '100%', height: '100%',
                border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%',
                transform: 'scaleY(0.4)'
              }} />
              {/* Light reflection spot */}
              <div style={{
                width: '18px', height: '18px', borderRadius: '50%',
                backgroundColor: '#ffffff', filter: 'blur(2px)',
                position: 'absolute', top: '16px', left: '16px',
                opacity: 0.8
              }} />
            </div>

            {/* Orbit 1: Tilted -25deg, Green electrons (top and bottom) */}
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transformStyle: 'preserve-3d',
              animation: 'spin-orbit1 7s infinite linear'
            }}>
              <div style={{
                position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
                borderRadius: '50%', border: '1px solid rgba(0, 242, 254, 0.3)', pointerEvents: 'none'
              }} />
              {/* Green electron 1 */}
              <div className="atom-particle" style={{
                top: '0', left: '50%', width: '18px', height: '18px',
                backgroundColor: '#82e639', color: '#82e639',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #82e639'
              }} />
              {/* Green electron 2 (opposite side) */}
              <div className="atom-particle" style={{
                top: '100%', left: '50%', width: '18px', height: '18px',
                backgroundColor: '#82e639', color: '#82e639',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #82e639'
              }} />
            </div>

            {/* Orbit 2: Tilted +35deg, Red electrons (left and right) */}
            <div style={{
              position: 'absolute',
              width: '310px',
              height: '310px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transformStyle: 'preserve-3d',
              animation: 'spin-orbit2 9s infinite linear'
            }}>
              <div style={{
                position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
                borderRadius: '50%', border: '1px solid rgba(243, 85, 136, 0.3)', pointerEvents: 'none'
              }} />
              {/* Red electron 1 */}
              <div className="atom-particle" style={{
                top: '50%', left: '0', width: '18px', height: '18px',
                backgroundColor: '#ff4d4d', color: '#ff4d4d',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #ff4d4d'
              }} />
              {/* Red electron 2 (opposite side) */}
              <div className="atom-particle" style={{
                top: '50%', left: '100%', width: '18px', height: '18px',
                backgroundColor: '#ff4d4d', color: '#ff4d4d',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #ff4d4d'
              }} />
            </div>

            {/* Orbit 3: Almost Vertical, Yellow electron */}
            <div style={{
              position: 'absolute',
              width: '290px',
              height: '290px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transformStyle: 'preserve-3d',
              animation: 'spin-orbit3 6s infinite linear'
            }}>
              <div style={{
                position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
                borderRadius: '50%', border: '1px solid rgba(255, 223, 0, 0.3)', pointerEvents: 'none'
              }} />
              {/* Yellow electron */}
              <div className="atom-particle" style={{
                top: '100%', left: '50%', width: '18px', height: '18px',
                backgroundColor: '#ffdb1e', color: '#ffdb1e',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #ffdb1e'
              }} />
            </div>

            {/* Orbit 4: Tilted -60deg, Additional Red electron matching reference complexity */}
            <div style={{
              position: 'absolute',
              width: '295px',
              height: '295px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transformStyle: 'preserve-3d',
              animation: 'spin-orbit4 8s infinite linear'
            }}>
              <div style={{
                position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px',
                borderRadius: '50%', border: '1px solid rgba(0, 242, 254, 0.3)', pointerEvents: 'none'
              }} />
              {/* Red electron */}
              <div className="atom-particle" style={{
                top: '0', left: '50%', width: '18px', height: '18px',
                backgroundColor: '#ff4d4d', color: '#ff4d4d',
                transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px #ff4d4d'
              }} />
            </div>

          </div>
        </div>

      </section>

      {/* Main Features Grid (Pilih Modul) */}
      <section className="container" style={{ marginTop: '20px', zIndex: 1 }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '36px',
          color: '#ffffff'
        }}>

        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setActivePage(card.id)}
                className="glass-panel"
                style={{
                  padding: '32px',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  border: '1px solid var(--glass-border)',
                  transition: 'all var(--transition-normal)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(6, 22, 32, 0.55)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = card.color;
                  e.currentTarget.style.boxShadow = `0 12px 30px ${card.shadowColor}`;
                  e.currentTarget.style.background = 'rgba(6, 22, 32, 0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                  e.currentTarget.style.background = 'rgba(6, 22, 32, 0.55)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: card.color,
                  filter: 'blur(45px)',
                  opacity: 0.08,
                  pointerEvents: 'none'
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    color: card.color,
                    fontWeight: 700
                  }}>
                    {card.badge}
                  </div>
                  <div style={{
                    color: card.color,
                    backgroundColor: `rgba(${card.id === 'table' ? '0, 242, 254' : card.id === 'builder' ? '243, 85, 136' : '255, 223, 0'}, 0.1)`,
                    padding: '10px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700 }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.65'
                  }}>
                    {card.description}
                  </p>
                </div>

                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: card.color
                }}>
                  <span>Mulai Belajar</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Facts Section */}
      <section className="container" style={{ zIndex: 1 }}>
        <div className="glass-panel" style={{
          padding: '40px',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(6, 22, 32, 0.8), rgba(4, 18, 14, 0.8))',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 800,
            background: 'linear-gradient(to right, var(--accent-teal), var(--accent-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Tahukah Anda?
          </h2>
          <p style={{
            maxWidth: '800px',
            fontSize: '15px',
            color: 'var(--text-primary)',
            lineHeight: '1.8',
            fontStyle: 'italic'
          }}>
            &ldquo;Semua materi di alam semesta kita, termasuk tubuh Anda, bintang-bintang di angkasa, dan smartphone yang Anda pegang saat ini, 99.9999999% volumenya adalah ruang kosong! Jika kita membuang seluruh ruang kosong di dalam semua atom tubuh seluruh umat manusia di Bumi, seluruh manusia bisa muat di dalam sebuah apel.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}

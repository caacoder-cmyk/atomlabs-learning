import React, { useState, useEffect } from 'react';
import { Plus, Minus, RotateCcw, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import elementsData from '../data/periodicTable.json';

export default function AtomBuilderPage() {
  const [protons, setProtons] = useState(1);
  const [neutrons, setNeutrons] = useState(0);
  const [electrons, setElectrons] = useState(1);

  const [currentElement, setCurrentElement] = useState(null);
  const [isStable, setIsStable] = useState(true);

  // Update element info when protons change
  useEffect(() => {
    const match = elementsData.find(el => el.number === protons);
    setCurrentElement(match || null);
  }, [protons]);

  // Isotope Stability Heuristics
  useEffect(() => {
    if (protons === 0) {
      setIsStable(true);
      return;
    }
    
    let stable = false;
    if (protons === 1) {
      stable = neutrons === 0 || neutrons === 1; // H-1, H-2
    } else if (protons === 2) {
      stable = neutrons === 1 || neutrons === 2; // He-3, He-4
    } else if (protons === 3) {
      stable = neutrons === 3 || neutrons === 4; // Li-6, Li-7
    } else if (protons === 4) {
      stable = neutrons === 5; // Be-9
    } else if (protons === 5) {
      stable = neutrons === 5 || neutrons === 6; // B-10, B-11
    } else if (protons === 6) {
      stable = neutrons === 6 || neutrons === 7; // C-12, C-13
    } else if (protons === 7) {
      stable = neutrons === 7 || neutrons === 8; // N-14, N-15
    } else if (protons === 8) {
      stable = neutrons === 8 || neutrons === 9 || neutrons === 10; // O-16, O-17, O-18
    } else {
      const ratio = neutrons / protons;
      stable = ratio >= 1.0 && ratio <= 1.3;
    }
    setIsStable(stable);
  }, [protons, neutrons]);

  // Distribute electrons to Bohr shells
  const getShells = (electronCount) => {
    const shells = [];
    let remaining = electronCount;
    const capacities = [2, 8, 8, 18];
    
    for (let i = 0; i < capacities.length; i++) {
      if (remaining <= 0) break;
      const fill = Math.min(remaining, capacities[i]);
      shells.push(fill);
      remaining -= fill;
    }
    
    if (remaining > 0) {
      shells.push(remaining);
    }
    
    return shells;
  };

  const electronDistribution = getShells(electrons);
  const charge = protons - electrons;

  const getChargeLabel = () => {
    if (charge === 0) return { label: 'Netral (Atom)', color: 'var(--accent-teal)' };
    if (charge > 0) return { label: `Ion Positif (Kation: +${charge})`, color: 'var(--color-proton)' };
    return { label: `Ion Negatif (Anion: ${charge})`, color: 'var(--accent-blue)' };
  };

  const handleReset = () => {
    setProtons(1);
    setNeutrons(0);
    setElectrons(1);
  };

  const loadPreset = (p, n, e) => {
    setProtons(p);
    setNeutrons(n);
    setElectrons(e);
  };

  // Packed layout of nucleus particles at center
  const renderNucleusParticles = () => {
    const particles = [];
    const centerX = 120;
    const centerY = 120;

    // Draw neutrons (orange/peach)
    for (let i = 0; i < neutrons; i++) {
      const radius = 6 + (i * 1.6) % 16;
      const angle = (i * 137.5 * Math.PI) / 180;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      particles.push(
        <circle 
          key={`n-${i}`}
          cx={x} 
          cy={y} 
          r="7.5" 
          fill="var(--color-neutron)" 
          stroke="#050608" 
          strokeWidth="0.8"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      );
    }

    // Draw protons (red/coral)
    for (let i = 0; i < protons; i++) {
      const radius = 2 + (i * 1.9) % 16;
      const angle = ((i * 137.5 + 45) * Math.PI) / 180;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      particles.push(
        <circle 
          key={`p-${i}`}
          cx={x} 
          cy={y} 
          r="7.5" 
          fill="var(--color-proton)" 
          stroke="#050608" 
          strokeWidth="0.8"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
        />
      );
    }

    return particles;
  };

  return (
    <div className="container" style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 4vw, 36px)', 
          fontWeight: 800,
          background: 'linear-gradient(to right, #ffffff, var(--accent-magenta))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Simulasi Builder Atom
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '15px' }}>
          Tambahkan proton (merah), neutron (jingga), dan elektron (biru) untuk merakit struktur atom secara real-time. Pelajari sifat kelistrikan, kestabilan inti, dan nama unsur kimia yang terbentuk.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '30px',
        alignItems: 'start'
      }}>
        
        {/* Visualizer Area */}
        <div className="glass-panel" style={{
          padding: '36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          minHeight: '440px',
          justifyContent: 'center',
          position: 'relative',
          background: 'rgba(6, 22, 32, 0.45)',
          border: '1px solid var(--glass-border)'
        }}>
          <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Model Bohr Real-Time</h4>
          
          <div style={{ position: 'relative', width: '240px', height: '240px' }}>
            <svg width="240" height="240" viewBox="0 0 240 240">
              <defs>
                <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff5e62" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ff9966" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing core background */}
              {(protons > 0 || neutrons > 0) && (
                <circle cx="120" cy="120" r="40" fill="url(#nucleusGlow)" pointerEvents="none" />
              )}

              {/* Concentric orbits */}
              {electronDistribution.map((_, index) => {
                const radius = 38 + index * 26;
                return (
                  <circle
                    key={index}
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Nucleus Particles */}
              {protons === 0 && neutrons === 0 ? (
                <circle cx="120" cy="120" r="10" fill="none" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3,3" />
              ) : (
                <g>{renderNucleusParticles()}</g>
              )}

              {/* Orbiting Electrons with real spins */}
              {electronDistribution.map((electronCount, shellIndex) => {
                const radius = 38 + shellIndex * 26;
                const duration = 10 + shellIndex * 5;
                const electronDots = [];
                for (let i = 0; i < electronCount; i++) {
                  const angle = (i * 2 * Math.PI) / electronCount;
                  const cx = 120 + radius * Math.cos(angle);
                  const cy = 120 + radius * Math.sin(angle);
                  electronDots.push(
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="5.5"
                      fill="var(--color-electron)"
                      style={{ filter: 'drop-shadow(0 0 5px var(--accent-teal))' }}
                    />
                  );
                }

                return (
                  <g key={shellIndex}>
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 120 120"
                        to="360 120 120"
                        dur={`${duration}s`}
                        repeatCount="indefinite"
                      />
                      {electronDots}
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '16px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-proton)', boxShadow: '0 0 6px var(--color-proton)' }} />
              Proton: {protons}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-neutron)', boxShadow: '0 0 6px var(--color-neutron)' }} />
              Neutron: {neutrons}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-electron)', boxShadow: '0 0 6px var(--color-electron)' }} />
              Elektron: {electrons}
            </span>
          </div>
        </div>

        {/* Controls and Information Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Dashboard Info Unsur */}
          <div className="glass-panel-glow" style={{ 
            padding: '28px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            border: '1px solid var(--glass-border-glow)',
            background: 'rgba(6, 22, 32, 0.75)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>Informasi Atom</h3>
              <button 
                onClick={handleReset}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '12px', 
                  color: 'var(--text-secondary)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--glass-border)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-teal)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
              >
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              padding: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.03)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Unsur Kimia</span>
                <span style={{ fontWeight: 800, color: currentElement ? 'var(--accent-teal)' : 'var(--text-secondary)', fontSize: '15px' }}>
                  {currentElement ? `${currentElement.name} (${currentElement.symbol})` : 'Hampa / Tidak Diketahui'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Nomor Atom (Proton)</span>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>{protons}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Massa Atom (Inti)</span>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>{protons + neutrons} u</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Kelistrikan (Muatan)</span>
                <span style={{ fontWeight: 700, color: getChargeLabel().color }}>
                  {getChargeLabel().label}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Kestabilan Inti</span>
                <span style={{ 
                  fontWeight: 700, 
                  color: isStable ? '#10b981' : 'var(--color-proton)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {isStable ? (
                    <><CheckCircle size={15} /> Stabil</>
                  ) : (
                    <><AlertTriangle size={15} /> Radioaktif / Tidak Stabil</>
                  )}
                </span>
              </div>
            </div>

            {currentElement && (
              <div style={{
                display: 'flex',
                gap: '10px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
                padding: '14px',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-sm)'
              }}>
                <Info size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                <span>
                  <strong>Konfigurasi Kulit:</strong> {electronDistribution.join(' &bull; ')} &bull; Golongan unsur ini adalah <strong>{currentElement.category.replace(/-/g, ' ')}</strong>.
                </span>
              </div>
            )}
          </div>

          {/* Builder Controls */}
          <div className="glass-panel" style={{ 
            padding: '28px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            background: 'rgba(6, 22, 32, 0.45)',
            border: '1px solid var(--glass-border)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Partikel Subatomik</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Protons Control */}
              <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontWeight: 700, display: 'block', color: '#ffffff' }}>Proton (p⁺)</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Menentukan unsur kimia</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button 
                    onClick={() => setProtons(p => Math.max(0, p - 1))}
                    disabled={protons === 0}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: protons === 0 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Minus size={15} />
                  </button>
                  <span style={{ fontSize: '20px', fontWeight: 800, width: '28px', textAlign: 'center', color: 'var(--color-proton)' }}>{protons}</span>
                  <button 
                    onClick={() => setProtons(p => Math.min(20, p + 1))}
                    disabled={protons === 20}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: protons === 20 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              {/* Neutrons Control */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                <div>
                  <span style={{ fontWeight: 700, display: 'block', color: '#ffffff' }}>Neutron (n⁰)</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Menentukan kestabilan atom</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button 
                    onClick={() => setNeutrons(n => Math.max(0, n - 1))}
                    disabled={neutrons === 0}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: neutrons === 0 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Minus size={15} />
                  </button>
                  <span style={{ fontSize: '20px', fontWeight: 800, width: '28px', textAlign: 'center', color: 'var(--color-neutron)' }}>{neutrons}</span>
                  <button 
                    onClick={() => setNeutrons(n => Math.min(30, n + 1))}
                    disabled={neutrons === 30}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: neutrons === 30 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              {/* Electrons Control */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                <div>
                  <span style={{ fontWeight: 700, display: 'block', color: '#ffffff' }}>Elektron (e⁻)</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Menentukan muatan kelistrikan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <button 
                    onClick={() => setElectrons(e => Math.max(0, e - 1))}
                    disabled={electrons === 0}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: electrons === 0 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Minus size={15} />
                  </button>
                  <span style={{ fontSize: '20px', fontWeight: 800, width: '28px', textAlign: 'center', color: 'var(--color-electron)' }}>{electrons}</span>
                  <button 
                    onClick={() => setElectrons(e => Math.min(20, e + 1))}
                    disabled={electrons === 20}
                    style={{
                      padding: '8px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      opacity: electrons === 20 ? 0.3 : 1,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Presets */}
          <div className="glass-panel" style={{ 
            padding: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px',
            background: 'rgba(6, 22, 32, 0.45)',
            border: '1px solid var(--glass-border)'
          }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Presets Cepat Unsur</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button onClick={() => loadPreset(1, 0, 1)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px', borderRadius: 'var(--radius-full)' }}>Hidrogen (¹H)</button>
              <button onClick={() => loadPreset(2, 2, 2)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px', borderRadius: 'var(--radius-full)' }}>Helium (⁴He)</button>
              <button onClick={() => loadPreset(6, 6, 6)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px', borderRadius: 'var(--radius-full)' }}>Karbon (¹²C)</button>
              <button onClick={() => loadPreset(8, 8, 8)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px', borderRadius: 'var(--radius-full)' }}>Oksigen (¹⁶O)</button>
              <button onClick={() => loadPreset(11, 12, 11)} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12px', borderRadius: 'var(--radius-full)' }}>Natrium (²³Na)</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

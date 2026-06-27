import React, { useState } from 'react';
import elementsData from '../data/periodicTable.json';
import { Info } from 'lucide-react';

export default function PeriodicTablePage() {
  const [selectedElement, setSelectedElement] = useState(elementsData[0]); // default Hydrogen
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Unsur', color: '#fff' },
    { id: 'diatomic-nonmetal', label: 'Nonlogam Diatomik', color: 'var(--cat-diatomic-nonmetal)' },
    { id: 'noble-gas', label: 'Gas Mulia', color: 'var(--cat-noble-gas)' },
    { id: 'alkali-metal', label: 'Logam Alkali', color: 'var(--cat-alkali-metal)' },
    { id: 'alkaline-earth-metal', label: 'Alkali Tanah', color: 'var(--cat-alkaline-earth-metal)' },
    { id: 'metalloid', label: 'Metaloid', color: 'var(--cat-metalloid)' },
    { id: 'polyatomic-nonmetal', label: 'Nonlogam Poliatomik', color: 'var(--cat-polyatomic-nonmetal)' },
    { id: 'post-transition-metal', label: 'Logam Pasca Transisi', color: 'var(--cat-post-transition-metal)' },
    { id: 'transition-metal', label: 'Logam Transisi', color: 'var(--cat-transition-metal)' },
    { id: 'lanthanide', label: 'Lantanida', color: 'var(--cat-lanthanide)' },
    { id: 'actinide', label: 'Aktinida', color: 'var(--cat-actinide)' }
  ];

  const getCategoryColor = (category) => {
    return `var(--cat-${category})`;
  };

  const getCategoryLabel = (catId) => {
    const category = categories.find(c => c.id === catId);
    return category ? category.label : catId;
  };

  const filteredElements = categoryFilter === 'all'
    ? elementsData
    : elementsData.filter(el => el.category === categoryFilter);

  // Group elements by their grid coordinates
  const elementMap = {};
  elementsData.forEach(el => {
    elementMap[`${el.row}-${el.column}`] = el;
  });

  return (
    <div className="container" style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header & Filter */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(28px, 4vw, 36px)', 
          fontWeight: 800,
          background: 'linear-gradient(to right, #ffffff, var(--accent-teal))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Tabel Periodik Interaktif
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '15px' }}>
          Klik pada unsur kimia di tabel untuk melihat informasi detail dan karakteristik fisisnya secara mendalam.
        </p>

        {/* Category filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          maxWidth: '950px',
          margin: '10px 0',
          padding: '4px',
          borderRadius: 'var(--radius-md)'
        }}>
          {categories.map(cat => {
            const isSelected = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: isSelected ? cat.color : 'var(--glass-border)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: isSelected 
                    ? (cat.id === 'all' ? 'var(--bg-tertiary)' : `${cat.color}25`) 
                    : 'rgba(255, 255, 255, 0.02)',
                  boxShadow: isSelected && cat.id !== 'all' ? `0 0 15px ${cat.color}20` : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span style={{ 
                  display: 'inline-block', 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: cat.color === '#fff' ? 'var(--text-secondary)' : cat.color,
                  marginRight: '8px'
                }} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid & Details Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        
        {/* Table Grid Wrapper with Horizontal Scroll */}
        <div className="glass-panel" style={{
          padding: '28px 24px',
          overflowX: 'auto',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(6, 22, 32, 0.45)',
          border: '1px solid var(--glass-border)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(18, minmax(54px, 1fr))',
            gridTemplateRows: 'repeat(9, minmax(54px, 1fr))', 
            gap: '8px',
            minWidth: '1050px' 
          }}>
            {elementsData.map(el => {
              const isSelected = selectedElement && selectedElement.number === el.number;
              const isHighlighted = categoryFilter === 'all' || el.category === categoryFilter;
              const catColor = getCategoryColor(el.category);
              
              return (
                <div
                  key={el.number}
                  onClick={() => setSelectedElement(el)}
                  style={{
                    gridRow: el.row,
                    gridColumn: el.column,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '8px 6px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(6, 22, 32, 0.6)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--accent-teal)' : `${catColor}44`,
                    boxShadow: isSelected ? '0 0 15px rgba(0, 242, 254, 0.3)' : 'none',
                    cursor: 'pointer',
                    opacity: isHighlighted ? 1 : 0.2,
                    transform: isSelected ? 'scale(1.05)' : 'none',
                    zIndex: isSelected ? 10 : 1,
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = catColor;
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.transform = 'scale(1.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = `${catColor}44`;
                      e.currentTarget.style.backgroundColor = 'rgba(6, 22, 32, 0.6)';
                      e.currentTarget.style.transform = 'none';
                    }
                  }}
                >
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {el.number}
                  </span>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: 800, 
                    color: catColor,
                    textAlign: 'center',
                    letterSpacing: '-0.02em'
                  }}>
                    {el.symbol}
                  </span>
                  <span style={{ 
                    fontSize: '9px', 
                    color: 'var(--text-muted)', 
                    textAlign: 'center', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden',
                    fontWeight: 500
                  }}>
                    {el.name}
                  </span>
                </div>
              );
            })}

            {/* Label for Lanthanides Row */}
            <div style={{
              gridRow: 8,
              gridColumn: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'var(--text-muted)',
              fontWeight: 700
            }}>
              57-71
            </div>

            {/* Label for Actinides Row */}
            <div style={{
              gridRow: 9,
              gridColumn: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'var(--text-muted)',
              fontWeight: 700
            }}>
              89-103
            </div>
          </div>
        </div>

        {/* Selected Element Detail Display */}
        {selectedElement && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            {/* General Info Card */}
            <div className="glass-panel-glow" style={{ 
              padding: '30px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '24px',
              border: '1px solid var(--glass-border-glow)',
              background: 'rgba(6, 22, 32, 0.75)',
              maxWidth: '800px',
              width: '100%',
              borderRadius: 'var(--radius-lg)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      fontWeight: 700
                    }}>
                      Nomor Atom: {selectedElement.number}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      color: '#ffffff',
                      backgroundColor: selectedElement.phase === 'Gas' ? 'rgba(79, 172, 254, 0.25)' : 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700
                    }}>
                      {selectedElement.phase}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '32px', fontWeight: 800, marginTop: '6px' }}>
                    {selectedElement.name}
                  </h3>
                </div>

                <div style={{
                  fontSize: '46px',
                  fontWeight: 900,
                  color: getCategoryColor(selectedElement.category),
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid var(--glass-border)',
                  lineHeight: 1,
                  boxShadow: `0 0 20px ${getCategoryColor(selectedElement.category)}15`
                }}>
                  {selectedElement.symbol}
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Massa Atom</span>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>{selectedElement.mass} u</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Kategori Golongan</span>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: getCategoryColor(selectedElement.category) }}>
                    {getCategoryLabel(selectedElement.category)}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Konfigurasi Elektron</span>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>{selectedElement.electronConfig}</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Kapasitas Kulit</span>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>{selectedElement.shells.join(', ')}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-teal)' }}>
                  <Info size={16} />
                  Karakteristik & Deskripsi
                </span>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {selectedElement.summary}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

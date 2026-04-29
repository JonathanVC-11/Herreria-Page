import { useState, useEffect } from 'react';
import Productos from './Productos';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const visuales = {
  'ventanas': { desc: 'Sistemas corredizos y abatibles de alta ingeniería espacial.' },
  'puertas': { desc: 'Seguridad perimetral con diseños de vanguardia.' },
  'zaguanes': { desc: 'Automatización y estética superior para tu hogar.' },
  'escaleras': { desc: 'Estructuras arquitectónicas de máxima solidez.' },
  'barandales': { desc: 'Líneas limpias y minimalistas para espacios modernos.' },
  'otros': { desc: 'Desarrollo de proyectos especiales y a medida.' }
};

export default function Servicios({ proyectos, categorias = [] }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [verTodos, setVerTodos] = useState(false);
  const [categoriaParaModal, setCategoriaParaModal] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section id="servicios" className="section servicios-section" style={{
      background: 'linear-gradient(180deg, #f1f5f9 0%, #ffffff 50%, #f8fafc 100%)', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,61,165,0.03) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }}></div>

      <div className="section-inner animate-on-scroll servicios-inner" style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            display: 'inline-block', 
            background: 'rgba(0, 61, 165, 0.05)', 
            color: '#003DA5', 
            padding: '8px 20px', 
            borderRadius: '50px', 
            fontSize: '14px', 
            fontWeight: '800', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px',
            border: '1px solid rgba(0, 61, 165, 0.1)'
          }}>
            Catálogo de Soluciones
          </span>
          <h2 className="servicios-title" style={{
            fontWeight: '900', 
            margin: '0 0 20px', 
            color: '#0f172a',
            letterSpacing: '-1px'
          }}>
            Nuestros <span style={{ color: '#003DA5' }}>Servicios</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Desarrollamos estructuras metálicas con precisión milimétrica, combinando resistencia industrial con acabados de alta estética para arquitectura contemporánea.
          </p>
        </div>
        
        <div className="servicios-accordion">
          {categorias.map(cat => {
            const isExpanded = expandedCategory === cat.id;
            const categoryProducts = proyectos ? proyectos.filter(p => p.category_id === cat.id) : [];

            return (
              <div key={cat.id} className="modern-accordion-item" style={{ 
                background: isExpanded ? '#ffffff' : 'transparent',
                borderRadius: isExpanded ? '24px' : '0',
                boxShadow: isExpanded ? '0 20px 40px rgba(15,23,42,0.04)' : 'none',
                borderBottom: isExpanded ? 'none' : '1px solid rgba(15,23,42,0.06)',
                marginBottom: isExpanded ? '16px' : '0',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: isExpanded ? '10px 24px 32px' : '0 16px'
              }}>
                <button
                  onClick={() => toggleCategory(cat.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '32px 0',
                    background: 'transparent',
                    border: 'none',
                    color: isExpanded ? '#003DA5' : '#0f172a',
                    fontSize: '24px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                  className="accordion-btn"
                >
                  <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.name}</span>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isExpanded ? 'rgba(0,61,165,0.1)' : 'rgba(15,23,42,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }} className="icon-wrapper">
                    {isExpanded ? (
                      <ChevronUpIcon className="w-5 h-5" style={{ color: '#003DA5' }} />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" style={{ color: '#64748b' }} />
                    )}
                  </div>
                </button>
                
                <div style={{
                  maxHeight: isExpanded ? '2000px' : '0',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div>
                    <p style={{ color: '#475569', fontSize: '16px', marginBottom: '32px', lineHeight: '1.6', borderLeft: '3px solid #D4A017', paddingLeft: '16px' }}>
                      {visuales[cat.slug]?.desc || 'Ingeniería y diseño a medida con materiales de máxima durabilidad.'}
                    </p>
                    
                    {categoryProducts.length > 0 ? (
                      <div>
                        <div className="servicios-grid" style={{ 
                          display: 'grid', 
                          gap: '32px' 
                        }}>
                          {categoryProducts.slice(0, 3).map(p => (
                            <div 
                              key={p.id} 
                              onClick={() => setProductoSeleccionado(p)}
                              className="futuristic-card"
                            >
                              <div className="card-image-wrapper">
                                <img 
                                  src={p.image_path ? `https://pub-4a2423514ab649f9958a61a720de08df.r2.dev/${p.image_path.replace('/storage/', '').replace(/^\/+/, '')}` : '/imagenes/asador-1.png'} 
                                  alt={p.title} 
                                  className="card-image"
                                />
                                <div className="card-overlay">
                                  <span className="view-btn">Ver Especificaciones</span>
                                </div>
                              </div>
                              <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                                  <h4 style={{ color: '#0f172a', margin: '0', fontSize: '18px', fontWeight: '800' }}>{p.title}</h4>
                                  {p.price && (
                                    <span className="card-price" style={{ color: '#D4A017', fontWeight: '800', whiteSpace: 'nowrap' }}>
                                      {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p.price)}
                                    </span>
                                  )}
                                </div>
                                <div style={{ width: '30px', height: '2px', background: '#D4A017', transition: 'width 0.3s ease' }} className="card-line"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {categoryProducts.length > 3 && (
                          <div style={{ textAlign: 'center', marginTop: '48px' }}>
                            <button
                              onClick={() => setCategoriaParaModal(cat)}
                              className="btn-outline-modern"
                            >
                              Explorar Catálogo Completo de {cat.name}
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', textAlign: 'center', border: '1px dashed #cbd5e1' }}>
                        <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>Sistemas en desarrollo para esta categoría.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{textAlign:'center', marginTop:'80px'}}>
          <button 
            onClick={() => setVerTodos(true)} 
            className="btn-glow-modern"
          >
            Acceder al Portafolio Global
          </button>
        </div>
      </div>

      <style>{`
        /* Animaciones Futuras y Modernas */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-on-scroll {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Layout defaults */
        .servicios-section { padding: 120px 0; }
        .servicios-inner { padding: 0 40px; }
        .servicios-title { font-size: clamp(32px, 5vw, 56px); }
        .servicios-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
        .card-price { font-size: 15px; }

        /* Hover de Acordeon */
        .accordion-btn:hover { color: #003DA5 !important; }
        .accordion-btn:hover .icon-wrapper { background: rgba(0,61,165,0.1) !important; transform: scale(1.1); }
        .modern-accordion-item { border: 1px solid transparent; }
        .modern-accordion-item:hover { border-color: rgba(15,23,42,0.05); }

        /* Tarjetas Futuristas */
        .futuristic-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(15,23,42,0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(15,23,42,0.03);
          position: relative;
        }
        .futuristic-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,61,165,0.2);
          box-shadow: 0 20px 40px rgba(0,61,165,0.1);
        }
        .futuristic-card:hover .card-line { width: 60px !important; }
        
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .futuristic-card:hover .card-image {
          transform: scale(1.08);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,61,165,0.8), rgba(0,61,165,0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .futuristic-card:hover .card-overlay { opacity: 1; }
        
        .view-btn {
          color: white;
          font-weight: 700;
          font-size: 14px;
          padding: 10px 24px;
          border: 2px solid white;
          border-radius: 50px;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .futuristic-card:hover .view-btn { transform: translateY(0); }

        /* Botones Futuros */
        .btn-outline-modern {
          background: transparent;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          padding: 14px 40px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline-modern:hover {
          background: #0f172a;
          color: white;
          border-color: #0f172a;
          box-shadow: 0 10px 20px rgba(15,23,42,0.15);
          transform: translateY(-2px);
        }

        .btn-glow-modern {
          background: linear-gradient(135deg, #003DA5 0%, #002b80 100%);
          color: white;
          padding: 18px 56px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0,61,165,0.3);
          position: relative;
          overflow: hidden;
        }
        .btn-glow-modern::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }
        .btn-glow-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,61,165,0.4);
        }
        .btn-glow-modern:hover::after {
          left: 150%;
        }

        @media (max-width: 768px) {
          .servicios-section { padding: 60px 0; }
          .servicios-inner { padding: 0 16px; }
          .servicios-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px !important; }
          .accordion-btn { font-size: 18px !important; padding: 20px 0 !important; }
          .modern-accordion-item { padding: 0 12px !important; }
          .card-image-wrapper { height: 200px; }
          .card-price { font-size: 14px; }
          .btn-glow-modern { padding: 14px 24px; font-size: 13px; width: 100%; display: block; text-align: center; }
          .btn-outline-modern { padding: 12px 20px; font-size: 13px; width: 100%; display: block; text-align: center; }
        }

        @media (max-width: 480px) {
          .servicios-section { padding: 40px 0; }
          .servicios-grid { grid-template-columns: 1fr; gap: 16px !important; }
          .accordion-btn { font-size: 15px !important; padding: 16px 0 !important; }
          .accordion-btn span { max-width: 85%; }
          .card-image-wrapper { height: auto; aspect-ratio: 4/3; }
          .futuristic-card > div:last-child { padding: 16px !important; }
          .modern-accordion-item { border-radius: 16px !important; }
        }
      `}</style>

      {productoSeleccionado && (
        <Productos onClose={() => setProductoSeleccionado(null)} seleccionadoInicial={productoSeleccionado} />
      )}
      {categoriaParaModal && (
        <Productos onClose={() => setCategoriaParaModal(null)} productos={proyectos} categoriaSeleccionada={categoriaParaModal} />
      )}
      {verTodos && (
        <Productos onClose={() => setVerTodos(false)} productos={proyectos} />
      )}
    </section>
  );
}
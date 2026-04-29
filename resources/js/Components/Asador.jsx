import { useState } from 'react';

export default function Asador({ productos = [] }) {
  const [activa, setActiva] = useState(0);

  const productoDestacado = productos.length > 0 ? productos[activa] : null;
  
  const getImagePath = (producto) => {
    return producto?.image_path ? `https://pub-4a2423514ab649f9958a61a720de08df.r2.dev/${producto.image_path}` : '/imagenes/asador-1.png';
  };

  const fotosProducto = productos.length > 0 
    ? productos.map(p => ({ src: getImagePath(p), label: p.title }))
    : [{ src: '/imagenes/asador-1.png', label: 'Imagen no disponible' }];

  const caracteristicas = productoDestacado?.description 
    ? productoDestacado.description.split('\n').filter(l => l.trim()).slice(0, 4)
    : ['Ingeniería de precisión con estructura de alta resistencia', 'Sistemas modulares adaptables al entorno', 'Acabados anticorrosivos premium', 'Diseño ergonómico y vanguardista'];

  const urlWhatsApp = `https://wa.me/527225645160?text=Hola,%20me%20interesa%20en%20${encodeURIComponent(productoDestacado?.title || 'un producto')}`;

  const nextProduct = () => {
    setActiva((prev) => (prev + 1) % fotosProducto.length);
  };

  const prevProduct = () => {
    setActiva((prev) => (prev === 0 ? fotosProducto.length - 1 : prev - 1));
  };

  return (
    <section id="asador" className="section asador-section" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative tech lines */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,61,165,0.1), transparent)' }}></div>
      <div style={{ position: 'absolute', bottom: '0', right: '0', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.1), transparent)' }}></div>
      
      <div className="section-inner asador-grid animate-fade-in asador-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Galería de imágenes estilo Tech (Carrusel) */}
        <div className="gallery-container" style={{ minWidth: 0 }}>
          <div className="main-image-wrapper" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px', background: '#f1f5f9', boxShadow: '0 30px 60px rgba(15,23,42,0.08)' }}>
            <div className="corner-accent top-left"></div>
            <div className="corner-accent bottom-right"></div>
            
            <img 
              key={`main-img-${activa}`} 
              src={fotosProducto[activa]?.src} 
              alt={fotosProducto[activa]?.label} 
              className="asador-image modern-image-transition"
            />
            <div style={{ position: 'absolute', inset: '0', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px', pointerEvents: 'none' }}></div>
            
            {/* Controles de Carrusel (Flechas) */}
            {fotosProducto.length > 1 && (
              <>
                <button onClick={prevProduct} className="carousel-arrow left-arrow">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextProduct} className="carousel-arrow right-arrow">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>
          
          {/* Miniaturas (Thumbnails) */}
          {fotosProducto.length > 1 && (
            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }} className="hide-scrollbar">
              {fotosProducto.map((f, i) => (
                <div 
                  key={`thumb-${i}`} 
                  onClick={() => setActiva(i)} 
                  className={`thumbnail-wrapper ${activa === i ? 'active' : ''}`}
                  style={{ minWidth: '80px', flex: '0 0 auto' }}
                >
                  <img src={f.src} alt={f.label} style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block' }} />
                  {activa === i && <div className="active-glow"></div>}
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            <div style={{ height: '1px', background: 'rgba(15,23,42,0.1)', flex: 1 }}></div>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>
              {activa + 1} DE {fotosProducto.length} PROYECTOS DISPONIBLES
            </p>
            <div style={{ height: '1px', background: 'rgba(15,23,42,0.1)', flex: 1 }}></div>
          </div>
        </div>

        {/* Información del producto Estilo Glassmorphism (Se actualiza dinámicamente) */}
        <div key={`info-${activa}`} className="product-info-card modern-info-transition" style={{ 
          background: 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '32px', 
          padding: '48px', 
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 25px 50px rgba(15,23,42,0.03)'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ 
              background: 'linear-gradient(135deg, #003DA5 0%, #0052cc 100%)', 
              color: 'white', 
              padding: '6px 16px', 
              borderRadius: '50px', 
              fontSize: '12px', 
              fontWeight: '800',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(0,61,165,0.2)'
            }}>
              Innovación Destacada
            </span>
            <span style={{ 
              background: 'transparent', 
              color: '#d4a017', 
              padding: '6px 16px', 
              borderRadius: '50px', 
              fontSize: '13px', 
              fontWeight: '700',
              border: '1px solid rgba(212,160,23,0.3)'
            }}>
              {productoDestacado?.category?.name || 'Prototipo Premium'}
            </span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <h2 className="asador-title" style={{ fontWeight: '900', margin: '0', color: '#0f172a', lineHeight: '1.1', letterSpacing: '-1px' }}>
              {productoDestacado?.title || 'Estructura Modular Avanzada'}
            </h2>
            {productoDestacado?.price && (
              <span className="asador-price" style={{ 
                background: '#f8fafc', 
                border: '1px solid #e2e8f0',
                color: '#0f172a', 
                borderRadius: '12px', 
                fontWeight: '900', 
                width: 'fit-content'
              }}>
                {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(productoDestacado.price)}
              </span>
            )}
          </div>
          
          <p style={{ color: '#475569', fontSize: '18px', marginBottom: '32px', lineHeight: '1.6' }}>
            {productoDestacado ? 
              (productoDestacado.description?.split('\n')[0] || 'Desarrollo de ingeniería personalizada.') 
              : 'Arquitectura metálica concebida para durar.'
            }
          </p>
          
          {/* Características Tech Specs */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ color: '#0f172a', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
              Especificaciones Técnicas
            </p>
            <div style={{ display: 'grid', gap: '12px' }}>
              {caracteristicas.map((c, i) => (
                <div key={`spec-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(212,160,23,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4A017' }}></div>
                  </div>
                  <p style={{ color: '#334155', fontSize: '15px', margin: '0', lineHeight: '1.5', fontWeight: '500' }}>
                    {typeof c === 'string' ? c.trim() : c}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botón de contacto futurista */}
          <a 
            href={urlWhatsApp} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-tech-glow"
          >
            <span>Iniciar Proyecto Ahora</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>

      <style>{`
        /* Animaciones */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .modern-info-transition {
          animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Layout defaults */
        .asador-section { padding: 120px 0; }
        .asador-inner { padding: 0 40px; gap: 64px; }
        .asador-title { font-size: clamp(32px, 4vw, 48px); }
        .asador-price { font-size: 24px; padding: 8px 16px; }

        /* Estilos de Imagen Tech */
        .asador-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }
        .modern-image-transition {
          animation: fadeIn 0.6s ease-out;
        }
        
        .corner-accent {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 3px solid #003DA5;
          z-index: 10;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; border-radius: 8px 0 0 0; }
        .bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; border-radius: 0 0 8px 0; }
        
        .main-image-wrapper:hover .top-left { top: 15px; left: 15px; transform: scale(1.2); }
        .main-image-wrapper:hover .bottom-right { bottom: 15px; right: 15px; transform: scale(1.2); }

        /* Controles Carrusel */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          border: none;
          border-radius: 50%;
          color: #003DA5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .carousel-arrow:hover {
          background: #003DA5;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        .left-arrow { left: 16px; }
        .right-arrow { right: 16px; }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .thumbnail-wrapper {
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .thumbnail-wrapper:hover {
          opacity: 1;
          transform: translateY(-4px);
        }
        .thumbnail-wrapper.active {
          opacity: 1;
          border-color: #003DA5;
          box-shadow: 0 8px 16px rgba(0,61,165,0.2);
          transform: scale(1.05);
        }
        .active-glow {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(to top, rgba(0,61,165,0.6), transparent);
          pointer-events: none;
        }

        /* Botón Tech */
        .btn-tech-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: #0f172a;
          color: white;
          padding: 20px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .btn-tech-glow::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(0,61,165,0) 0%, rgba(0,61,165,0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .btn-tech-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15,23,42,0.2);
          background: #003DA5;
          border-color: #0052cc;
        }
        .btn-tech-glow:hover::before { opacity: 1; }
        .btn-tech-glow span, .btn-tech-glow svg { position: relative; z-index: 1; }
        .btn-tech-glow:hover svg { transform: translateX(5px); transition: transform 0.3s ease; }

        @media (max-width: 992px) {
          .asador-grid {
            grid-template-columns: 1fr !important;
          }
          .asador-inner { gap: 40px !important; }
          .asador-image {
            height: 400px !important;
          }
          .product-info-card {
            padding: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .asador-section { padding: 60px 0; }
          .asador-inner { padding: 0 16px; gap: 24px !important; }
          .asador-title { font-size: clamp(24px, 6vw, 32px); }
          .asador-price { font-size: 18px; }
          .product-info-card {
            padding: 24px !important;
            border-radius: 20px !important;
          }
          .btn-tech-glow {
            padding: 16px;
            font-size: 15px;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .asador-image {
            height: auto !important;
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
          }
          .gallery-container {
            margin: 0 -16px; /* Bleed to edge on mobile */
            width: 100vw;
            max-width: 100vw;
            overflow: hidden;
          }
          .hide-scrollbar {
            padding: 0 16px 8px 16px !important;
            max-width: 100vw;
            box-sizing: border-box;
          }
          .main-image-wrapper {
            border-radius: 0;
            margin-bottom: 12px !important;
          }
          .thumbnail-wrapper {
            min-width: 60px !important;
          }
          .thumbnail-wrapper img {
            height: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}

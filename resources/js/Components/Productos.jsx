import { useState, useEffect } from 'react';

export default function Productos({ onClose, productos = [], categoriaSeleccionada = null, seleccionadoInicial = null }) {
  const [seleccionado, setSeleccionado] = useState(seleccionadoInicial || null);
  const [mostrarTodos, setMostrarTodos] = useState(!categoriaSeleccionada);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Filtrar productos por categoría si está seleccionada
  const productosFiltrados = mostrarTodos 
    ? productos 
    : productos.filter(p => p.category_id === categoriaSeleccionada?.id);

  const tituloGaleria = mostrarTodos 
    ? 'Catálogo Global' 
    : `Proyectos de ${categoriaSeleccionada?.name || 'esta categoría'}`;

  const formatPrice = (price) => {
    if (!price) return null;
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, 
      background: 'rgba(15, 23, 42, 0.7)', 
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      overflowY: 'auto'
    }} onClick={onClose} className="modal-overlay">
      
      {!seleccionado ? (
        <div onClick={e => e.stopPropagation()} className="modern-glass-modal animate-modal-in" style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.95)', 
          borderRadius: '32px', 
          border: '1px solid rgba(255, 255, 255, 0.5)',
          width: '100%', maxWidth: '1280px', maxHeight: '90vh', overflowY: 'auto', 
          boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
          boxSizing: 'border-box'
        }}>
          {/* Decorative accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #003DA5, #D4A017)' }}></div>
          
          <button 
            onClick={onClose} 
            className="btn-close-modern"
            aria-label="Cerrar"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div style={{ marginBottom: '56px', textAlign: 'center' }}>
            <span style={{
              background: 'rgba(0, 61, 165, 0.05)',
              color: '#003DA5',
              padding: '8px 24px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: '1px solid rgba(0, 61, 165, 0.1)',
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              Portafolio de Soluciones
            </span>
            <h2 style={{
              color: '#0f172a', 
              fontSize: 'clamp(28px, 4vw, 56px)', 
              fontWeight: '900', 
              margin: '0 0 16px',
              letterSpacing: '-1px',
              wordBreak: 'break-word'
            }}>
              {tituloGaleria}
            </h2>
            <p style={{ color: '#475569', fontSize: '18px', margin: '0 auto', maxWidth: '650px', lineHeight: '1.6' }}>
              Explora nuestra colección de proyectos arquitectónicos. Cada pieza representa nuestro compromiso con la innovación y la calidad estructural.
            </p>
            
            {!mostrarTodos && (
              <button 
                onClick={() => setMostrarTodos(true)}
                className="btn-ver-todos"
                style={{ marginTop: '24px' }}
              >
                Explorar todo el portafolio
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            )}
          </div>
          
          <div className="productos-grid" style={{ display: 'grid', gap: '32px' }}>
            {productosFiltrados.length > 0 ? productosFiltrados.map((p, index) => (
              <div 
                key={p.id} 
                onClick={() => setSeleccionado(p)} 
                className="premium-product-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="card-image-container">
                  <img src={p.image_path || '/imagenes/asador-1.png'} alt={p.title || 'Proyecto'} className="product-img" />
                  <div className="card-gradient-overlay"></div>
                  <div className="card-badge">
                    {p.category?.name || 'Diseño Especial'}
                  </div>
                  <div className="view-details-hover">
                    <span>Ver Detalles Técnicos</span>
                  </div>
                </div>
                <div className="card-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                    <h3 className="product-title">{p.title}</h3>
                    {p.price && (
                      <span style={{ 
                        background: 'rgba(212,160,23,0.1)', 
                        color: '#D4A017', 
                        padding: '6px 12px', 
                        borderRadius: '8px', 
                        fontWeight: '800', 
                        fontSize: '15px',
                        whiteSpace: 'nowrap'
                      }}>
                        {formatPrice(p.price)}
                      </span>
                    )}
                  </div>
                  <div className="tech-line"></div>
                </div>
              </div>
            )) : (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 20px', background: '#f8fafc', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(0,61,165,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="32" height="32" fill="none" stroke="#64748b" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>Categoría en Desarrollo</h4>
                <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>Aún no hay proyectos documentados para esta sección.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div onClick={e => e.stopPropagation()} className="modern-glass-modal detail-modal animate-modal-in" style={{
          position: 'relative', background: '#ffffff', borderRadius: '32px', border: '1px solid rgba(148,163,184,0.2)', width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 40px 100px rgba(0,0,0,0.1)', boxSizing: 'border-box'
        }}>
           <div className="detail-sticky-header" style={{ position: 'sticky', top: 0, left: 0, width: '100%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(15,23,42,0.05)', boxSizing: 'border-box' }}>
             <button onClick={() => setSeleccionado(null)} className="btn-back-modern">
               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
               <span>Volver a la galería</span>
             </button>
             <button onClick={onClose} className="btn-close-modern" aria-label="Cerrar">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
           </div>
           
           <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: '40px' }}>
             <div className="detail-image-wrapper">
               <img src={seleccionado.image_path || '/imagenes/asador-1.png'} alt={seleccionado.title || 'Proyecto'} className="detail-img" />
               <div className="tech-corner top-left"></div>
               <div className="tech-corner bottom-right"></div>
             </div>
             
             <div className="detail-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A017' }}></div>
                   <span style={{ color: '#D4A017', fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                     {seleccionado.category?.name || 'Proyecto Especial'}
                   </span>
                 </div>
                 
                 {seleccionado.price && (
                   <div style={{ 
                     background: '#f8fafc', 
                     border: '1px solid #e2e8f0',
                     color: '#0f172a', 
                     padding: '8px 16px', 
                     borderRadius: '12px', 
                     fontWeight: '900', 
                     fontSize: '20px' 
                   }}>
                     {formatPrice(seleccionado.price)}
                   </div>
                 )}
               </div>
               
               <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: '900', margin: '0 0 24px', color: '#0f172a', lineHeight: '1.1', letterSpacing: '-1px', wordBreak: 'break-word' }}>
                 {seleccionado.title}
               </h2>
               
               <div style={{ width: '40px', height: '3px', background: '#003DA5', marginBottom: '24px' }}></div>
               
               <p style={{ color: '#475569', marginBottom: '40px', fontSize: '16px', lineHeight: '1.8' }}>
                 {seleccionado.description || 'Diseño y fabricación a medida utilizando los mejores materiales del mercado para garantizar durabilidad y resistencia extrema.'}
               </p>
               
               <a href={`https://wa.me/527225645160?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20basado%20en:%20${encodeURIComponent(seleccionado.title)}`}
                target="_blank" rel="noreferrer" 
                className="btn-tech-primary"
                >
                <span>Cotizar Proyecto Similar</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
             </div>
           </div>
        </div>
      )}

      <style>{`
        /* Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-modal-in {
          animation: modalFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Buttons */
        .btn-close-modern {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f8fafc;
          color: #64748b;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 20;
        }
        .btn-close-modern:hover {
          background: #fee2e2;
          color: #ef4444;
          border-color: #fca5a5;
          transform: rotate(90deg);
        }

        .btn-back-modern {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          color: #64748b;
          border: none;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 0;
        }
        .btn-back-modern:hover {
          color: #003DA5;
          transform: translateX(-4px);
        }

        .btn-ver-todos {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #003DA5;
          border: none;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }
        .btn-ver-todos:hover {
          color: #D4A017;
          border-color: #D4A017;
          gap: 12px;
        }

        .btn-tech-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #0f172a;
          color: white;
          padding: 20px 40px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(15,23,42,0.2);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-tech-primary:hover {
          background: #003DA5;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,61,165,0.3);
        }

        /* Product Cards */
        .premium-product-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(15,23,42,0.05);
          box-shadow: 0 10px 30px rgba(15,23,42,0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: cardFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          display: flex;
          flex-direction: column;
        }
        .premium-product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,61,165,0.1);
          border-color: rgba(0,61,165,0.2);
        }

        .card-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-product-card:hover .product-img {
          transform: scale(1.1);
        }

        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.8), transparent 60%);
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        .premium-product-card:hover .card-gradient-overlay {
          opacity: 0.8;
          background: linear-gradient(to top, rgba(0,61,165,0.9), transparent 60%);
        }

        .card-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(4px);
          color: #0f172a;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .view-details-hover {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }
        .premium-product-card:hover .view-details-hover {
          opacity: 1;
        }
        .view-details-hover span {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.5);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-product-card:hover .view-details-hover span {
          transform: translateY(0);
        }

        .card-content {
          padding: 24px;
          background: #ffffff;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .product-title {
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 16px;
          line-height: 1.3;
        }
        .tech-line {
          width: 40px;
          height: 3px;
          background: #cbd5e1;
          transition: all 0.4s ease;
          margin-top: auto;
        }
        .premium-product-card:hover .tech-line {
          width: 80px;
          background: #003DA5;
        }

        /* Layout Defaults */
        .productos-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }

        /* Detail Modal */
        .modal-overlay { padding: 24px; }
        .modern-glass-modal { padding: 64px; }
        .detail-sticky-header { padding: 24px 40px; }

        .detail-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .detail-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }
        .tech-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 4px solid #003DA5;
          z-index: 2;
        }
        .top-left { top: 24px; left: 24px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: 24px; right: 24px; border-left: none; border-top: none; }

        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .detail-img {
            height: 350px !important;
          }
          .modern-glass-modal {
            padding: 32px !important;
          }
        }
        
        @media (max-width: 768px) {
          .modal-overlay { padding: 12px !important; }
          .productos-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          }
          .modern-glass-modal {
            padding: 24px !important;
            border-radius: 20px !important;
          }
          .detail-sticky-header {
            padding: 16px 20px !important;
          }
          .detail-img {
            height: 280px !important;
          }
          .detail-modal {
            padding: 0 !important;
          }
          .detail-grid {
            padding: 24px !important;
          }
          .btn-close-modern {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          .modal-overlay { padding: 8px !important; }
          .modern-glass-modal { padding: 16px !important; border-radius: 16px !important; }
          .detail-sticky-header { padding: 12px 16px !important; }
          .detail-grid { padding: 16px !important; gap: 24px !important; }
          .btn-tech-primary {
            width: 100%;
            font-size: 14px;
            padding: 16px 20px;
          }
          .detail-img {
            height: auto !important;
            aspect-ratio: 4/3;
          }
          .productos-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-container {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
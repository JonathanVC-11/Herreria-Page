import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero({ proyectos = [], onProductoClick }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Obtener exactamente 1 proyecto por cada categoría diferente
  const getUniqueCategoryProjects = (projectsArray) => {
    const uniqueProjects = [];
    const seenCategories = new Set();
    
    for (const project of projectsArray) {
      // Usar el ID de la categoría (o un string genérico si no tiene)
      const catId = project.category?.id || 'sin-categoria';
      
      if (!seenCategories.has(catId)) {
        seenCategories.add(catId);
        uniqueProjects.push(project);
      }
    }
    return uniqueProjects;
  };

  const heroProjects = getUniqueCategoryProjects(proyectos);

  if (!mounted || heroProjects.length === 0) return null;

  return (
    <section className="hero-fullscreen" style={{
      width: '100%',
      height: 'auto',
      minHeight: '100vh',
      position: 'relative',
      background: '#f8fafc',
      overflow: 'hidden',
      marginTop: '0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Título Fijo Moderno y Animado */}
      <div className="animate-fade-in-down hero-title-container" style={{
        paddingBottom: '0',
        textAlign: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 10,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Etiqueta Premium Flotante */}
        <div style={{
          background: 'rgba(212, 160, 23, 0.08)',
          padding: '8px 24px',
          borderRadius: '50px',
          marginBottom: '20px',
          border: '1px solid rgba(212, 160, 23, 0.3)',
          boxShadow: '0 4px 20px rgba(212, 160, 23, 0.1)',
          backdropFilter: 'blur(10px)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A017', boxShadow: '0 0 10px #D4A017' }}></div>
          <span style={{ color: '#b8860b', fontWeight: '800', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Excelencia Arquitectónica
          </span>
        </div>
        
        {/* Título Principal Tipografía Moderna */}
        <h1 className="hero-main-title" style={{
          fontWeight: '900',
          lineHeight: '1.05',
          margin: 0,
          color: '#0f172a',
          letterSpacing: '-2px',
          maxWidth: '900px'
        }}>
          IHA <br className="mobile-break" />
          <span style={{ 
            background: 'linear-gradient(135deg, #003DA5 0%, #0066ff 50%, #D4A017 100%)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            paddingBottom: '8px'
          }}>
            Innovación en Herrería y Aluminio
          </span>
        </h1>
        
        {/* Subtítulo Sofisticado */}
        <p className="hero-subtitle" style={{
          color: '#475569',
          marginTop: '16px',
          fontWeight: '500',
          maxWidth: '650px',
          lineHeight: '1.6'
        }}>
          Soluciones de alta gama, diseñadas a la medida exacta de tu proyecto con los más altos estándares de calidad.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        navigation
        autoHeight={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="premium-hero-swiper light-theme animate-fade-in-up"
        style={{ flex: 1, width: '100%', marginTop: '20px' }}
      >
        {heroProjects.map((proyecto) => (
          <SwiperSlide key={proyecto.id} style={{ background: '#f8fafc', height: 'auto' }}>
            <div className="hero-slide-inner" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '0 5vw',
              paddingBottom: '60px'
            }}>
              
              <div className="hero-slide-container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1400px',
                height: '100%',
                zIndex: 2,
                gap: '60px'
              }}>
                
                {/* Contenido Texto */}
                <div className="hero-text-content" style={{ flex: '1', maxWidth: '600px' }}>
                  <span className="hero-slide-tag" style={{
                    display: 'inline-block',
                    color: '#d4a017',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    marginBottom: '16px',
                  }}>
                    — {proyecto.category?.name || 'Destacado Premium'}
                  </span>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }} className="hero-slide-title-wrapper">
                    <h2 className="hero-slide-title" style={{
                      fontWeight: '900',
                      lineHeight: '1.05',
                      margin: '0',
                      color: '#0f172a',
                      letterSpacing: '-1px'
                    }}>
                      {proyecto.title}
                    </h2>
                    {proyecto.price && (
                      <span className="hero-slide-price" style={{
                        display: 'inline-block',
                        background: '#f8fafc',
                        border: '2px solid #e2e8f0',
                        color: '#0f172a',
                        padding: '12px 24px',
                        borderRadius: '16px',
                        fontWeight: '900',
                        width: 'fit-content',
                        boxShadow: '0 4px 15px rgba(15,23,42,0.05)'
                      }}>
                        {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(proyecto.price)}
                      </span>
                    )}
                  </div>
                  
                  <div className="hero-buttons" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => onProductoClick(proyecto)}
                      style={{
                        background: '#003DA5',
                        color: 'white',
                        padding: '18px 44px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '16px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 10px 30px rgba(0, 61, 165, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="btn-modern-primary"
                    >
                      Ver Detalles
                    </button>
                    
                    <a 
                      href={`https://wa.me/527225645160?text=Hola,%20me%20interesa%20el%20proyecto:%20${encodeURIComponent(proyecto.title)}`}
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        background: 'white',
                        color: '#0f172a',
                        padding: '16px 44px',
                        borderRadius: '50px',
                        border: '1px solid #e2e8f0',
                        fontSize: '16px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      className="btn-modern-secondary"
                    >
                      Comprar Ahora
                    </a>
                  </div>
                </div>

                {/* Contenido Imagen */}
                <div className="hero-image-content" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', width: '100%' }}>
                  <div className="image-modern-wrapper">
                    <img 
                      src={proyecto.image_path ? (proyecto.image_path.startsWith('/') || proyecto.image_path.startsWith('data:image') ? proyecto.image_path : `/storage/${proyecto.image_path}`) : '/imagenes/asador-1.png'} 
                      alt={proyecto.title}
                      className="hero-modern-photo"
                    />
                    {/* Decoración geométrica */}
                    <div className="shape-decoration"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* Animaciones Modernas */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Typography Defaults */
        .hero-title-container { padding-top: 130px; }
        .hero-main-title { font-size: clamp(32px, 6vw, 72px); }
        .hero-subtitle { font-size: clamp(16px, 2vw, 22px); }
        .hero-slide-title { font-size: clamp(32px, 5vw, 68px); }
        .hero-slide-price { font-size: 24px; }
        .hero-slide-tag { font-size: 14px; }
        .mobile-break { display: none; }

        /* Estilos de Imagen Moderna y Estandarizada */
        .image-modern-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 4 / 3; /* ESTÁNDAR: Todas las imágenes miden exactamente lo mismo */
          border-radius: 24px;
          perspective: 1000px;
          margin: 0 auto;
        }
        
        .hero-modern-photo {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Recorta la imagen sobrante sin deformarla */
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }
        
        .image-modern-wrapper:hover .hero-modern-photo {
          transform: translateY(-10px) scale(1.02);
        }

        .shape-decoration {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid #003DA5;
          border-radius: 24px;
          z-index: 1;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-modern-wrapper:hover .shape-decoration {
          transform: translate(15px, 15px);
        }

        /* Botones Hover Modernos */
        .btn-modern-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 61, 165, 0.4) !important;
          background: #002b80 !important;
        }
        .btn-modern-secondary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1) !important;
          border-color: #003DA5 !important;
          color: #003DA5 !important;
        }

        /* Estilos Swiper Tema Claro */
        .premium-hero-swiper .swiper-button-next,
        .premium-hero-swiper .swiper-button-prev {
          color: #0f172a !important;
          background: white;
          border: 1px solid #e2e8f0;
          width: 56px !important;
          height: 56px !important;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 20px rgba(15,23,42,0.05);
        }
        
        .premium-hero-swiper .swiper-button-next:hover,
        .premium-hero-swiper .swiper-button-prev:hover {
          background: #003DA5;
          color: white !important;
          transform: scale(1.1);
          border-color: #003DA5;
          box-shadow: 0 15px 30px rgba(0,61,165,0.2);
        }

        .premium-hero-swiper .swiper-button-next:after,
        .premium-hero-swiper .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: 900;
        }

        .premium-hero-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .premium-hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.4s ease;
          margin: 0 8px !important;
        }

        .premium-hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 12px;
          background: #003DA5;
          box-shadow: 0 4px 10px rgba(0,61,165,0.3);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-slide-container {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center;
            padding-top: 0;
            gap: 40px !important;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-image-content {
            justify-content: center !important;
            width: 100%;
          }
          .image-modern-wrapper {
            width: calc(100% - 20px);
            max-width: 500px;
            height: auto;
            aspect-ratio: 4 / 3;
            margin: 0 auto;
          }
          .shape-decoration {
            top: -10px;
            right: -10px;
          }
        }

        @media (max-width: 768px) {
          .hero-title-container { padding-top: 100px; padding-bottom: 16px; }
          .hero-main-title { font-size: clamp(28px, 6vw, 44px); line-height: 1.1; }
          .hero-subtitle { font-size: clamp(14px, 3.5vw, 18px); margin-top: 12px; }
          .hero-slide-tag { font-size: 11px; }
          .mobile-break { display: block; }
          .hero-fullscreen { min-height: auto; height: auto; }
        }

        @media (max-width: 480px) {
          .hero-fullscreen {
            height: auto !important;
            min-height: 100vh !important;
            padding-bottom: 40px;
          }
          .hero-title-container { padding-top: 80px; padding-left: 16px; padding-right: 16px; }
          .hero-main-title { font-size: clamp(24px, 8vw, 36px); letter-spacing: -1px; }
          .hero-slide-title { font-size: clamp(22px, 7vw, 32px); letter-spacing: -0.5px; }
          .hero-slide-price { font-size: clamp(16px, 5vw, 20px); padding: 8px 16px; }
          .hero-slide-title-wrapper { gap: 12px; margin-bottom: 24px; }
          .hero-slide-tag { font-size: 10px; margin-bottom: 8px; }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: 16px;
          }
          .hero-buttons button, .hero-buttons a {
            width: 100%;
            justify-content: center;
            padding: 16px 20px !important;
            font-size: 15px;
          }
          .premium-hero-swiper .swiper-button-next,
          .premium-hero-swiper .swiper-button-prev {
            display: none !important;
          }
          .hero-slide-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-bottom: 40px !important;
          }
          .hero-slide-container {
             gap: 32px !important;
          }
          .image-modern-wrapper {
             width: calc(100% - 10px);
             margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
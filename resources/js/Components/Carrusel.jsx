import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Carrusel({ proyectos = [], onProductoClick }) {
  // Tomar los primeros 5 proyectos para el carrusel
  const proyectosCarrusel = proyectos.slice(0, 5);

  if (proyectosCarrusel.length === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 61, 165, 0.25)',
    }} className="carrusel-destacados">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {proyectosCarrusel.map((proyecto) => (
          <SwiperSlide key={proyecto.id}>
            <div style={{
              background: 'linear-gradient(135deg, #020617 0%, #00296b 100%)',
              height: '460px',
              display: 'flex',
              alignItems: 'center',
              padding: '40px 48px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={() => onProductoClick(proyecto)}
            className="slide-container"
            >
              {/* Decorative stars / shapes */}
              <div style={{position:'absolute', top:'15%', left:'5%', width:'24px', height:'24px', background:'#D4A017', clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', opacity:0.8}}></div>
              <div style={{position:'absolute', bottom:'20%', right:'45%', width:'16px', height:'16px', background:'#38bdf8', clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', opacity:0.6}}></div>
              <div style={{position:'absolute', top:'10%', right:'10%', width:'300px', height:'300px', background:'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)', borderRadius:'50%'}}></div>
              
              <div style={{ flex: '1', zIndex: 2, color: 'white', textAlign: 'left', paddingRight: '20px' }} className="slide-content">
                <span style={{ 
                  color: '#D4A017', 
                  fontSize: '13px', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  display: 'inline-block',
                  marginBottom: '12px'
                }}>
                  {proyecto.category?.name || 'Proyecto Destacado'}
                </span>
                <h3 style={{ 
                  fontSize: 'clamp(28px, 4vw, 40px)', 
                  fontWeight: '800', 
                  margin: '0 0 16px', 
                  lineHeight: '1.2' 
                }}>
                  {proyecto.title}
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'rgba(255,255,255,0.7)', 
                  marginBottom: '32px', 
                  display: '-webkit-box', 
                  WebkitLineClamp: 3, 
                  WebkitBoxOrient: 'vertical', 
                  overflow: 'hidden',
                  lineHeight: '1.6'
                }}>
                  {proyecto.description}
                </p>
                <span style={{
                  background: 'white',
                  color: '#00296b',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '15px',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s',
                }}
                className="btn-ver-detalles"
                >
                  Ver detalles
                </span>
              </div>
              
              <div style={{ 
                flex: '1', 
                height: '100%', 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                justifyContent: 'flex-end', 
                alignItems: 'center' 
              }} className="slide-image">
                 <img 
                   src={proyecto.image_url || '/images/asador-1.png'} 
                   alt={proyecto.title} 
                   style={{ 
                     height: '90%', 
                     maxWidth: '100%', 
                     objectFit: 'contain', 
                     filter: 'drop-shadow(-10px 15px 25px rgba(0,0,0,0.5))',
                     transform: 'scale(1.05)'
                   }} 
                 />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .carrusel-destacados .swiper-button-next,
        .carrusel-destacados .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          width: 44px !important;
          height: 44px !important;
        }
        .carrusel-destacados .swiper-button-next:after,
        .carrusel-destacados .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .carrusel-destacados .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.4;
          width: 30px;
          height: 4px;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .carrusel-destacados .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D4A017 !important;
          width: 40px;
        }
        .slide-container:hover .btn-ver-detalles {
          transform: translateY(-2px);
        }
        
        @media (max-width: 640px) {
          .slide-container {
            flex-direction: column !important;
            padding: 30px 16px 40px 16px !important;
            height: auto !important;
            min-height: auto !important;
            text-align: center !important;
          }
          .slide-content h3 {
            font-size: clamp(24px, 8vw, 32px) !important;
          }
          .slide-content p {
            font-size: 15px !important;
            margin-bottom: 24px !important;
          }
          .slide-content {
            padding-right: 0 !important;
            text-align: center !important;
            margin-bottom: 20px;
          }
          .slide-image {
            justify-content: center !important;
            height: auto !important;
            width: 100%;
          }
          .slide-image img {
            height: auto !important;
            max-height: 220px !important;
            object-fit: contain;
          }
          .btn-ver-detalles {
            width: 100%;
            display: block !important;
          }
          .carrusel-destacados .swiper-button-next,
          .carrusel-destacados .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
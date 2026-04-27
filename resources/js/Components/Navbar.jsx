import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar({ onVerTodos }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar un poco el estilo del navbar al bajar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu {
            display: block !important;
          }
          .main-navbar {
            padding: 10px 16px !important;
            height: 64px !important;
          }
          .main-navbar img {
            height: 40px !important;
          }
          .mobile-menu {
            padding: 6px !important;
          }
          .mobile-menu svg {
            width: 24px;
            height: 24px;
          }
        }
        @media (max-width: 360px) {
          .main-navbar {
            padding: 8px 12px !important;
            height: 60px !important;
          }
          .main-navbar img {
            height: 36px !important;
          }
          .mobile-menu {
            padding: 4px !important;
          }
          .mobile-menu svg {
            width: 22px;
            height: 22px;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 998;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-content {
          text-align: center;
        }
        .mobile-menu-item {
          display: block;
          color: #0f172a;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          margin: 24px 0;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
        }
        .mobile-menu-item:hover {
          color: #003DA5;
        }
        .nav-btn-outline {
          color: #003DA5;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          border: 2px solid rgba(0,61,165,0.3);
          padding: 10px 24px;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          background: transparent;
        }
        .nav-btn-outline:hover {
          background: #003DA5;
          border-color: #003DA5;
          color: white;
          box-shadow: 0 10px 20px rgba(0,61,165,0.15);
          transform: translateY(-2px);
        }
        .nav-btn-primary {
          background: linear-gradient(135deg, #003DA5 0%, #D4A017 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px rgba(0, 61, 165, 0.2);
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .nav-btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }
        .nav-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 61, 165, 0.3);
        }
        .nav-btn-primary:hover::after {
          left: 150%;
        }
      `}</style>
      <nav className="main-navbar" style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 999,
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
        boxShadow: scrolled ? '0 10px 30px rgba(15, 23, 42, 0.04)' : 'none',
        padding: '16px 48px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '90px',
        transition: 'all 0.3s ease'
      }}>
        <div onClick={handleLogoClick} style={{display:'inline-flex', alignItems:'center', cursor:'pointer', transition: 'transform 0.3s ease'}} onMouseEnter={e => e.currentTarget.style.transform='scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}>
          <img src="/imagenes/logo-iha.png" alt="IHA" style={{height:'65px', objectFit:'contain', transition: 'height 0.3s ease'}} />
        </div>
        
        {/* Desktop menu */}
        <div className="nav-links" style={{display:'flex', gap:'32px', alignItems:'center'}}>
          <a href="#servicios" style={{
            color:'#475569', textDecoration:'none', fontSize:'15px', fontWeight:'700', transition:'color 0.2s', cursor:'pointer'
          }} onMouseEnter={e => e.target.style.color='#003DA5'} onMouseLeave={e => e.target.style.color='#475569'}>
            Servicios
          </a>
          <a href="#contacto" style={{
            color:'#475569', textDecoration:'none', fontSize:'15px', fontWeight:'700', transition:'color 0.2s', cursor:'pointer'
          }} onMouseEnter={e => e.target.style.color='#003DA5'} onMouseLeave={e => e.target.style.color='#475569'}>
            Contacto
          </a>
          
          <button onClick={onVerTodos} className="nav-btn-outline">
            Ver Catálogo
          </button>
          
          <a href="https://wa.me/527225645160" target="_blank" rel="noreferrer" className="nav-btn-primary">
            Cotizar Proyecto
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(0,61,165,0.05)',
            border: '1px solid rgba(0,61,165,0.1)',
            color: '#003DA5',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '12px',
            transition: 'all 0.2s'
          }}
        >
          {menuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '90px' }}></div>
      
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <a href="#servicios" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#contacto" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>Contacto</a>
            <button className="mobile-menu-item" style={{color:'#003DA5'}} onClick={() => { setMenuOpen(false); if(onVerTodos) onVerTodos(); }}>
              Ver Catálogo
            </button>
            <a href="https://wa.me/527225645160" target="_blank" rel="noreferrer" className="nav-btn-primary" style={{ marginTop: '20px' }} onClick={() => setMenuOpen(false)}>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ 
    nombre: '', 
    correo: '', 
    telefono: '', 
    categoria: '', 
    presupuesto: '',
    descripcion: '',
    urgencia: 'normal'
  });
  const [enviado, setEnviado] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  
  const handleWA = e => {
    e.preventDefault();
    const txt = `SOLICITUD DE COTIZACIÓN\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Correo: ${form.correo}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Servicio: ${form.categoria}\n` +
      `Presupuesto estimado: ${form.presupuesto || 'No especificado'}\n` +
      `Urgencia: ${form.urgencia}\n` +
      `Descripción:\n${form.descripcion}`;
    window.open(`https://wa.me/527225645160?text=${encodeURIComponent(txt)}`, '_blank');
    setEnviado(true);
    setTimeout(() => {
      setForm({ nombre: '', correo: '', telefono: '', categoria: '', presupuesto: '', descripcion: '', urgencia: 'normal' });
      setEnviado(false);
    }, 2000);
  };

  const getInputStyle = (name) => ({
    width:'100%', 
    background: focusedInput === name ? '#ffffff' : 'rgba(255,255,255,0.7)',
    border: '1px solid',
    borderColor: focusedInput === name ? '#003DA5' : 'rgba(148,163,184,0.3)', 
    borderRadius:'16px',
    padding:'16px 20px', 
    color:'#0f172a', 
    fontSize:'15px', 
    outline:'none', 
    transition:'all 0.3s ease',
    boxShadow: focusedInput === name ? '0 0 0 4px rgba(0,61,165,0.1)' : 'none',
    fontFamily: 'inherit'
  });

  return (
    <section id="contacto" className="section contacto-section" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos de fondo Tech */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,61,165,0.03) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }}></div>

      <div className="section-inner contacto-inner" style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Encabezado */}
        <div style={{textAlign:'center', marginBottom:'80px'}} className="animate-on-scroll">
          <span style={{ 
            display: 'inline-block', 
            background: 'transparent', 
            color: '#D4A017', 
            padding: '6px 16px', 
            borderRadius: '50px', 
            fontSize: '13px', 
            fontWeight: '800', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px',
            border: '1px solid rgba(212, 160, 23, 0.3)'
          }}>
            Conexión Directa
          </span>
          <h2 className="contacto-title" style={{fontWeight:'900', color: '#0f172a', lineHeight:1.1, marginBottom:'20px', letterSpacing: '-1px'}}>
            Inicia tu <span style={{ color: '#003DA5' }}>Proyecto</span>
          </h2>
          <p style={{color:'#64748b', fontSize:'18px', maxWidth:'600px', margin:'0 auto'}}>Nuestros ingenieros y especialistas están listos para materializar tus ideas con la más alta tecnología.</p>
        </div>

        {/* Contenido principal */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'60px', alignItems:'center'}} className="contacto-grid animate-on-scroll">
          
          {/* Lado izquierdo - Información de contacto Glassmorphism */}
          <div className="info-modern-card">
            <div className="info-content-wrapper" style={{ padding: '48px', position: 'relative', zIndex: 2 }}>
              <h3 style={{color:'#0f172a', fontSize:'24px', fontWeight:'800', marginBottom:'40px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{ width: '12px', height: '12px', background: '#D4A017', borderRadius: '50%' }}></div>
                Coordenadas de Contacto
              </h3>
              
              <div className="info-row">
                <p className="info-label">Teléfono Directo</p>
                <p className="info-value">+52 722 564 5160</p>
              </div>

              <div className="info-row">
                <p className="info-label">Correo Electrónico</p>
                <p className="info-value" style={{ wordBreak: 'break-all' }}>caba146bucio@gmail.com</p>
              </div>

              <div className="info-row" style={{ marginBottom: '48px' }}>
                <p className="info-label">Razón Social</p>
                <p className="info-value">IHA Innovacion en Herreria y Aluminio</p>
              </div>

              <div>
                <p className="info-label" style={{ marginBottom: '16px' }}>Plataformas Digitales</p>
                <a 
                  href="https://www.facebook.com/profile.php?id=100063488973885" 
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn-tech"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* Elemento de diseño de la tarjeta */}
            <div className="card-decoration-line"></div>
          </div>

          {/* Lado derecho - Formulario Tech */}
          <div>
            <form onSubmit={handleWA} className="tech-form-container">
              
              <div className="contacto-form-grid" style={{display:'grid', gap:'20px'}}>
                <input 
                  name="nombre" 
                  value={form.nombre} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tu nombre completo" 
                  style={getInputStyle('nombre')}
                  onFocus={() => setFocusedInput('nombre')}
                  onBlur={() => setFocusedInput(null)}
                />
                <input 
                  name="correo" 
                  type="email"
                  value={form.correo} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tu correo electrónico" 
                  style={getInputStyle('correo')}
                  onFocus={() => setFocusedInput('correo')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>

              <div style={{display:'grid', gap:'20px'}} className="contacto-form-grid">
                <input 
                  name="telefono" 
                  value={form.telefono} 
                  onChange={handleChange} 
                  placeholder="Teléfono móvil" 
                  style={getInputStyle('telefono')}
                  onFocus={() => setFocusedInput('telefono')}
                  onBlur={() => setFocusedInput(null)}
                />
                <div style={{ position: 'relative' }}>
                  <select 
                    name="urgencia" 
                    value={form.urgencia} 
                    onChange={handleChange} 
                    style={{...getInputStyle('urgencia'), appearance: 'none'}}
                    onFocus={() => setFocusedInput('urgencia')}
                    onBlur={() => setFocusedInput(null)}
                  >
                    <option value="bajo">Prioridad: Baja</option>
                    <option value="normal">Prioridad: Normal</option>
                    <option value="alta">Prioridad: Alta</option>
                  </select>
                  <div className="select-arrow"></div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <select 
                  name="categoria" 
                  value={form.categoria} 
                  onChange={handleChange} 
                  required 
                  style={{...getInputStyle('categoria'), appearance: 'none'}}
                  onFocus={() => setFocusedInput('categoria')}
                  onBlur={() => setFocusedInput(null)}
                >
                  <option value="">¿Qué proyecto necesitas cotizar?</option>
                  <option>Ventanas de aluminio</option>
                  <option>Puertas y zaguanes</option>
                  <option>Barandales</option>
                  <option>Escaleras</option>
                  <option>Asador de tambor</option>
                  <option>Otro proyecto personalizado</option>
                </select>
                <div className="select-arrow"></div>
              </div>

              <div style={{ position: 'relative' }}>
                <select 
                  name="presupuesto" 
                  value={form.presupuesto} 
                  onChange={handleChange}
                  style={{...getInputStyle('presupuesto'), appearance: 'none'}}
                  onFocus={() => setFocusedInput('presupuesto')}
                  onBlur={() => setFocusedInput(null)}
                >
                  <option value="">Rango de Inversión Estimada</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
                <div className="select-arrow"></div>
              </div>

              <textarea 
                name="descripcion" 
                value={form.descripcion} 
                onChange={handleChange} 
                required
                rows={5} 
                placeholder="Describe los detalles técnicos de tu proyecto..." 
                style={{...getInputStyle('descripcion'), resize:'none'}}
                onFocus={() => setFocusedInput('descripcion')}
                onBlur={() => setFocusedInput(null)}
              />

              <button 
                type="submit" 
                className={`btn-submit-tech ${enviado ? 'success' : ''}`}
                disabled={enviado}
              >
                {enviado ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Transmisión Exitosa
                  </span>
                ) : (
                  <span>Procesar Cotización</span>
                )}
                {!enviado && <div className="btn-sweep"></div>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* Estilos Generales y Animaciones */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Layout defaults */
        .contacto-section { padding: 120px 0; }
        .contacto-inner { padding: 0 40px; }
        .contacto-title { font-size: clamp(36px, 5vw, 56px); }
        .contacto-form-grid { grid-template-columns: 1fr 1fr; }

        /* Información de Contacto Modernizada */
        .info-modern-card {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 30px 60px rgba(15,23,42,0.05);
          position: relative;
          overflow: hidden;
        }
        .card-decoration-line {
          position: absolute;
          top: 0; left: 0;
          width: 8px; height: 100%;
          background: linear-gradient(to bottom, #003DA5, #D4A017);
        }
        
        .info-row {
          margin-bottom: 28px;
          transition: transform 0.3s ease;
        }
        .info-row:hover {
          transform: translateX(10px);
        }
        .info-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }
        .info-value {
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

        .social-btn-tech {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          color: #003DA5;
          background: white;
          text-decoration: none;
          border: 1px solid rgba(0,61,165,0.1);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 20px rgba(0,61,165,0.05);
        }
        .social-btn-tech:hover {
          background: #003DA5;
          color: white;
          transform: translateY(-5px) rotate(5deg);
          box-shadow: 0 15px 30px rgba(0,61,165,0.2);
        }

        /* Formulario Tech */
        .tech-form-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(15,23,42,0.03);
        }
        
        select option {
          background-color: #ffffff;
          color: #0f172a;
          padding: 12px;
          font-family: inherit;
        }

        .select-arrow {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #64748b;
          pointer-events: none;
        }

        .btn-submit-tech {
          background: #003DA5;
          color: #FFFFFF;
          padding: 20px;
          border-radius: 16px;
          border: none;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,61,165,0.2);
        }
        .btn-submit-tech:hover:not(.success) {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,61,165,0.3);
          background: #002b80;
        }
        .btn-submit-tech.success {
          background: #10B981;
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
          transform: scale(1.02);
        }
        .btn-submit-tech span {
          position: relative;
          z-index: 2;
        }
        .btn-sweep {
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
          z-index: 1;
        }
        .btn-submit-tech:hover .btn-sweep {
          left: 150%;
        }

        @media (max-width: 992px) {
          .contacto-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .tech-form-container {
            padding: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .contacto-section { padding: 80px 0; }
          .contacto-inner { padding: 0 24px; }
          .contacto-title { font-size: clamp(28px, 8vw, 36px); }
          .contacto-form-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .info-content-wrapper {
            padding: 32px !important;
          }
          .info-value { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .contacto-section { padding: 60px 0; }
          .tech-form-container {
            padding: 24px !important;
            border-radius: 24px !important;
            gap: 20px !important;
          }
          .info-content-wrapper {
            padding: 24px !important;
          }
          .info-modern-card {
            border-radius: 24px !important;
          }
          .btn-submit-tech {
            padding: 16px;
            font-size: 15px;
            width: 100%;
          }
          input, select, textarea {
            padding: 16px 20px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}

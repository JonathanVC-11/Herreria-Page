export default function Footer() {
  return (
    <footer style={{background:'#f0f0f8', borderTop:'1px solid rgba(0,61,165,0.15)'}}>
      <style>{`
        .footer-inner {
          padding: 60px 40px 32px;
          max-width: 1300px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
          }
          .footer-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-inner {
            padding: 40px 16px 24px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            gap: 24px !important;
          }
          .footer-inner {
            padding: 32px 16px 20px;
          }
          .footer-grid img {
            height: 48px !important;
          }
        }
      `}</style>
      <div className="footer-inner">
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'48px', marginBottom:'48px'}} className="footer-grid">
          <div>
            <a href="#top" style={{display:'inline-flex', textDecoration:'none'}}>
              <img src="/imagenes/logo-iha.png" alt="IHA" style={{height:'56px', objectFit:'contain', marginBottom:'20px', cursor:'pointer'}} />
            </a>
            <p style={{color:'#2d2d2d', fontSize:'14px', lineHeight:1.8, maxWidth:'260px'}}>Innovación en Herrería y Aluminio. Fabricación directa, diseño personalizado.</p>
          </div>
          <div>
            <p style={{background:'linear-gradient(90deg, #D4A017 0%, #003DA5 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontWeight:'700', fontSize:'11px', letterSpacing:'0.14em', marginBottom:'20px'}}>SERVICIOS</p>
            {['Ventanas','Puertas','Canceles','Barandales','Domos','Asadores'].map(s => (
              <a key={s} href="#servicios" style={{display:'block', color:'#2d2d2d', fontSize:'14px', margin:'0 0 10px', textDecoration:'none', transition:'color 0.2s', cursor:'pointer'}}>
                {s}
              </a>
            ))}
          </div>
          <div>
            <p style={{background:'linear-gradient(90deg, #D4A017 0%, #003DA5 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontWeight:'700', fontSize:'11px', letterSpacing:'0.14em', marginBottom:'20px'}}>CONTACTO</p>
            <a href="tel:+527225645160" style={{display:'block', color:'#2d2d2d', fontSize:'14px', margin:'0 0 10px', textDecoration:'none', transition:'color 0.2s', cursor:'pointer'}}>722 564 5160</a>
            <a href="mailto:caba146bucio@gmail.com" style={{display:'block', color:'#2d2d2d', fontSize:'13px', margin:'0 0 20px', textDecoration:'none', transition:'color 0.2s', cursor:'pointer'}}>caba146bucio@gmail.com</a>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(0,61,165,0.3)', paddingTop:'24px'}}>
          <p style={{color:'#2d2d2d', fontSize:'13px', margin:0}}>© {new Date().getFullYear()} IHA Innovacion en Herreria y Aluminio</p>
        </div>
      </div>
    </footer>
  );
}
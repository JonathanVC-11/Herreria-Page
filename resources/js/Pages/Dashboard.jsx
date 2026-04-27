import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    const s = {
        page: {
            minHeight: 'calc(100vh - 80px)',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'DM Sans, sans-serif',
            position: 'relative',
        },
        card: {
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            borderRadius: '32px',
            padding: '48px 40px',
            width: '100%',
            maxWidth: '1000px',
            position: 'relative',
            zIndex: 1,
            animation: 'fadeUp 0.6s ease both',
            boxShadow: '0 30px 60px rgba(15,23,42,0.04)',
            overflow: 'hidden',
            boxSizing: 'border-box',
        },
        navCard: {
            background: '#ffffff',
            border: '1px solid rgba(148,163,184,0.18)',
            borderRadius: '20px',
            padding: '32px',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 10px 30px rgba(15,23,42,0.02)',
            cursor: 'pointer',
            minHeight: '200px',
        },
    };

    return (
        <AdminLayout title="Panel Central">
            <Head title="Panel Central" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
                @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
                .nav-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,61,165,0.1) !important;
                    border-color: rgba(0,61,165,0.3) !important;
                }
                .nav-card:hover .icon-container {
                    transform: scale(1.1);
                    background: linear-gradient(135deg, #003DA5 0%, #002b80 100%) !important;
                    color: white !important;
                }
                
                /* Mobile Perfect Responsive Styles */
                @media (max-width: 768px) {
                    .dashboard-container {
                        padding: 12px !important;
                    }
                    .dashboard-card {
                        padding: 24px 16px !important;
                        border-radius: 20px !important;
                    }
                    .dashboard-title {
                        font-size: 24px !important;
                        word-break: break-word;
                    }
                    .dashboard-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .nav-card {
                        padding: 24px !important;
                        min-height: auto !important;
                        flex-direction: row !important;
                        justify-content: flex-start !important;
                        text-align: left !important;
                    }
                    .nav-card .icon-container {
                        margin-bottom: 0 !important;
                        margin-right: 20px !important;
                        flex-shrink: 0 !important;
                    }
                    .nav-card .text-container {
                        display: flex;
                        flex-direction: column;
                    }
                    .nav-card h3 {
                        margin-bottom: 4px !important;
                        font-size: 18px !important;
                        word-break: break-word;
                    }
                    .nav-card p {
                        text-align: left !important;
                    }
                }
            `}</style>

            <div style={s.page} className="dashboard-container">
                {/* Decoraciones de fondo */}
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,61,165,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                    <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                </div>

                <div style={s.card} className="dashboard-card">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{ 
                            background: 'rgba(0,61,165,0.05)',
                            color: '#003DA5',
                            padding: '8px 24px',
                            borderRadius: '50px',
                            fontWeight: '800',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            border: '1px solid rgba(0,61,165,0.1)',
                            display: 'inline-block',
                            marginBottom: '20px'
                        }}>
                            Panel de Administración
                        </span>
                        <h1 className="dashboard-title" style={{ color: '#0f172a', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', fontFamily: 'Syne, sans-serif', margin: '0 0 16px', letterSpacing: '-1px' }}>
                            ¿Qué deseas <span style={{ 
                                background: 'linear-gradient(135deg, #003DA5 0%, #D4A017 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>gestionar</span> hoy?
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '16px', fontWeight: '500', maxWidth: '500px', margin: '0 auto' }}>
                            Selecciona uno de los módulos disponibles para administrar el contenido de tu plataforma.
                        </p>
                    </div>

                    <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', position: 'relative', zIndex: 2 }}>
                        
                        <Link href="/proyectos" style={{...s.navCard, background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,61,165,0.1)'}} className="nav-card">
                            <div className="icon-container" style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(0,61,165,0.05) 0%, rgba(0,61,165,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', color: '#003DA5' }}>
                                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', fontFamily: 'Syne, sans-serif', marginBottom: '8px' }}>Proyectos</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '1.5' }}>Gestiona el portafolio de trabajos y cotizaciones.</p>
                            </div>
                        </Link>

                        <Link href="/categorias" style={{...s.navCard, background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(212,160,23,0.1)'}} className="nav-card">
                            <div className="icon-container" style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(212,160,23,0.05) 0%, rgba(212,160,23,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', color: '#D4A017' }}>
                                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', fontFamily: 'Syne, sans-serif', marginBottom: '8px' }}>Categorías</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '1.5' }}>Administra los diferentes tipos de servicios.</p>
                            </div>
                        </Link>

                        <Link href="/admin/settings" style={{...s.navCard, background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(100,116,139,0.1)'}} className="nav-card">
                            <div className="icon-container" style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(100,116,139,0.05) 0%, rgba(100,116,139,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', color: '#475569' }}>
                                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', fontFamily: 'Syne, sans-serif', marginBottom: '8px' }}>Configuración</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '1.5' }}>Ajustes globales, textos e información.</p>
                            </div>
                        </Link>

                        <a href="/" target="_blank" rel="noopener noreferrer" style={{...s.navCard, background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(16,185,129,0.1)'}} className="nav-card">
                            <div className="icon-container" style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', color: '#059669' }}>
                                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '800', fontFamily: 'Syne, sans-serif', marginBottom: '8px' }}>Sitio Público</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '1.5' }}>Visualiza la página web activa.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

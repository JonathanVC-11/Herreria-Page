import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { BriefcaseIcon, TagIcon, Cog6ToothIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
    const s = {
        page: {
            minHeight: 'calc(100vh - 80px)',
            background: 'transparent',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: '"Inter", "DM Sans", sans-serif',
            position: 'relative',
        },
        card: {
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '48px',
            width: '100%',
            maxWidth: '1100px',
            position: 'relative',
            zIndex: 1,
            animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
            overflow: 'hidden',
            boxSizing: 'border-box',
        },
        navCard: {
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '32px 24px',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            cursor: 'pointer',
            minHeight: '180px',
        },
    };

    return (
        <AdminLayout title="Panel Central">
            <Head title="Panel Central" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
                
                .nav-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
                    border-color: #cbd5e1;
                }
                .nav-card:hover .icon-wrapper {
                    transform: scale(1.05);
                }
                
                /* Tema Profesional Claro */
                .theme-blue:hover { border-color: #cbd5e1; }
                .theme-blue .icon-wrapper { background: #f0fdf4; color: #16a34a; }
                
                .theme-indigo:hover { border-color: #cbd5e1; }
                .theme-indigo .icon-wrapper { background: #eef2ff; color: #4f46e5; }
                
                .theme-amber:hover { border-color: #cbd5e1; }
                .theme-amber .icon-wrapper { background: #fffbeb; color: #d97706; }
                
                .theme-slate:hover { border-color: #cbd5e1; }
                .theme-slate .icon-wrapper { background: #f8fafc; color: #475569; }

                @media (max-width: 768px) {
                    .dashboard-container { padding: 12px !important; }
                    .dashboard-card { padding: 32px 20px !important; border-radius: 20px !important; }
                    .dashboard-title { font-size: 28px !important; }
                    .dashboard-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
                    .nav-card {
                        padding: 24px !important;
                        min-height: auto !important;
                        flex-direction: row !important;
                        align-items: center !important;
                    }
                    .nav-card .icon-wrapper { margin-bottom: 0 !important; margin-right: 16px !important; }
                    .nav-card .text-container { display: flex; flex-direction: column; }
                    .nav-card h3 { margin-bottom: 4px !important; font-size: 16px !important; }
                }
            `}</style>

            <div style={s.page} className="dashboard-container">
                <div style={s.card} className="dashboard-card">
                    <div style={{ marginBottom: '48px' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-2 w-8 bg-indigo-600 rounded-full"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Workspace Principal</span>
                        </div>
                        <h1 className="dashboard-title" style={{ color: '#0f172a', fontSize: '36px', fontWeight: '800', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Bienvenido al Panel de Control
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '16px', fontWeight: '400', maxWidth: '600px', lineHeight: '1.6' }}>
                            Gestiona el contenido público, proyectos y configuraciones generales desde este espacio de administración.
                        </p>
                    </div>

                    <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        
                        <Link href="/proyectos" style={s.navCard} className="nav-card theme-indigo">
                            <div className="icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.3s ease' }}>
                                <BriefcaseIcon className="w-6 h-6" />
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.01em' }}>Proyectos</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>Gestiona el portafolio de trabajos, fotos y cotizaciones.</p>
                            </div>
                        </Link>

                        <Link href="/categorias" style={s.navCard} className="nav-card theme-amber">
                            <div className="icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.3s ease' }}>
                                <TagIcon className="w-6 h-6" />
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.01em' }}>Categorías</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>Clasifica tus proyectos en diferentes tipos de servicios.</p>
                            </div>
                        </Link>

                        <Link href="/admin/settings" style={s.navCard} className="nav-card theme-slate">
                            <div className="icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.3s ease' }}>
                                <Cog6ToothIcon className="w-6 h-6" />
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.01em' }}>Configuración</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>Ajusta textos globales, colores y enlaces sociales.</p>
                            </div>
                        </Link>

                        <a href="/" target="_blank" rel="noopener noreferrer" style={s.navCard} className="nav-card theme-blue">
                            <div className="icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'all 0.3s ease' }}>
                                <GlobeAltIcon className="w-6 h-6" />
                            </div>
                            <div className="text-container">
                                <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.01em' }}>Sitio Público</h3>
                                <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>Abre una nueva pestaña para ver la web activa.</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

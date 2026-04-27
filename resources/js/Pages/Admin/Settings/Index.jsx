import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ settings, proyectos = [] }) {
    
    // 1. Información de la Empresa
    const formInfo = useForm({
        company_name: settings?.company_name || '',
        phone: settings?.phone || '',
        whatsapp: settings?.whatsapp || '',
        email: settings?.email || '',
    });

    // 2. Apariencia y Colores
    const formColors = useForm({
        primary_color: settings?.primary_color || '#003DA5',
        secondary_color: settings?.secondary_color || '#D4A017',
    });

    // 3. Textos del Sitio
    const formTexts = useForm({
        hero_title: settings?.hero_title || '',
        hero_description: settings?.hero_description || '',
        contact_text: settings?.contact_text || '',
        footer_description: settings?.footer_description || '',
    });

    // 4. Proyectos Destacados
    const formProjects = useForm({
        hero_project_id: settings?.hero_project_id || '',
        featured_project_id_1: settings?.featured_project_id_1 || '',
        featured_project_id_2: settings?.featured_project_id_2 || '',
    });

    // 5. Redes Sociales y Privacidad
    const formSocials = useForm({
        facebook_url: settings?.facebook_url || '',
        instagram_url: settings?.instagram_url || '',
        show_socials: settings?.show_socials ?? true,
        show_prices_publicly: settings?.show_prices_publicly ?? true,
    });

    return (
        <AdminLayout title="Configuración del Sitio">
            <Head title="Configuración del Sitio" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
                
                @keyframes fadeInUp { 
                    from { opacity: 0; transform: translateY(30px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }

                .page-container {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%);
                    display: flex;
                    justify-content: center;
                    padding: 40px 24px;
                    font-family: 'DM Sans', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .decorative-blob-1 {
                    position: absolute; top: -100px; right: -100px;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(0,61,165,0.05) 0%, transparent 70%);
                    border-radius: 50%; filter: blur(40px); z-index: 0;
                }
                .decorative-blob-2 {
                    position: absolute; bottom: -100px; left: -100px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%);
                    border-radius: 50%; filter: blur(40px); z-index: 0;
                }

                .glass-panel {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    border-radius: 24px;
                    padding: 40px;
                    margin-bottom: 32px;
                    box-shadow: 0 20px 40px rgba(15,23,42,0.03);
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    position: relative;
                    z-index: 10;
                }

                .section-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 20px;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 24px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .section-title::before {
                    content: '';
                    display: block;
                    width: 24px;
                    height: 4px;
                    background: #003DA5;
                    border-radius: 2px;
                }

                .settings-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                    margin-bottom: 24px;
                }
                @media (max-width: 640px) {
                    .settings-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .input-tech {
                    width: 100%;
                    background: rgba(255,255,255,0.5);
                    border: 1px solid rgba(148,163,184,0.3);
                    border-radius: 12px;
                    padding: 14px 20px;
                    color: #0f172a;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: inherit;
                    margin-top: 8px;
                }
                .input-tech:focus {
                    background: #ffffff;
                    border-color: #003DA5;
                    box-shadow: 0 0 0 4px rgba(0,61,165,0.1);
                }

                .label-tech {
                    color: #64748b;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    display: block;
                }

                .toggle-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(255,255,255,0.5);
                    border: 1px solid rgba(148,163,184,0.3);
                    padding: 16px 20px;
                    border-radius: 12px;
                    margin-top: 8px;
                }

                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 50px;
                    height: 28px;
                }
                .toggle-switch input { opacity: 0; width: 0; height: 0; }
                .slider {
                    position: absolute; cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: #cbd5e1;
                    transition: .4s; border-radius: 34px;
                }
                .slider:before {
                    position: absolute; content: "";
                    height: 20px; width: 20px;
                    left: 4px; bottom: 4px;
                    background-color: white;
                    transition: .4s; border-radius: 50%;
                }
                input:checked + .slider { background-color: #003DA5; }
                input:checked + .slider:before { transform: translateX(22px); }

                .btn-glow-tech {
                    background: linear-gradient(135deg, #003DA5 0%, #002b80 100%);
                    color: white;
                    padding: 12px 28px;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 8px 16px rgba(0,61,165,0.2);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-glow-tech:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(0,61,165,0.3);
                }
                
                .form-footer {
                    border-top: 1px solid rgba(148,163,184,0.2);
                    padding-top: 24px;
                    display: flex;
                    justify-content: flex-end;
                }

                @media (max-width: 768px) {
                    .glass-panel { padding: 24px 16px !important; }
                }
            `}</style>

            <div className="page-container">
                <div className="decorative-blob-1" />
                <div className="decorative-blob-2" />

                <div style={{ width: '100%', maxWidth: '1000px', zIndex: 10 }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ 
                            background: 'linear-gradient(135deg, #003DA5 0%, #D4A017 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '800',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '12px'
                        }}>
                            Panel de Control
                        </span>
                        <h1 style={{ color: '#0f172a', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', fontFamily: 'Syne, sans-serif', margin: '8px 0 16px', letterSpacing: '-1px' }}>
                            Ajustes <span style={{ color: '#003DA5' }}>Globales</span>
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '15px', fontWeight: '500' }}>
                            Modifica tu información por módulos y guarda solo lo que necesites
                        </p>
                    </div>

                    {/* PANEL 1: DATOS DE CONTACTO */}
                    <div className="glass-panel" style={{ animationDelay: '0s' }}>
                        <h3 className="section-title">Información de la Empresa</h3>
                        <form onSubmit={e => { e.preventDefault(); formInfo.put('/admin/settings'); }}>
                            <div className="settings-grid">
                                <div>
                                    <label className="label-tech">Nombre de la Empresa</label>
                                    <input type="text" className="input-tech" value={formInfo.data.company_name} onChange={e => formInfo.setData('company_name', e.target.value)} />
                                </div>
                                <div>
                                    <label className="label-tech">Correo Electrónico</label>
                                    <input type="email" className="input-tech" value={formInfo.data.email} onChange={e => formInfo.setData('email', e.target.value)} />
                                </div>
                                <div>
                                    <label className="label-tech">Teléfono Principal</label>
                                    <input type="text" className="input-tech" value={formInfo.data.phone} onChange={e => formInfo.setData('phone', e.target.value)} />
                                </div>
                                <div>
                                    <label className="label-tech">WhatsApp</label>
                                    <input type="text" className="input-tech" value={formInfo.data.whatsapp} onChange={e => formInfo.setData('whatsapp', e.target.value)} />
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" disabled={formInfo.processing} className="btn-glow-tech">
                                    {formInfo.processing ? 'Guardando...' : 'Guardar Información'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* PANEL 2: DISEÑO Y APARIENCIA */}
                    <div className="glass-panel" style={{ animationDelay: '0.1s' }}>
                        <h3 className="section-title">Apariencia y Colores</h3>
                        <form onSubmit={e => { e.preventDefault(); formColors.put('/admin/settings'); }}>
                            <div className="settings-grid">
                                <div>
                                    <label className="label-tech">Color Primario (Azul Corporativo)</label>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                                        <input type="color" value={formColors.data.primary_color} onChange={e => formColors.setData('primary_color', e.target.value)} style={{ width: '45px', height: '45px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }} />
                                        <input type="text" className="input-tech" style={{ marginTop: '0' }} value={formColors.data.primary_color} onChange={e => formColors.setData('primary_color', e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className="label-tech">Color Secundario (Dorado)</label>
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                                        <input type="color" value={formColors.data.secondary_color} onChange={e => formColors.setData('secondary_color', e.target.value)} style={{ width: '45px', height: '45px', padding: '0', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent' }} />
                                        <input type="text" className="input-tech" style={{ marginTop: '0' }} value={formColors.data.secondary_color} onChange={e => formColors.setData('secondary_color', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" disabled={formColors.processing} className="btn-glow-tech">
                                    {formColors.processing ? 'Guardando...' : 'Guardar Colores'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* PANEL 3: TEXTOS DEL SITIO */}
                    <div className="glass-panel" style={{ animationDelay: '0.2s' }}>
                        <h3 className="section-title">Textos de la Página</h3>
                        <form onSubmit={e => { e.preventDefault(); formTexts.put('/admin/settings'); }}>
                            <div className="settings-grid">
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label className="label-tech">Título Principal (Hero)</label>
                                    <input type="text" className="input-tech" value={formTexts.data.hero_title} onChange={e => formTexts.setData('hero_title', e.target.value)} />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label className="label-tech">Descripción Principal</label>
                                    <textarea rows="2" className="input-tech" style={{ resize: 'vertical' }} value={formTexts.data.hero_description} onChange={e => formTexts.setData('hero_description', e.target.value)} />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label className="label-tech">Texto de la sección de Contacto</label>
                                    <textarea rows="2" className="input-tech" style={{ resize: 'vertical' }} value={formTexts.data.contact_text} onChange={e => formTexts.setData('contact_text', e.target.value)} />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label className="label-tech">Descripción del Pie de Página (Footer)</label>
                                    <textarea rows="2" className="input-tech" style={{ resize: 'vertical' }} value={formTexts.data.footer_description} onChange={e => formTexts.setData('footer_description', e.target.value)} />
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" disabled={formTexts.processing} className="btn-glow-tech">
                                    {formTexts.processing ? 'Guardando...' : 'Guardar Textos'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* PANEL 4: PROYECTOS DESTACADOS */}
                    <div className="glass-panel" style={{ animationDelay: '0.3s' }}>
                        <h3 className="section-title">Proyectos Destacados</h3>
                        <form onSubmit={e => { e.preventDefault(); formProjects.put('/admin/settings'); }}>
                            <div className="settings-grid">
                                <div>
                                    <label className="label-tech">Proyecto Principal (Hero Banner)</label>
                                    <div style={{ position: 'relative' }}>
                                        <select className="input-tech" style={{ appearance: 'none' }} value={formProjects.data.hero_project_id} onChange={e => formProjects.setData('hero_project_id', e.target.value)}>
                                            <option value="">-- Usar diseño por defecto --</option>
                                            {proyectos.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                                        </select>
                                        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="label-tech">Proyecto Destacado 1</label>
                                    <div style={{ position: 'relative' }}>
                                        <select className="input-tech" style={{ appearance: 'none' }} value={formProjects.data.featured_project_id_1} onChange={e => formProjects.setData('featured_project_id_1', e.target.value)}>
                                            <option value="">-- Ninguno --</option>
                                            {proyectos.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                                        </select>
                                        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="label-tech">Proyecto Destacado 2</label>
                                    <div style={{ position: 'relative' }}>
                                        <select className="input-tech" style={{ appearance: 'none' }} value={formProjects.data.featured_project_id_2} onChange={e => formProjects.setData('featured_project_id_2', e.target.value)}>
                                            <option value="">-- Ninguno --</option>
                                            {proyectos.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                                        </select>
                                        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" disabled={formProjects.processing} className="btn-glow-tech">
                                    {formProjects.processing ? 'Guardando...' : 'Guardar Proyectos'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* PANEL 5: REDES SOCIALES Y PRIVACIDAD */}
                    <div className="glass-panel" style={{ animationDelay: '0.4s' }}>
                        <h3 className="section-title">Redes Sociales y Privacidad</h3>
                        <form onSubmit={e => { e.preventDefault(); formSocials.put('/admin/settings'); }}>
                            <div className="settings-grid">
                                <div>
                                    <label className="label-tech">Enlace a Facebook</label>
                                    <input type="url" className="input-tech" value={formSocials.data.facebook_url} onChange={e => formSocials.setData('facebook_url', e.target.value)} />
                                </div>
                                <div>
                                    <label className="label-tech">Enlace a Instagram</label>
                                    <input type="url" className="input-tech" value={formSocials.data.instagram_url} onChange={e => formSocials.setData('instagram_url', e.target.value)} />
                                </div>
                                
                                <div className="toggle-container">
                                    <div>
                                        <label className="label-tech" style={{ display: 'inline', color: '#0f172a' }}>Mostrar Redes Sociales</label>
                                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Activa los íconos sociales en la web</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" checked={formSocials.data.show_socials} onChange={e => formSocials.setData('show_socials', e.target.checked)} />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                                <div className="toggle-container">
                                    <div>
                                        <label className="label-tech" style={{ display: 'inline', color: '#0f172a' }}>Mostrar Precios Públicos</label>
                                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>Visible para todos los visitantes</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" checked={formSocials.data.show_prices_publicly} onChange={e => formSocials.setData('show_prices_publicly', e.target.checked)} />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" disabled={formSocials.processing} className="btn-glow-tech">
                                    {formSocials.processing ? 'Guardando...' : 'Guardar Redes y Privacidad'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}

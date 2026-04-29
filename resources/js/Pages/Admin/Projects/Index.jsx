import React, { useState, useMemo } from 'react';
import { Link, router, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ proyectos }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de eliminar este proyecto?')) {
            router.delete(`/proyectos/${id}`);
        }
    };

    // Extraer categorías únicas para el filtro
    const uniqueCategories = useMemo(() => {
        const cats = new Set();
        proyectos.forEach(p => {
            if (p.category?.name) cats.add(p.category.name);
        });
        return Array.from(cats);
    }, [proyectos]);

    // Filtrar proyectos
    const filteredProyectos = useMemo(() => {
        return proyectos.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  (p.category?.name || '').toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === '' || (p.category?.name === selectedCategory);
            return matchesSearch && matchesCategory;
        });
    }, [proyectos, searchTerm, selectedCategory]);

    return (
        <AdminLayout title="Gestión de Proyectos">
            <Head title="Gestión de Proyectos" />
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

                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    border-radius: 32px;
                    width: 100%;
                    max-width: 1400px;
                    position: relative;
                    z-index: 10;
                    box-shadow: 0 30px 60px rgba(15,23,42,0.04);
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

                .modern-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0 16px;
                    margin-top: 24px;
                }
                .modern-table th {
                    padding: 0 24px 16px;
                    text-align: left;
                    font-weight: 800;
                    font-size: 13px;
                    letter-spacing: 0.1em;
                    color: #64748b;
                    text-transform: uppercase;
                    border-bottom: 2px solid rgba(15,23,42,0.05);
                }
                .modern-table tr.data-row {
                    transition: all 0.3s ease;
                }
                .modern-table tr.data-row td {
                    padding: 24px;
                    background: #ffffff;
                    border-top: 1px solid rgba(15,23,42,0.02);
                    border-bottom: 1px solid rgba(15,23,42,0.02);
                    color: #0f172a;
                }
                .modern-table tr.data-row td:first-child {
                    border-left: 1px solid rgba(15,23,42,0.02);
                    border-radius: 16px 0 0 16px;
                }
                .modern-table tr.data-row td:last-child {
                    border-right: 1px solid rgba(15,23,42,0.02);
                    border-radius: 0 16px 16px 0;
                }
                .modern-table tr.data-row:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 30px rgba(15,23,42,0.04);
                }
                .modern-table tr.data-row:hover td {
                    border-color: rgba(0,61,165,0.1);
                }

                .btn-glow-tech {
                    background: linear-gradient(135deg, #003DA5 0%, #002b80 100%);
                    color: white;
                    padding: 14px 28px;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    font-weight: 800;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 20px rgba(0,61,165,0.2);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    white-space: nowrap;
                }
                .btn-glow-tech:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(0,61,165,0.3);
                }

                .filter-input {
                    background: rgba(255,255,255,0.8);
                    border: 1px solid rgba(148,163,184,0.3);
                    border-radius: 12px;
                    padding: 12px 16px 12px 40px;
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 500;
                    width: 100%;
                    outline: none;
                    transition: all 0.3s ease;
                }
                .filter-input:focus {
                    background: #ffffff;
                    border-color: #003DA5;
                    box-shadow: 0 0 0 4px rgba(0,61,165,0.1);
                }
                .filter-select {
                    background: rgba(255,255,255,0.8);
                    border: 1px solid rgba(148,163,184,0.3);
                    border-radius: 12px;
                    padding: 12px 16px;
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 600;
                    outline: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    min-width: 180px;
                }
                .filter-select:focus {
                    border-color: #003DA5;
                }

                .action-link {
                    color: #003DA5;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 14px;
                    margin-right: 16px;
                    transition: color 0.2s;
                }
                .action-link:hover { color: #D4A017; }
                
                .delete-btn {
                    background: none; border: none;
                    color: #ef4444; cursor: pointer;
                    font-weight: 700; font-size: 14px;
                    transition: color 0.2s;
                    font-family: inherit;
                }
                .delete-btn:hover { color: #991b1b; }

                .category-badge {
                    background: rgba(212,160,23,0.1);
                    color: #D4A017;
                    padding: 6px 12px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 800;
                }

                .project-img {
                    height: 60px;
                    width: 80px;
                    object-fit: cover;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(15,23,42,0.05);
                }
                
                /* Mobile Perfect Responsive Styles */
                @media (max-width: 768px) {
                    .page-container {
                        padding: 16px 12px;
                    }
                    .glass-card {
                        max-height: calc(100vh - 32px) !important;
                        border-radius: 24px;
                    }
                    .fixed-header {
                        padding: 24px 16px 16px 16px !important;
                    }
                    .fixed-header h1 {
                        font-size: 26px !important;
                    }
                    .tools-container {
                        flex-direction: column;
                        align-items: stretch !important;
                    }
                    .filters-wrapper {
                        flex-direction: column;
                        max-width: 100% !important;
                    }
                    .filter-select {
                        width: 100%;
                    }
                    .btn-glow-tech {
                        width: 100%;
                    }
                    
                    /* Responsive Table -> Cards */
                    .scrollable-body {
                        padding: 0 16px 24px 16px !important;
                    }
                    .modern-table {
                        display: block;
                    }
                    .modern-table thead {
                        display: none;
                    }
                    .modern-table tbody, .modern-table tr, .modern-table td {
                        display: block;
                        width: 100%;
                    }
                    .modern-table tr.data-row {
                        background: #ffffff;
                        border-radius: 20px;
                        margin-bottom: 20px;
                        box-shadow: 0 10px 25px rgba(15,23,42,0.05);
                        border: 1px solid rgba(15,23,42,0.03);
                        overflow: hidden;
                    }
                    .modern-table tr.data-row td {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 16px 20px;
                        border: none !important;
                        border-bottom: 1px solid rgba(15,23,42,0.03) !important;
                        text-align: right;
                    }
                    .modern-table tr.data-row td:last-child {
                        border-bottom: none !important;
                        background: #f8fafc;
                        justify-content: flex-end;
                    }
                    .modern-table tr.data-row td::before {
                        content: attr(data-label);
                        font-weight: 800;
                        font-size: 11px;
                        color: #94a3b8;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                        margin-right: 16px;
                    }
                    .modern-table tr.data-row:hover {
                        transform: translateY(-2px);
                    }
                    .project-img {
                        height: 50px;
                        width: 70px;
                    }
                }
            `}</style>

            <div className="page-container">
                <div className="decorative-blob-1" />
                <div className="decorative-blob-2" />

                <div className="glass-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 80px)' }}>
                    {/* Header pegajoso */}
                    <div className="fixed-header" style={{ padding: '48px 48px 24px 48px', flexShrink: 0, borderBottom: '1px solid rgba(15,23,42,0.05)', background: 'rgba(255,255,255,0.4)', borderRadius: '32px 32px 0 0' }}>
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <span style={{ 
                                background: 'linear-gradient(135deg, #003DA5 0%, #D4A017 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '800',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontSize: '12px'
                            }}>
                                Gestión de Portafolio
                            </span>
                            <h1 style={{ color: '#0f172a', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', fontFamily: 'Syne, sans-serif', margin: '8px 0 16px', letterSpacing: '-1px' }}>
                                Administración de <span style={{ color: '#003DA5' }}>Proyectos</span>
                            </h1>
                            <p style={{ color: '#64748b', fontSize: '15px', fontWeight: '500', margin: 0 }}>Tienes {proyectos.length} trabajos publicados</p>
                        </div>

                        {/* Barra de Herramientas (Búsqueda, Filtro, Botón Nuevo) */}
                        <div className="tools-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div className="filters-wrapper" style={{ display: 'flex', gap: '16px', flexGrow: 1, maxWidth: '600px' }}>
                                {/* Buscador */}
                                <div style={{ position: 'relative', flexGrow: 1 }}>
                                    <svg style={{ position: 'absolute', left: '12px', top: '12px', width: '20px', height: '20px', color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <input 
                                        type="text" 
                                        placeholder="Buscar título o categoría..." 
                                        className="filter-input"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                {/* Filtro Categoría */}
                                <select 
                                    className="filter-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">Todas las categorías</option>
                                    {uniqueCategories.map((cat, i) => (
                                        <option key={i} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <Link href="/proyectos/create" className="btn-glow-tech">
                                + Nuevo Trabajo
                            </Link>
                        </div>
                    </div>

                    {/* Contenedor de la tabla con scroll */}
                    <div className="scrollable-body" style={{ flexGrow: 1, overflowY: 'auto', padding: '0 48px 48px 48px' }}>
                      <table className="modern-table">
                        <thead style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
                            <tr>
                                <th>IMAGEN</th>
                                <th>TÍTULO</th>
                                <th>CATEGORÍA</th>
                                <th>FECHA</th>
                                <th style={{textAlign: 'right'}}>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProyectos.map(p => (
                                <tr key={p.id} className="data-row">
                                    <td data-label="Imagen">
                                        <img src={p.image_path ? `https://pub-4a2423514ab649f9958a61a720de08df.r2.dev/${p.image_path.replace('/storage/', '').replace(/^\/+/, '')}` : '/imagenes/asador-1.png'} className="project-img" alt={p.title || 'Proyecto'} />
                                    </td>
                                    <td data-label="Título" style={{ fontWeight: '800', fontSize: '16px' }}>{p.title}</td>
                                    <td data-label="Categoría">
                                        <span className="category-badge">
                                            {p.category?.name || 'General'}
                                        </span>
                                    </td>
                                    <td data-label="Fecha" style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>
                                        {new Date(p.created_at).toLocaleDateString()}
                                    </td>
                                    <td data-label="Acciones" style={{textAlign: 'right'}}>
                                        <Link href={`/proyectos/${p.id}/edit`} className="action-link">Editar</Link>
                                        <button onClick={() => handleDelete(p.id)} className="delete-btn">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            {filteredProyectos.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '48px', color: '#64748b', background: '#ffffff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
                                        {proyectos.length === 0 
                                            ? "No hay proyectos registrados. Comienza subiendo uno nuevo." 
                                            : "No se encontraron resultados para tu búsqueda."}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
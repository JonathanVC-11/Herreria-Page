import React from 'react';
import { useForm, Link, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import ImageUpload from '@/Components/ImageUpload';

export default function Create({ categories = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        title: 'Proyecto de Herrería',
        category_id: categories.length > 0 ? categories[0].id : '',
        description: 'Descripción detallada del proyecto incluyendo materiales utilizados, medidas específicas y acabados aplicados.',
        price: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/proyectos');
    };

    return (
        <AdminLayout title="Nuevo Proyecto">
            <Head title="Nuevo Proyecto" />
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
                    padding: 48px;
                    width: 100%;
                    max-width: 900px;
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

                .input-tech {
                    width: 100%;
                    background: rgba(255,255,255,0.5);
                    border: 1px solid rgba(148,163,184,0.3);
                    border-radius: 12px;
                    padding: 16px 20px;
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
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    display: block;
                }

                .btn-glow-tech {
                    background: linear-gradient(135deg, #003DA5 0%, #002b80 100%);
                    color: white;
                    padding: 16px 32px;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    font-weight: 800;
                    font-size: 15px;
                    letter-spacing: 0.5px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 20px rgba(0,61,165,0.2);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                }
                .btn-glow-tech:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(0,61,165,0.3);
                }
                .btn-glow-tech:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .btn-cancel-tech {
                    background: transparent;
                    color: #64748b;
                    padding: 16px 32px;
                    border-radius: 12px;
                    border: 1px solid #cbd5e1;
                    cursor: pointer;
                    font-weight: 800;
                    font-size: 15px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-cancel-tech:hover {
                    background: #f1f5f9;
                    color: #0f172a;
                }

                @media (max-width: 768px) {
                    .glass-card {
                        padding: 32px 20px !important;
                    }
                }
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                }
                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="page-container">
                <div className="decorative-blob-1" />
                <div className="decorative-blob-2" />

                <div className="glass-card">
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
                            Publicación
                        </span>
                        <h1 style={{ color: '#0f172a', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', fontFamily: 'Syne, sans-serif', margin: '8px 0 16px', letterSpacing: '-1px' }}>
                            Nuevo <span style={{ color: '#003DA5' }}>Proyecto</span>
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '15px', fontWeight: '500' }}>
                            Sube los detalles y la fotografía de tu último trabajo
                        </p>
                        <div style={{ width: '60px', height: '4px', background: '#D4A017', borderRadius: '2px', margin: '16px auto 0' }}></div>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="form-grid">
                            <div>
                                <label className="label-tech">NOMBRE DEL TRABAJO</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    placeholder="Ej: Puerta Forjada Minimalista"
                                    className="input-tech"
                                />
                                {errors.title && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px', fontWeight: '600' }}>{errors.title}</p>}
                            </div>

                            <div>
                                <label className="label-tech">CATEGORÍA</label>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        value={data.category_id}
                                        onChange={e => setData('category_id', e.target.value)}
                                        className="input-tech"
                                        style={{ appearance: 'none' }}
                                    >
                                        <option value="" style={{ background: '#ffffff', color: '#0f172a' }}>Selecciona una categoría</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id} style={{ background: '#ffffff', color: '#0f172a' }}>{cat.name}</option>
                                        ))}
                                    </select>
                                    <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                                {errors.category_id && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px', fontWeight: '600' }}>{errors.category_id}</p>}
                            </div>

                            <div>
                                <label className="label-tech">PRECIO EST. (OPCIONAL)</label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontWeight: '700' }}>$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        placeholder="0.00"
                                        className="input-tech"
                                        style={{ paddingLeft: '32px' }}
                                    />
                                </div>
                                {errors.price && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px', fontWeight: '600' }}>{errors.price}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="label-tech">DESCRIPCIÓN DETALLADA</label>
                            <textarea
                                rows="4"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                placeholder="Describe los materiales, medidas o acabados..."
                                className="input-tech"
                                style={{ resize: 'vertical' }}
                            />
                            {errors.description && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px', fontWeight: '600' }}>{errors.description}</p>}
                        </div>

                        <div>
                            <label className="label-tech" style={{ marginBottom: '8px' }}>
                                FOTOGRAFÍA DEL TRABAJO TERMINADO
                                <span style={{ display: 'block', fontSize: '12px', color: '#003DA5', textTransform: 'none', marginTop: '4px', fontWeight: '600' }}>
                                    * Límite actual: 1 imagen por proyecto.
                                </span>
                            </label>
                            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid rgba(0,61,165,0.1)' }}>
                                <ImageUpload
                                    value={data.image}
                                    onChange={(file) => setData('image', file)}
                                    error={errors.image}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '16px', marginTop: '24px' }}>
                            <Link href="/proyectos" className="btn-cancel-tech">
                                Cancelar
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-glow-tech"
                            >
                                {processing ? 'Subiendo datos...' : 'Publicar Proyecto'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
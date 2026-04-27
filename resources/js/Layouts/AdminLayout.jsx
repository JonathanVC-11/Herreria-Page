import React, { useState } from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AdminLayout({ children, title }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { auth } = usePage().props;

    const navItems = [
        { name: 'Panel Central', href: '/dashboard', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> },
        { name: 'Proyectos', href: '/proyectos', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> },
        { name: 'Categorías', href: '/categorias', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /> },
    ];

    return (
        <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
            <Head title={`${title} | IHA Admin`} />
            
            {/* Sidebar Lateral - Dark Premium Theme */}
            <aside className="w-[260px] bg-[#0b1120] text-slate-300 hidden md:flex flex-col border-r border-slate-800/60 sticky top-0 h-screen overflow-y-auto">
                <div className="p-6 border-b border-slate-800/60 flex flex-col items-center justify-center">
                    <div className="bg-white p-2.5 rounded-xl mb-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <img src="/imagenes/logo-iha.png" alt="IHA" className="h-10 object-contain" />
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center mt-1">Workspace</p>
                </div>
                
                <nav className="mt-8 px-4 space-y-1.5 flex-1">
                    <p className="px-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Menú Principal</p>
                    
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className={`flex items-center gap-3.5 py-2.5 px-4 text-[14px] font-medium rounded-lg transition-all duration-200 ${window.location.pathname.startsWith(item.href) ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                            {item.name}
                        </Link>
                    ))}

                    <div className="pt-6 mt-6 border-t border-slate-800/60">
                        <p className="px-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Sistema</p>
                        <Link href="/admin/settings" className={`flex items-center gap-3.5 py-2.5 px-4 text-[14px] font-medium rounded-lg transition-all duration-200 ${window.location.pathname.startsWith('/admin/settings') ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Configuración
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t border-slate-800/60">
                    <Link href={route('logout')} method="post" as="button" className="flex items-center gap-3 py-2.5 px-4 w-full text-[14px] font-medium text-slate-400 rounded-lg hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200">
                        <ArrowRightOnRectangleIcon className="w-5 h-5" />
                        Cerrar Sesión
                    </Link>
                </div>
            </aside>

            {/* Contenido Principal */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile Header */}
                <div className="md:hidden bg-[#0b1120] text-slate-300 px-4 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-slate-800/60">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1.5 rounded-lg">
                            <img src="/imagenes/logo-iha.png" alt="IHA" className="h-7 object-contain" />
                        </div>
                        <p className="text-sm font-semibold text-white tracking-wide">{title}</p>
                    </div>
                    <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-400 hover:bg-slate-800 p-2 rounded-lg transition-colors">
                        {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                </div>
                
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0b1120] text-slate-300 px-4 py-4 space-y-1 absolute top-[60px] left-0 w-full z-40 border-b border-slate-800/60 shadow-2xl">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="flex items-center gap-3 py-3 px-4 text-sm font-medium rounded-xl hover:bg-slate-800 transition-all">{item.name}</Link>
                        ))}
                        <Link href="/admin/settings" className="flex items-center gap-3 py-3 px-4 text-sm font-medium rounded-xl hover:bg-slate-800 transition-all">Configuración</Link>
                        <div className="border-t border-slate-800/60 mt-2 pt-2">
                            <Link href={route('logout')} method="post" as="button" className="flex items-center gap-3 py-3 px-4 w-full text-sm font-medium text-rose-400 rounded-xl hover:bg-rose-500/10 transition-all text-left">Cerrar Sesión</Link>
                        </div>
                    </div>
                )}

                {/* Desktop Header */}
                <header className="hidden md:flex bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-8 py-5 justify-between items-center sticky top-0 z-40">
                    <div>
                        <h2 className="font-semibold text-[22px] text-slate-800 tracking-tight leading-tight">{title}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 text-right">
                            <div className="hidden lg:block">
                                <p className="text-[13px] font-semibold text-slate-700">{auth?.user?.name || 'Administrador'}</p>
                                <p className="text-[11px] text-slate-400 font-medium">{auth?.user?.email || 'admin@herreria.com'}</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                                {(auth?.user?.name || 'A').charAt(0)}
                            </div>
                        </div>
                        <div className="h-8 w-px bg-slate-200"></div>
                        <Link href="/" className="text-[13px] font-semibold text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all flex items-center gap-2 shadow-sm">
                            <GlobeAltIcon className="w-4 h-4" />
                            Ver Web
                        </Link>
                    </div>
                </header>

                <main className="p-4 sm:p-6 md:p-8 flex-1 overflow-x-hidden w-full max-w-[1600px] mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const s = {
        page: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #eff6ff 0%, #e2e8f0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 0',
            fontFamily: 'DM Sans, sans-serif',
            position: 'relative',
            overflow: 'hidden',
            color: '#0f172a',
        },
        dots: {
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle, #D4A017 1px, transparent 1px)',
            backgroundSize: '40px 40px',
        },
        blob: {
            position: 'absolute',
            top: '-220px',
            right: '-180px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,160,23,0.16) 0%, transparent 72%)',
        },
        card: {
            background: '#ffffff',
            border: '1px solid rgba(148,163,184,0.28)',
            borderRadius: '28px',
            padding: '36px 32px',
            width: '100%',
            maxWidth: '420px',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 35px 80px rgba(15,23,42,0.08)',
            animation: 'fadeUp 0.6s ease both',
        },
        input: {
            width: '100%',
            background: '#ffffff',
            border: '1px solid rgba(148,163,184,0.4)',
            borderRadius: '10px',
            padding: '14px 16px',
            color: '#0f172a',
            fontSize: '15px',
            fontFamily: 'DM Sans, sans-serif',
            outline: 'none',
            marginTop: '6px',
        },
        label: {
            color: '#475569',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.12em',
        },
        btn: {
            background: processing ? '#a07810' : '#D4A017',
            color: '#140E0A',
            padding: '15px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '15px',
            fontWeight: '700',
            cursor: processing ? 'not-allowed' : 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            letterSpacing: '0.04em',
            width: '100%',
            marginTop: '4px',
        },
        headline: {
            color: '#0f172a',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '0.04em',
            marginTop: '10px',
            marginBottom: '28px',
        },
        footer: {
            textAlign: 'center',
            marginTop: '24px',
            color: '#64748b',
            fontSize: '12px',
        },
        eyeBtn: {
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#94a3b8',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };

    const EyeIcon = ({ open }) => (
        open ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
        )
    );

    return (
        <>
            <Head title="Registro Administrador" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
                @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
                .login-input:focus { border-color: rgba(212,160,23,0.5) !important; }
            `}
            </style>

            <div style={s.page}>
                <div style={s.dots} />
                <div style={s.blob} />

                <div style={s.card}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <img
                            src="/imagenes/logo-iha.png"
                            alt="IHA"
                            style={{ height: '100px', objectFit: 'contain', opacity: 1, display: 'inline-block', margin: '0 auto' }}
                        />
                        <p style={{ ...s.headline, color: '#0f172a' }}>
                            Restaurar / Crear Administrador
                        </p>
                    </div>

                    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        <div>
                            <label style={s.label}>NOMBRE COMPLETO</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                autoFocus
                                onChange={e => setData('name', e.target.value)}
                                className="login-input"
                                style={s.input}
                                placeholder="Nombre Administrador"
                                required
                            />
                            {errors.name && <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>{errors.name}</p>}
                        </div>

                        <div>
                            <label style={s.label}>CORREO ELECTRÓNICO</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={e => setData('email', e.target.value)}
                                className="login-input"
                                style={s.input}
                                placeholder="tu@correo.com"
                                required
                            />
                            {errors.email && <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>{errors.email}</p>}
                        </div>

                        <div>
                            <label style={s.label}>CONTRASEÑA</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={e => setData('password', e.target.value)}
                                    className="login-input"
                                    style={{ ...s.input, paddingRight: '44px' }}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={s.eyeBtn}
                                    tabIndex={-1}
                                    title={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                            {errors.password && <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>{errors.password}</p>}
                        </div>

                        <div>
                            <label style={s.label}>CONFIRMAR CONTRASEÑA</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    id="password_confirmation"
                                    type={showConfirm ? 'text' : 'password'}
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                    className="login-input"
                                    style={{ ...s.input, paddingRight: '44px' }}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    style={s.eyeBtn}
                                    tabIndex={-1}
                                    title={showConfirm ? 'Ocultar contraseña' : 'Ver contraseña'}
                                >
                                    <EyeIcon open={showConfirm} />
                                </button>
                            </div>
                            {errors.password_confirmation && <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>{errors.password_confirmation}</p>}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8px' }}>
                            <Link
                                href={route('login')}
                                style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}
                            >
                                Ingresar si ya tienes cuenta
                            </Link>
                        </div>

                        <button type="submit" disabled={processing} style={s.btn}>
                            {processing ? 'Creando...' : 'Crear Administrador'}
                        </button>

                    </form>

                    <p style={s.footer}>
                        IHA © {new Date().getFullYear()} · Acceso Restringido
                    </p>
                </div>
            </div>
        </>
    );
}

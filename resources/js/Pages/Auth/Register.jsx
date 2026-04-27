import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

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
    };

    return (
        <>
            <Head title="Registro Oculto" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
                @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
                .login-input:focus { border-color: rgba(212,160,23,0.5) !important; }
            `}</style>

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
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={e => setData('password', e.target.value)}
                                className="login-input"
                                style={s.input}
                                placeholder="••••••••"
                                required
                            />
                            {errors.password && <p style={{ color: '#f87171', fontSize: '13px', marginTop: '6px' }}>{errors.password}</p>}
                        </div>

                        <div>
                            <label style={s.label}>CONFIRMAR CONTRASEÑA</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={e => setData('password_confirmation', e.target.value)}
                                className="login-input"
                                style={s.input}
                                placeholder="••••••••"
                                required
                            />
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

import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

// Importaciones relativas directas a tus nuevos componentes
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Servicios from '../Components/Servicios';
import Contacto from '../Components/Contacto';
import Asador from '../Components/Asador';
import Footer from '../Components/Footer';
import Productos from '../Components/Productos';

export default function Welcome({ proyectos, categorias }) {
    const [seleccionado, setSeleccionado] = useState(null);
    const [verTodosNavbar, setVerTodosNavbar] = useState(false);

    return (
        <>
            <Head title="Inicio | IHA Innovacion en Herreria y Aluminio" />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
            `}</style>
            
            <div id="top" style={{ 
                fontFamily: 'DM Sans, sans-serif', 
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f8f8fc 0%, #f5f5fa 30%, #f2f0f8 60%, #efeff5 100%)'
            }}>
                <Navbar onVerTodos={() => setVerTodosNavbar(true)} />
                
                <main>
                    <Hero proyectos={proyectos} onProductoClick={setSeleccionado} />
                    <Servicios proyectos={proyectos} categorias={categorias} />
                    <Asador productos={proyectos} />
                    <Contacto />
                </main>
                
                <Footer />
            </div>
            {seleccionado && <Productos onClose={() => setSeleccionado(null)} productos={proyectos} categoriaSeleccionada={null} seleccionadoInicial={seleccionado} />}
            {verTodosNavbar && <Productos onClose={() => setVerTodosNavbar(false)} productos={proyectos} />}
        </>
    );
}
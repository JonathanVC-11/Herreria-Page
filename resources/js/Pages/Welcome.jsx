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
            <Head>
                <title>IHA | Innovación en Herrería y Aluminio - Diseño, Fabricación e Instalación</title>
                <meta name="description" content="IHA - Innovación en Herrería y Aluminio. Fabricación e instalación de puertas, portones, barandales, ventanas, asadores y estructuras metálicas de alta calidad. Diseños modernos y personalizados. Cotización sin compromiso." />
                <meta name="keywords" content="herrería, aluminio, puertas de herrería, portones, barandales, ventanas de aluminio, asadores, estructuras metálicas, herrería moderna, herrería artística, fabricación de herrería, instalación de herrería, diseño en metal, herrería residencial, herrería comercial, cotización herrería" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="IHA - Innovación en Herrería y Aluminio" />
                <link rel="canonical" href={window.location.origin} />

                {/* Open Graph para Facebook/WhatsApp */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="IHA | Innovación en Herrería y Aluminio" />
                <meta property="og:description" content="Fabricación e instalación de puertas, portones, barandales, ventanas, asadores y estructuras metálicas. Diseños modernos y personalizados." />
                <meta property="og:image" content={`${window.location.origin}/imagenes/logo-iha.png`} />
                <meta property="og:url" content={window.location.origin} />
                <meta property="og:site_name" content="IHA Herrería y Aluminio" />
                <meta property="og:locale" content="es_MX" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IHA | Innovación en Herrería y Aluminio" />
                <meta name="twitter:description" content="Fabricación e instalación de puertas, portones, barandales, ventanas, asadores y estructuras metálicas de alta calidad." />
                <meta name="twitter:image" content={`${window.location.origin}/imagenes/logo-iha.png`} />

                {/* JSON-LD Structured Data para Google */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "IHA - Innovación en Herrería y Aluminio",
                    "description": "Fabricación e instalación de puertas, portones, barandales, ventanas, asadores y estructuras metálicas de alta calidad. Diseños modernos y personalizados.",
                    "url": window.location.origin,
                    "logo": `${window.location.origin}/imagenes/logo-iha.png`,
                    "image": `${window.location.origin}/imagenes/logo-iha.png`,
                    "priceRange": "$$",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "MX"
                    },
                    "sameAs": [],
                    "openingHours": "Mo-Sa 08:00-18:00",
                    "serviceArea": {
                        "@type": "GeoCircle",
                        "geoMidpoint": { "@type": "GeoCoordinates" },
                        "geoRadius": "50000"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Servicios de Herrería y Aluminio",
                        "itemListElement": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Puertas de Herrería" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portones Automáticos" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Barandales" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ventanas de Aluminio" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asadores y Parrillas" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estructuras Metálicas" } }
                        ]
                    }
                })}</script>
            </Head>
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
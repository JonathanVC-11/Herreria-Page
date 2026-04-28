import{r as n,j as e,H as g,L as d,a as h}from"./app-BX6cveP2.js";import{A as f}from"./AdminLayout-ZGyI5Oh2.js";import"./XMarkIcon-DiJz_fDL.js";function y({proyectos:r}){const[o,l]=n.useState(""),[i,p]=n.useState(""),c=t=>{confirm("¿Estás seguro de eliminar este proyecto?")&&h.delete(`/proyectos/${t}`)},x=n.useMemo(()=>{const t=new Set;return r.forEach(a=>{a.category?.name&&t.add(a.category.name)}),Array.from(t)},[r]),s=n.useMemo(()=>r.filter(t=>{const a=t.title.toLowerCase().includes(o.toLowerCase())||(t.category?.name||"").toLowerCase().includes(o.toLowerCase()),b=i===""||t.category?.name===i;return a&&b}),[r,o,i]);return e.jsxs(f,{title:"Gestión de Proyectos",children:[e.jsx(g,{title:"Gestión de Proyectos"}),e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-container",children:[e.jsx("div",{className:"decorative-blob-1"}),e.jsx("div",{className:"decorative-blob-2"}),e.jsxs("div",{className:"glass-card",style:{padding:0,display:"flex",flexDirection:"column",maxHeight:"calc(100vh - 80px)"},children:[e.jsxs("div",{className:"fixed-header",style:{padding:"48px 48px 24px 48px",flexShrink:0,borderBottom:"1px solid rgba(15,23,42,0.05)",background:"rgba(255,255,255,0.4)",borderRadius:"32px 32px 0 0"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[e.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #D4A017 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",fontSize:"12px"},children:"Gestión de Portafolio"}),e.jsxs("h1",{style:{color:"#0f172a",fontSize:"clamp(32px, 4vw, 44px)",fontWeight:"900",fontFamily:"Syne, sans-serif",margin:"8px 0 16px",letterSpacing:"-1px"},children:["Administración de ",e.jsx("span",{style:{color:"#003DA5"},children:"Proyectos"})]}),e.jsxs("p",{style:{color:"#64748b",fontSize:"15px",fontWeight:"500",margin:0},children:["Tienes ",r.length," trabajos publicados"]})]}),e.jsxs("div",{className:"tools-container",style:{display:"flex",justifyContent:"space-between",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{className:"filters-wrapper",style:{display:"flex",gap:"16px",flexGrow:1,maxWidth:"600px"},children:[e.jsxs("div",{style:{position:"relative",flexGrow:1},children:[e.jsx("svg",{style:{position:"absolute",left:"12px",top:"12px",width:"20px",height:"20px",color:"#94a3b8"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx("input",{type:"text",placeholder:"Buscar título o categoría...",className:"filter-input",value:o,onChange:t=>l(t.target.value)})]}),e.jsxs("select",{className:"filter-select",value:i,onChange:t=>p(t.target.value),children:[e.jsx("option",{value:"",children:"Todas las categorías"}),x.map((t,a)=>e.jsx("option",{value:t,children:t},a))]})]}),e.jsx(d,{href:"/proyectos/create",className:"btn-glow-tech",children:"+ Nuevo Trabajo"})]})]}),e.jsx("div",{className:"scrollable-body",style:{flexGrow:1,overflowY:"auto",padding:"0 48px 48px 48px"},children:e.jsxs("table",{className:"modern-table",children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:20,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:e.jsxs("tr",{children:[e.jsx("th",{children:"IMAGEN"}),e.jsx("th",{children:"TÍTULO"}),e.jsx("th",{children:"CATEGORÍA"}),e.jsx("th",{children:"FECHA"}),e.jsx("th",{style:{textAlign:"right"},children:"ACCIONES"})]})}),e.jsxs("tbody",{children:[s.map(t=>e.jsxs("tr",{className:"data-row",children:[e.jsx("td",{"data-label":"Imagen",children:e.jsx("img",{src:t.image_path?t.image_path.startsWith("/")||t.image_path.startsWith("data:image")?t.image_path:`/storage/${t.image_path}`:"/imagenes/asador-1.png",className:"project-img"})}),e.jsx("td",{"data-label":"Título",style:{fontWeight:"800",fontSize:"16px"},children:t.title}),e.jsx("td",{"data-label":"Categoría",children:e.jsx("span",{className:"category-badge",children:t.category?.name||"General"})}),e.jsx("td",{"data-label":"Fecha",style:{color:"#64748b",fontSize:"14px",fontWeight:"600"},children:new Date(t.created_at).toLocaleDateString()}),e.jsxs("td",{"data-label":"Acciones",style:{textAlign:"right"},children:[e.jsx(d,{href:`/proyectos/${t.id}/edit`,className:"action-link",children:"Editar"}),e.jsx("button",{onClick:()=>c(t.id),className:"delete-btn",children:"Eliminar"})]})]},t.id)),s.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"48px",color:"#64748b",background:"#ffffff",borderRadius:"16px",border:"1px dashed #cbd5e1"},children:r.length===0?"No hay proyectos registrados. Comienza subiendo uno nuevo.":"No se encontraron resultados para tu búsqueda."})})]})]})})]})]})]})}export{y as default};

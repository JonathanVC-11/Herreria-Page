import{u as m,r as i,j as e,H as u,a as y}from"./app-BX6cveP2.js";import{A as w}from"./AdminLayout-ZGyI5Oh2.js";import"./XMarkIcon-DiJz_fDL.js";function C({categorias:a=[]}){const{data:s,setData:d,post:p,processing:c,errors:l,reset:x}=m({name:"",description:"",icon:""}),[b,o]=i.useState(!1),[r,g]=i.useState(""),f=t=>{t.preventDefault(),p("/categorias",{onSuccess:()=>{x(),o(!1)}})},h=t=>{confirm("¿Eliminar esta categoría? Esto podría afectar a los proyectos vinculados.")&&y.delete(`/categorias/${t}`)},n=i.useMemo(()=>a.filter(t=>t.name.toLowerCase().includes(r.toLowerCase())||t.slug&&t.slug.toLowerCase().includes(r.toLowerCase())),[a,r]);return e.jsxs(w,{title:"Gestión de Categorías",children:[e.jsx(u,{title:"Gestión de Categorías"}),e.jsx("style",{children:`
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
                    max-width: 1200px;
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
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-glow-tech:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(0,61,165,0.3);
                }

                .btn-cancel-tech {
                    background: transparent;
                    color: #64748b;
                    padding: 14px 28px;
                    border-radius: 12px;
                    border: 1px solid #cbd5e1;
                    cursor: pointer;
                    font-weight: 800;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .btn-cancel-tech:hover {
                    background: #f1f5f9;
                    color: #0f172a;
                }

                .input-tech {
                    width: 100%;
                    background: rgba(255,255,255,0.5);
                    border: 1px solid rgba(148,163,184,0.3);
                    border-radius: 12px;
                    padding: 14px 16px;
                    color: #0f172a;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .input-tech:focus {
                    background: #ffffff;
                    border-color: #003DA5;
                    box-shadow: 0 0 0 4px rgba(0,61,165,0.1);
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
                        max-width: 100% !important;
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
                }
            `}),e.jsxs("div",{className:"page-container",children:[e.jsx("div",{className:"decorative-blob-1"}),e.jsx("div",{className:"decorative-blob-2"}),e.jsxs("div",{className:"glass-card",style:{padding:0,display:"flex",flexDirection:"column",maxHeight:"calc(100vh - 80px)"},children:[e.jsxs("div",{className:"fixed-header",style:{padding:"48px 48px 24px 48px",flexShrink:0,borderBottom:"1px solid rgba(15,23,42,0.05)",background:"rgba(255,255,255,0.4)",borderRadius:"32px 32px 0 0"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[e.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #D4A017 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",fontSize:"12px"},children:"Sistemas de Organización"}),e.jsxs("h1",{style:{color:"#0f172a",fontSize:"clamp(32px, 4vw, 44px)",fontWeight:"900",fontFamily:"Syne, sans-serif",margin:"8px 0 16px",letterSpacing:"-1px"},children:["Administración de ",e.jsx("span",{style:{color:"#003DA5"},children:"Categorías"})]}),e.jsx("div",{style:{width:"60px",height:"4px",background:"#D4A017",borderRadius:"2px",margin:"0 auto"}})]}),b?e.jsxs("div",{style:{background:"#ffffff",padding:"24px",borderRadius:"24px",marginTop:"16px",boxShadow:"0 20px 40px rgba(15,23,42,0.06)",border:"1px solid rgba(0,61,165,0.1)"},children:[e.jsx("h3",{style:{color:"#0f172a",fontWeight:"800",fontSize:"18px",marginBottom:"20px"},children:"Nueva Categoría Tecnológica"}),e.jsxs("form",{onSubmit:f,style:{display:"grid",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"700",fontSize:"13px",color:"#64748b"},children:"NOMBRE DE LA CATEGORÍA"}),e.jsx("input",{type:"text",className:"input-tech",value:s.name,onChange:t=>d("name",t.target.value),required:!0,placeholder:"Ej. Puertas Automáticas"}),l.name&&e.jsx("div",{style:{color:"#ef4444",fontSize:"13px",marginTop:"4px"},children:l.name})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"700",fontSize:"13px",color:"#64748b"},children:"DESCRIPCIÓN (Opcional)"}),e.jsx("textarea",{className:"input-tech",value:s.description,onChange:t=>d("description",t.target.value),rows:2,placeholder:"Detalles sobre esta categoría...",style:{resize:"none"}})]}),e.jsxs("div",{className:"tools-container",style:{display:"flex",gap:"12px",justifyContent:"flex-end",marginTop:"8px"},children:[e.jsx("button",{type:"button",onClick:()=>o(!1),className:"btn-cancel-tech",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:c,className:"btn-glow-tech",children:"Registrar Categoría"})]})]})]}):e.jsxs("div",{className:"tools-container",style:{display:"flex",justifyContent:"space-between",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{className:"filters-wrapper",style:{position:"relative",flexGrow:1,maxWidth:"400px"},children:[e.jsx("svg",{style:{position:"absolute",left:"12px",top:"12px",width:"20px",height:"20px",color:"#94a3b8"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx("input",{type:"text",placeholder:"Buscar categoría por nombre o ruta...",className:"filter-input",value:r,onChange:t=>g(t.target.value)})]}),e.jsx("button",{onClick:()=>o(!0),className:"btn-glow-tech",children:"+ Crear Categoría"})]})]}),e.jsx("div",{className:"scrollable-body",style:{flexGrow:1,overflowY:"auto",padding:"0 48px 48px 48px"},children:e.jsxs("table",{className:"modern-table",children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:20,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:e.jsxs("tr",{children:[e.jsx("th",{children:"Identificador"}),e.jsx("th",{children:"Categoría"}),e.jsx("th",{children:"Ruta URL (Slug)"}),e.jsx("th",{children:"Proyectos Asociados"}),e.jsx("th",{style:{textAlign:"right"},children:"Operaciones"})]})}),e.jsx("tbody",{children:n&&n.length>0?n.map(t=>e.jsxs("tr",{className:"data-row",children:[e.jsxs("td",{"data-label":"Identificador",style:{fontWeight:"800",color:"#94a3b8"},children:["#",t.id]}),e.jsx("td",{"data-label":"Categoría",style:{fontWeight:"800",color:"#0f172a",fontSize:"16px"},children:t.name}),e.jsxs("td",{"data-label":"Ruta URL",style:{color:"#64748b",fontSize:"14px"},children:["/",t.slug]}),e.jsx("td",{"data-label":"Proyectos Asociados",children:e.jsxs("span",{style:{background:t.projects_count>0?"rgba(0,61,165,0.1)":"rgba(148,163,184,0.1)",color:t.projects_count>0?"#003DA5":"#64748b",padding:"6px 12px",borderRadius:"50px",fontSize:"12px",fontWeight:"800"},children:[t.projects_count||0," Proyectos"]})}),e.jsx("td",{"data-label":"Operaciones",style:{textAlign:"right"},children:e.jsx("button",{onClick:()=>h(t.id),className:"delete-btn",children:"Eliminar"})})]},t.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:"48px",color:"#64748b",background:"#ffffff",borderRadius:"16px",border:"1px dashed #cbd5e1"},children:a.length===0?"No hay categorías registradas. Comienza creando una nueva.":"No se encontraron categorías para tu búsqueda."})})})]})})]})]})]})}export{C as default};

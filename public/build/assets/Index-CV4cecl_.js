import{u as n,j as e,H as d}from"./app-BX6cveP2.js";import{A as p}from"./AdminLayout-ZGyI5Oh2.js";import"./XMarkIcon-DiJz_fDL.js";function m({settings:t,proyectos:c=[]}){const s=n({company_name:t?.company_name||"",phone:t?.phone||"",whatsapp:t?.whatsapp||"",email:t?.email||""}),i=n({primary_color:t?.primary_color||"#003DA5",secondary_color:t?.secondary_color||"#D4A017"}),r=n({hero_title:t?.hero_title||"",hero_description:t?.hero_description||"",contact_text:t?.contact_text||"",footer_description:t?.footer_description||""}),o=n({hero_project_id:t?.hero_project_id||"",featured_project_id_1:t?.featured_project_id_1||"",featured_project_id_2:t?.featured_project_id_2||""}),l=n({facebook_url:t?.facebook_url||"",instagram_url:t?.instagram_url||"",show_socials:t?.show_socials??!0,show_prices_publicly:t?.show_prices_publicly??!0});return e.jsxs(p,{title:"Configuración del Sitio",children:[e.jsx(d,{title:"Configuración del Sitio"}),e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-container",children:[e.jsx("div",{className:"decorative-blob-1"}),e.jsx("div",{className:"decorative-blob-2"}),e.jsxs("div",{style:{width:"100%",maxWidth:"1000px",zIndex:10},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #D4A017 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",fontSize:"12px"},children:"Panel de Control"}),e.jsxs("h1",{style:{color:"#0f172a",fontSize:"clamp(28px, 4vw, 40px)",fontWeight:"900",fontFamily:"Syne, sans-serif",margin:"8px 0 16px",letterSpacing:"-1px"},children:["Ajustes ",e.jsx("span",{style:{color:"#003DA5"},children:"Globales"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"15px",fontWeight:"500"},children:"Modifica tu información por módulos y guarda solo lo que necesites"})]}),e.jsxs("div",{className:"glass-panel",style:{animationDelay:"0s"},children:[e.jsx("h3",{className:"section-title",children:"Información de la Empresa"}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),s.put("/admin/settings")},children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Nombre de la Empresa"}),e.jsx("input",{type:"text",className:"input-tech",value:s.data.company_name,onChange:a=>s.setData("company_name",a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Correo Electrónico"}),e.jsx("input",{type:"email",className:"input-tech",value:s.data.email,onChange:a=>s.setData("email",a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Teléfono Principal"}),e.jsx("input",{type:"text",className:"input-tech",value:s.data.phone,onChange:a=>s.setData("phone",a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"WhatsApp"}),e.jsx("input",{type:"text",className:"input-tech",value:s.data.whatsapp,onChange:a=>s.setData("whatsapp",a.target.value)})]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{type:"submit",disabled:s.processing,className:"btn-glow-tech",children:s.processing?"Guardando...":"Guardar Información"})})]})]}),e.jsxs("div",{className:"glass-panel",style:{animationDelay:"0.1s"},children:[e.jsx("h3",{className:"section-title",children:"Apariencia y Colores"}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),i.put("/admin/settings")},children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Color Primario (Azul Corporativo)"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",marginTop:"8px"},children:[e.jsx("input",{type:"color",value:i.data.primary_color,onChange:a=>i.setData("primary_color",a.target.value),style:{width:"45px",height:"45px",padding:"0",border:"none",borderRadius:"8px",cursor:"pointer",background:"transparent"}}),e.jsx("input",{type:"text",className:"input-tech",style:{marginTop:"0"},value:i.data.primary_color,onChange:a=>i.setData("primary_color",a.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Color Secundario (Dorado)"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",marginTop:"8px"},children:[e.jsx("input",{type:"color",value:i.data.secondary_color,onChange:a=>i.setData("secondary_color",a.target.value),style:{width:"45px",height:"45px",padding:"0",border:"none",borderRadius:"8px",cursor:"pointer",background:"transparent"}}),e.jsx("input",{type:"text",className:"input-tech",style:{marginTop:"0"},value:i.data.secondary_color,onChange:a=>i.setData("secondary_color",a.target.value)})]})]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{type:"submit",disabled:i.processing,className:"btn-glow-tech",children:i.processing?"Guardando...":"Guardar Colores"})})]})]}),e.jsxs("div",{className:"glass-panel",style:{animationDelay:"0.2s"},children:[e.jsx("h3",{className:"section-title",children:"Textos de la Página"}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),r.put("/admin/settings")},children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"label-tech",children:"Título Principal (Hero)"}),e.jsx("input",{type:"text",className:"input-tech",value:r.data.hero_title,onChange:a=>r.setData("hero_title",a.target.value)})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"label-tech",children:"Descripción Principal"}),e.jsx("textarea",{rows:"2",className:"input-tech",style:{resize:"vertical"},value:r.data.hero_description,onChange:a=>r.setData("hero_description",a.target.value)})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"label-tech",children:"Texto de la sección de Contacto"}),e.jsx("textarea",{rows:"2",className:"input-tech",style:{resize:"vertical"},value:r.data.contact_text,onChange:a=>r.setData("contact_text",a.target.value)})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{className:"label-tech",children:"Descripción del Pie de Página (Footer)"}),e.jsx("textarea",{rows:"2",className:"input-tech",style:{resize:"vertical"},value:r.data.footer_description,onChange:a=>r.setData("footer_description",a.target.value)})]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{type:"submit",disabled:r.processing,className:"btn-glow-tech",children:r.processing?"Guardando...":"Guardar Textos"})})]})]}),e.jsxs("div",{className:"glass-panel",style:{animationDelay:"0.3s"},children:[e.jsx("h3",{className:"section-title",children:"Proyectos Destacados"}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),o.put("/admin/settings")},children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Proyecto Principal (Hero Banner)"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("select",{className:"input-tech",style:{appearance:"none"},value:o.data.hero_project_id,onChange:a=>o.setData("hero_project_id",a.target.value),children:[e.jsx("option",{value:"",children:"-- Usar diseño por defecto --"}),c.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),e.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#64748b",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Proyecto Destacado 1"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("select",{className:"input-tech",style:{appearance:"none"},value:o.data.featured_project_id_1,onChange:a=>o.setData("featured_project_id_1",a.target.value),children:[e.jsx("option",{value:"",children:"-- Ninguno --"}),c.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),e.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#64748b",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Proyecto Destacado 2"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("select",{className:"input-tech",style:{appearance:"none"},value:o.data.featured_project_id_2,onChange:a=>o.setData("featured_project_id_2",a.target.value),children:[e.jsx("option",{value:"",children:"-- Ninguno --"}),c.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),e.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#64748b",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{type:"submit",disabled:o.processing,className:"btn-glow-tech",children:o.processing?"Guardando...":"Guardar Proyectos"})})]})]}),e.jsxs("div",{className:"glass-panel",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"section-title",children:"Redes Sociales y Privacidad"}),e.jsxs("form",{onSubmit:a=>{a.preventDefault(),l.put("/admin/settings")},children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Enlace a Facebook"}),e.jsx("input",{type:"url",className:"input-tech",value:l.data.facebook_url,onChange:a=>l.setData("facebook_url",a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"Enlace a Instagram"}),e.jsx("input",{type:"url",className:"input-tech",value:l.data.instagram_url,onChange:a=>l.setData("instagram_url",a.target.value)})]}),e.jsxs("div",{className:"toggle-container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",style:{display:"inline",color:"#0f172a"},children:"Mostrar Redes Sociales"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"12px",color:"#64748b"},children:"Activa los íconos sociales en la web"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:l.data.show_socials,onChange:a=>l.setData("show_socials",a.target.checked)}),e.jsx("span",{className:"slider"})]})]}),e.jsxs("div",{className:"toggle-container",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",style:{display:"inline",color:"#0f172a"},children:"Mostrar Precios Públicos"}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"12px",color:"#64748b"},children:"Visible para todos los visitantes"})]}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:l.data.show_prices_publicly,onChange:a=>l.setData("show_prices_publicly",a.target.checked)}),e.jsx("span",{className:"slider"})]})]})]}),e.jsx("div",{className:"form-footer",children:e.jsx("button",{type:"submit",disabled:l.processing,className:"btn-glow-tech",children:l.processing?"Guardando...":"Guardar Redes y Privacidad"})})]})]})]})]})]})}export{m as default};

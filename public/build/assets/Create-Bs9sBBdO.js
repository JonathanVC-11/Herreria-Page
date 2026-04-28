import{u as d,j as e,H as p,L as c}from"./app-BX6cveP2.js";import{A as x}from"./AdminLayout-ZGyI5Oh2.js";import{I as f}from"./ImageUpload-Dl82AKZM.js";import"./XMarkIcon-DiJz_fDL.js";function m({categories:o=[]}){const{data:i,setData:r,post:s,processing:n,errors:a}=d({title:"Proyecto de Herrería",category_id:o.length>0?o[0].id:"",description:"Descripción detallada del proyecto incluyendo materiales utilizados, medidas específicas y acabados aplicados.",price:"",image:null}),l=t=>{t.preventDefault(),s("/proyectos")};return e.jsxs(x,{title:"Nuevo Proyecto",children:[e.jsx(p,{title:"Nuevo Proyecto"}),e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"page-container",children:[e.jsx("div",{className:"decorative-blob-1"}),e.jsx("div",{className:"decorative-blob-2"}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[e.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #D4A017 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",fontSize:"12px"},children:"Publicación"}),e.jsxs("h1",{style:{color:"#0f172a",fontSize:"clamp(32px, 4vw, 44px)",fontWeight:"900",fontFamily:"Syne, sans-serif",margin:"8px 0 16px",letterSpacing:"-1px"},children:["Nuevo ",e.jsx("span",{style:{color:"#003DA5"},children:"Proyecto"})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"15px",fontWeight:"500"},children:"Sube los detalles y la fotografía de tu último trabajo"}),e.jsx("div",{style:{width:"60px",height:"4px",background:"#D4A017",borderRadius:"2px",margin:"16px auto 0"}})]}),e.jsxs("form",{onSubmit:l,style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"NOMBRE DEL TRABAJO"}),e.jsx("input",{type:"text",value:i.title,onChange:t=>r("title",t.target.value),placeholder:"Ej: Puerta Forjada Minimalista",className:"input-tech"}),a.title&&e.jsx("p",{style:{color:"#ef4444",fontSize:"13px",marginTop:"8px",fontWeight:"600"},children:a.title})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"CATEGORÍA"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("select",{value:i.category_id,onChange:t=>r("category_id",t.target.value),className:"input-tech",style:{appearance:"none"},children:[e.jsx("option",{value:"",style:{background:"#ffffff",color:"#0f172a"},children:"Selecciona una categoría"}),o.map(t=>e.jsx("option",{value:t.id,style:{background:"#ffffff",color:"#0f172a"},children:t.name},t.id))]}),e.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#64748b",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),a.category_id&&e.jsx("p",{style:{color:"#ef4444",fontSize:"13px",marginTop:"8px",fontWeight:"600"},children:a.category_id})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"PRECIO EST. (OPCIONAL)"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:"#64748b",fontWeight:"700"},children:"$"}),e.jsx("input",{type:"number",step:"0.01",value:i.price,onChange:t=>r("price",t.target.value),placeholder:"0.00",className:"input-tech",style:{paddingLeft:"32px"}})]}),a.price&&e.jsx("p",{style:{color:"#ef4444",fontSize:"13px",marginTop:"8px",fontWeight:"600"},children:a.price})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-tech",children:"DESCRIPCIÓN DETALLADA"}),e.jsx("textarea",{rows:"4",value:i.description,onChange:t=>r("description",t.target.value),placeholder:"Describe los materiales, medidas o acabados...",className:"input-tech",style:{resize:"vertical"}}),a.description&&e.jsx("p",{style:{color:"#ef4444",fontSize:"13px",marginTop:"8px",fontWeight:"600"},children:a.description})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"label-tech",style:{marginBottom:"8px"},children:["FOTOGRAFÍA DEL TRABAJO TERMINADO",e.jsx("span",{style:{display:"block",fontSize:"12px",color:"#003DA5",textTransform:"none",marginTop:"4px",fontWeight:"600"},children:"* Límite actual: 1 imagen por proyecto."})]}),e.jsx("div",{style:{background:"#ffffff",padding:"16px",borderRadius:"16px",border:"1px solid rgba(0,61,165,0.1)"},children:e.jsx(f,{value:i.image,onChange:t=>r("image",t),error:a.image})})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",gap:"16px",marginTop:"24px"},children:[e.jsx(c,{href:"/proyectos",className:"btn-cancel-tech",children:"Cancelar"}),e.jsx("button",{type:"submit",disabled:n,className:"btn-glow-tech",children:n?"Subiendo datos...":"Publicar Proyecto"})]})]})]})]})]})}export{m as default};

import React, { useState, useRef } from 'react';

export default function ImageUpload({ value, onChange, error }) {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef();

    // Maneja la selección del archivo y genera la previsualización
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onChange(file); // Envía el archivo al formulario de Inertia
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Crea la URL para la vista previa
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="flex flex-col gap-2">
            {/* Input oculto que se activa al hacer clic en el contenedor visual */}
            <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" 
                accept="image/png, image/jpeg, image/jpg, image/webp"
            />
            
            <div 
                onClick={triggerFileInput}
                className={`
                    relative group cursor-pointer overflow-hidden
                    border-2 border-dashed rounded-xl transition-all duration-300
                    h-56 flex flex-col items-center justify-center gap-3
                    ${preview ? 'border-[#D4A017]' : 'border-gray-300 hover:border-[#D4A017] bg-gray-50'}
                `}
            >
                {preview ? (
                    <>
                        {/* Vista previa de la imagen seleccionada */}
                        <img 
                            src={preview} 
                            alt="Vista previa" 
                            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-[#D4A017] text-[#140E0A] px-5 py-2 rounded-full font-bold shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                Cambiar fotografía
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Estado inicial sin imagen */}
                        <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg className="w-7 h-7 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="text-center px-6">
                            <p className="text-gray-700 font-bold text-lg">Seleccionar imagen del proyecto</p>
                            <p className="text-sm text-gray-400 mt-1">Haz clic para buscar en tus archivos</p>
                        </div>
                    </>
                )}
            </div>
            
            {/* Mensaje de error dinámico desde Laravel */}
            {error && <p className="text-red-500 text-xs font-medium mt-1">{error}</p>}
        </div>
    );
}
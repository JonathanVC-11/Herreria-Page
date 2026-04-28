<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    use HasFactory;

    /**
     * Atributos que se pueden asignar masivamente.
     */
    protected $fillable = [
        'category_id',
        'title',
        'description',
        'price',
        'image_path',
    ];

    /**
     * Atributos dinámicos que se añaden al JSON (para React).
     */
    protected $appends = ['image_url'];

    /**
     * Relación: Un proyecto pertenece a una categoría.
     * Importante para que no se rompa el panel de administración.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Accessor para generar la URL firmada de Cloudflare R2.
     * Esta es la función que React usará para mostrar la imagen.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image_path) {
            // Genera un enlace seguro válido por 2 horas (120 min)
            return Storage::disk('s3')->temporaryUrl(
                $this->image_path, 
                now()->addMinutes(120)
            );
        }

        // Imagen por defecto si no hay ruta en la BD
        return '/imagenes/asador-1.png';
    }
}
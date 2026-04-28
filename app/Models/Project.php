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
     * Accessor para generar la URL pública de Cloudflare R2.
     * Concatena la URL pública del bucket con la ruta almacenada en la BD.
     */
    public function getImageUrlAttribute()
    {
        if (!$this->image_path) {
            return null;
        }
        // Concatenamos la URL pública de Cloudflare con la ruta de la imagen
        return rtrim(env('AWS_URL'), '/') . '/' . ltrim($this->image_path, '/');
    }
}
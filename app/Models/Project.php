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
     * Maneja strings simples, JSON arrays y arrays nativos.
     */
    public function getImageUrlAttribute()
    {
        if (empty($this->image_path)) {
            return null;
        }

        $path = $this->image_path;

        // Si es un string que parece un JSON de array (ej. '["proyectos/foto.jpg"]')
        if (is_string($path) && str_starts_with($path, '[')) {
            $decoded = json_decode($path, true);
            if (is_array($decoded) && count($decoded) > 0) {
                $path = $decoded[0]; // Tomamos la primera foto
            }
        }
        // Si ya es un array nativo
        elseif (is_array($path) && count($path) > 0) {
            $path = $path[0];
        }

        // Limpiamos comillas accidentales y barras
        $path = trim($path, ' "/');

        return rtrim(env('AWS_URL'), '/') . '/' . $path;
    }
}
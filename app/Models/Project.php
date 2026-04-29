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
     * Accessor: Transforma image_path para entregar la URL absoluta de R2.
     * React recibe directamente la URL final sin necesidad de concatenar nada.
     */
    public function getImagePathAttribute($value)
    {
        if (!$value) {
            return null;
        }
        // Limpiar cualquier prefijo /storage/ que haya quedado en la BD
        $cleanPath = str_replace('/storage/', '', $value);
        $cleanPath = ltrim($cleanPath, '/');
        return 'https://pub-4a2423514ab649f9958a61a720de08df.r2.dev/' . $cleanPath;
    }

    /**
     * Accessor de respaldo (image_url) por compatibilidad.
     */
    public function getImageUrlAttribute()
    {
        return $this->image_path;
    }
}
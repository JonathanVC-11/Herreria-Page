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
        return $this->image_path ? 'https://pub-4a2423514ab649f9958a61a720de08df.r2.dev/' . ltrim($this->image_path, '/') : null;
    }
}
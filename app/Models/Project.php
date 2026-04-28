<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Campos que permitimos llenar masivamente desde el formulario del panel
    protected $fillable = [
        'category_id',
        'title',
        'description',
        'price',
        'image_path',
    ];

    // Agregamos el nuevo atributo virtual para que React pueda leerlo
    protected $appends = ['image_url'];

    // Relación: Un proyecto pertenece a una categoría
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Accessor para generar la URL firmada de R2
    public function getImageUrlAttribute()
    {
        if ($this->image_path) {
            return \Illuminate\Support\Facades\Storage::disk('r2')->temporaryUrl(
                $this->image_path, 
                now()->addMinutes(120)
            );
        }
        return null;
    }
}
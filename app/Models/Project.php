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

    // Relación: Un proyecto pertenece a una categoría
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
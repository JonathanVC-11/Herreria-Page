<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    // Desactivamos los timestamps porque tu tabla no los tiene
    public $timestamps = false;

    // Campos que permitimos llenar masivamente
    protected $fillable = [
        'name',
        'slug',
        'description',
    ];

    // Relación: Una categoría tiene muchos proyectos
    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
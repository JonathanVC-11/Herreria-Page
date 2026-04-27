<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class SiteSetting extends Model
{
    protected $fillable = [
        'phone',
        'whatsapp',
        'email',
        'facebook_url',
        'instagram_url',
        'show_socials',
        'show_prices_publicly',
        'hero_project_id',
        'featured_project_id_1',
        'featured_project_id_2',
        'hero_title', 
        'hero_description', 
        'primary_color', 
        'secondary_color',
        'company_name', 
        'contact_text', 
        'footer_description',
    ];

    protected $casts = [
        'show_socials' => 'boolean',
        'show_prices_publicly' => 'boolean',
    ];

    // Relaciones para poder acceder a los datos del proyecto (como la foto)
    public function heroProject() {
        return $this->belongsTo(Project::class, 'hero_project_id');
    }
    public function featuredProject1() {
        return $this->belongsTo(Project::class, 'featured_project_id_1');
    }
    public function featuredProject2() {
        return $this->belongsTo(Project::class, 'featured_project_id_2');
    }
}
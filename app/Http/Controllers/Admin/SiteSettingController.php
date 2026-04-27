<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    // Muestra la vista de configuración con los datos actuales
    public function index()
    {
        $settings = SiteSetting::firstOrCreate([]);
        $proyectos = Project::select('id', 'title', 'image_path')->latest()->get();

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
            'proyectos' => $proyectos,
        ]);
    }

    // Procesa y guarda los cambios enviados por el Administrador
    public function update(Request $request)
    {
        // Traemos la única fila de configuración que existe (o la creamos si no hay)
        $settings = SiteSetting::firstOrCreate([]);
        
        $data = $request->validate([
            // Validaciones de texto y URL
            'phone' => 'nullable|string|max:20',
            'whatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'facebook_url' => 'nullable|url|max:255',
            'instagram_url' => 'nullable|url|max:255',
            
            // Validaciones de los interruptores
            'show_socials' => 'boolean',
            'show_prices_publicly' => 'boolean',
            
            // Validamos que los IDs de los proyectos que quiere destacar REALMENTE existan
            'hero_project_id' => 'nullable|exists:projects,id',
            'featured_project_id_1' => 'nullable|exists:projects,id',
            'featured_project_id_2' => 'nullable|exists:projects,id',

            // validamos los diseños de la pagina
            'hero_title' => 'nullable|string|max:255',
            'hero_description' => 'nullable|string',
            'primary_color' => 'nullable|string|max:20',
            'secondary_color' => 'nullable|string|max:20',
            'company_name' => 'nullable|string|max:255',
            'contact_text' => 'nullable|string',
            'footer_description' => 'nullable|string',
        ]);

        foreach ($data as $key => $value) {
        if (is_string($value)) {
            // strip_tags elimina cualquier <script>, <b>, <div>, etc.
            $data[$key] = strip_tags($value);
        }
    }
        $settings->update($data);

        // Regresa a la página anterior confirmando el éxito
        return back()->with('success', 'Configuración de la página actualizada correctamente.');
    }
}
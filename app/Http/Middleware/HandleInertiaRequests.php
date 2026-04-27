<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\SiteSetting; // <-- IMPORTANTE: Usamos el Modelo, no el Controlador

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Obtenemos la configuración y las fotos de los proyectos conectados
        // Usamos try/catch por seguridad, por si la tabla aún no existe al hacer migraciones
        try {
            $globalSettings = SiteSetting::with(['heroProject', 'featuredProject1', 'featuredProject2'])->first();
        } catch (\Exception $e) {
            $globalSettings = null;
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            // MANDAMOS LA CONFIGURACIÓN A TODO REACT
            'globalSettings' => $globalSettings,
        ];
    }
}
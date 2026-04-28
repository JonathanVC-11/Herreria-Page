<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // <-- Importamos esta herramienta

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Obligamos a Laravel a usar HTTPS si estamos en producción (Vercel)
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
    }
}
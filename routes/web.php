<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\ProjectController; 
use App\Http\Controllers\Admin\SiteSettingController; 
use App\Http\Controllers\Admin\CategoryController; // <-- Importación correcta
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Database\QueryException;

Route::get('/', function () {
    try {
        // Traer todas las categorías
        $categorias = Category::all();
        
        // Traer proyectos relacionados con sus categorías (sin límite de 6 para que funcionen los filtros por categoría)
        $proyectos = Project::with('category')->latest()->get();
    } catch (QueryException $e) {
        // Si hay error de conexión, pasar arrays vacíos
        $categorias = [];
        $proyectos = [];
        \Log::warning('Error en la home: ' . $e->getMessage());
    } catch (\Exception $e) {
        $categorias = [];
        $proyectos = [];
        \Log::warning('Error general en la home: ' . $e->getMessage());
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'proyectos' => $proyectos,
        'categorias' => $categorias,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    // El Dashboard al iniciar sesión
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Todas las rutas para el CRUD de proyectos (crear, guardar, editar, borrar)
    Route::resource('/proyectos', ProjectController::class);
    
    // --- NUEVAS RUTAS PARA EL CRUD DE CATEGORÍAS ---
    Route::resource('/categorias', CategoryController::class)->parameters([
        'categorias' => 'categoria'
    ]);
    
    // --- RUTAS PARA LA CONFIGURACIÓN GLOBAL ---
    // Ruta para VER el panel de configuración
    Route::get('/admin/settings', [SiteSettingController::class, 'index'])->name('settings.index');
    
    // Ruta para GUARDAR los cambios del panel
    Route::put('/admin/settings', [SiteSettingController::class, 'update'])->name('settings.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
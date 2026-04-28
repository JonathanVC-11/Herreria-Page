<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver; // Usamos GD que viene por defecto en PHP

class ProjectController extends Controller
{
    /**
     * Muestra la lista de proyectos en el Panel.
     */
    public function index()
    {
        // Traemos todos los proyectos con su categoría asociada
        $proyectos = Project::with('category')->latest()->get();
        
        return Inertia::render('Admin/Projects/Index', [
            'proyectos' => $proyectos
        ]);
    }

    /**
     * Muestra el formulario para crear un nuevo proyecto.
     */
    public function create()
    {
        // Mandamos las categorías para el select (menú desplegable) del formulario
        return Inertia::render('Admin/Projects/Create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Recibe los datos del formulario, procesa la imagen y guarda en BD.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'price' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $this->processAndSaveImage($request->file('image'));
        }

        Project::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'price' => $request->price, // <-- AGREGADO: Guardar el precio
            'image_path' => $imagePath,
        ]);

        return redirect()->route('proyectos.index')->with('success', 'Proyecto creado exitosamente.');
    }

    /**
     * Muestra el formulario para editar un proyecto existente.
     */
    public function edit(Project $proyecto)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'proyecto' => $proyecto,
            'categories' => Category::all()
        ]);
    }

    /**
     * Actualiza un proyecto en la base de datos (y reemplaza la imagen si hay una nueva).
     */
    public function update(Request $request, Project $proyecto)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'price' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $data = $request->only(['title', 'category_id', 'description', 'price']);

        // Si el usuario sube una nueva imagen al editar
        if ($request->hasFile('image')) {
            // Eliminar imagen anterior si existe en R2
            if ($proyecto->image_path) {
                $filename = basename($proyecto->image_path);
                Storage::disk('r2')->delete('projects/' . $filename);
            }
            
            // Procesamos y guardamos la nueva imagen
            $data['image_path'] = $this->processAndSaveImage($request->file('image'));
        }

        $proyecto->update($data);

        return redirect()->route('proyectos.index')->with('success', 'Proyecto actualizado exitosamente.');
    }

    /**
     * Elimina el proyecto de la BD y su foto del servidor.
     */
    public function destroy(Project $proyecto)
    {
        // Borrar imagen al eliminar proyecto
        if ($proyecto->image_path) {
            $filename = basename($proyecto->image_path);
            Storage::disk('r2')->delete('projects/' . $filename);
        }
        
        $proyecto->delete();

        return redirect()->route('proyectos.index')->with('success', 'Proyecto eliminado.');
    }

    /**
     * --- MÉTODO PRIVADO ---
     * Toma el archivo original, lo convierte a WebP y lo guarda en el storage disk.
     */
    private function processAndSaveImage($file)
    {
        // Inicializamos Intervention Image
        $manager = new ImageManager(new Driver());
        
        // Leemos el archivo temporal
        $image = $manager->read($file->getRealPath());
        
        // Lo codificamos a WebP con 80% de calidad
        $encoded = (string) $image->toWebp(80);
        
        // Generamos un nombre único y ruta
        $filename = uniqid('project_', true) . '.webp';
        $path = 'projects/' . $filename;
        
        // Guardamos el archivo en el disco r2 de forma privada (o sin public si R2 no es público)
        Storage::disk('r2')->put($path, $encoded);
        
        // Retornamos la ruta relativa para guardarla en Neon
        return $path;
    }
}
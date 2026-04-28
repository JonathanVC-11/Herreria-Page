<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;


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
        // DEBUG: Ver qué llega del frontend
        Log::info('=== STORE: Datos recibidos ===', $request->all());
        Log::info('=== STORE: ¿Tiene archivo? ===', ['hasFile' => $request->hasFile('image')]);
        if ($request->hasFile('image')) {
            Log::info('=== STORE: Info del archivo ===', [
                'originalName' => $request->file('image')->getClientOriginalName(),
                'size' => $request->file('image')->getSize(),
                'mime' => $request->file('image')->getMimeType(),
            ]);
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'price' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $proyecto = new Project();
        $proyecto->title = $request->title;
        $proyecto->category_id = $request->category_id;
        $proyecto->description = $request->description;
        $proyecto->price = $request->price;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('proyectos', 'r2');
            Log::info('=== STORE: Resultado de store() ===', ['path' => $path, 'type' => gettype($path)]);
            if ($path) {
                $proyecto->image_path = $path;
            }
        }

        $proyecto->save();
        Log::info('=== STORE: Proyecto guardado ===', ['id' => $proyecto->id, 'image_path' => $proyecto->image_path]);

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
        // DEBUG: Ver qué llega del frontend
        Log::info('=== UPDATE: Datos recibidos ===', $request->all());
        Log::info('=== UPDATE: ¿Tiene archivo? ===', ['hasFile' => $request->hasFile('image')]);

        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'price' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $proyecto->title = $request->title;
        $proyecto->category_id = $request->category_id;
        $proyecto->description = $request->description;
        $proyecto->price = $request->price;

        // Si el usuario sube una nueva imagen al editar
        if ($request->hasFile('image')) {
            // Eliminar imagen anterior si existe en R2
            if ($proyecto->image_path) {
                Storage::disk('r2')->delete($proyecto->image_path);
            }
            
            $path = $request->file('image')->store('proyectos', 'r2');
            Log::info('=== UPDATE: Resultado de store() ===', ['path' => $path, 'type' => gettype($path)]);
            if ($path) {
                $proyecto->image_path = $path;
            }
        }

        $proyecto->save();
        Log::info('=== UPDATE: Proyecto guardado ===', ['id' => $proyecto->id, 'image_path' => $proyecto->image_path]);

        return redirect()->route('proyectos.index')->with('success', 'Proyecto actualizado exitosamente.');
    }

    /**
     * Elimina el proyecto de la BD y su foto del servidor.
     */
    public function destroy(Project $proyecto)
    {
        // Borrar imagen al eliminar proyecto
        if ($proyecto->image_path) {
            Storage::disk('r2')->delete($proyecto->image_path);
        }
        
        $proyecto->delete();

        return redirect()->route('proyectos.index')->with('success', 'Proyecto eliminado.');
    }


}
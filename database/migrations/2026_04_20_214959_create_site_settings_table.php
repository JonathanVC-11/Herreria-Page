<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            
            // Textos editables (Teléfonos, correos, redes)
            $table->string('phone')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('email')->nullable();
            $table->string('facebook_url')->nullable();
            $table->string('instagram_url')->nullable();
            
            // Interruptores lógicos (Booleanos)
            $table->boolean('show_socials')->default(true);
            $table->boolean('show_prices_publicly')->default(true);
            
            // Conexión con los Proyectos para las fotos principales (Ventanas)
            // nullOnDelete() evita que la página se rompa si borras un proyecto que estaba de portada
            $table->foreignId('hero_project_id')->nullable()->constrained('projects')->nullOnDelete();
            $table->foreignId('featured_project_id_1')->nullable()->constrained('projects')->nullOnDelete();
            $table->foreignId('featured_project_id_2')->nullable()->constrained('projects')->nullOnDelete();
            
            // Campos de diseño de la página
            $table->string('hero_title')->nullable();
            $table->text('hero_description')->nullable();
            $table->string('primary_color', 20)->nullable();
            $table->string('secondary_color', 20)->nullable();
            $table->string('company_name')->nullable();
            $table->text('contact_text')->nullable();
            $table->text('footer_description')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
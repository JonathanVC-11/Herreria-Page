# Usar una imagen oficial de PHP con Apache (PHP 8.2)
FROM php:8.2-apache

# Instalar las dependencias del sistema necesarias, incluyendo libpq-dev para PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    git \
    unzip \
    curl \
    libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql zip

# Habilitar mod_rewrite de Apache
RUN a2enmod rewrite

# Configurar el DocumentRoot para que apunte a la carpeta public de Laravel
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instalar Node.js (versión 20)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Instalar las dependencias de PHP para producción
RUN composer install --no-dev --optimize-autoloader

# Instalar dependencias de Node.js y compilar los assets de React/Vite
RUN npm install && npm run build

# Crear el enlace simbólico para el storage (ignorando si ya existe en el build)
RUN php artisan storage:link || true

# Asignar los permisos correctos a las carpetas storage y bootstrap/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exponer el puerto 80
EXPOSE 80

# Iniciar Apache
CMD ["apache2-foreground"]

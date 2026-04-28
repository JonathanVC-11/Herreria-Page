<?php

// 1. Forzar a Laravel a usar la memoria RAM de Vercel (/tmp) para todos sus archivos temporales
$_SERVER['VIEW_COMPILED_PATH'] = '/tmp';
$_SERVER['APP_CONFIG_CACHE'] = '/tmp/config.php';
$_SERVER['APP_EVENTS_CACHE'] = '/tmp/events.php';
$_SERVER['APP_PACKAGES_CACHE'] = '/tmp/packages.php';
$_SERVER['APP_ROUTES_CACHE'] = '/tmp/routes.php';
$_SERVER['APP_SERVICES_CACHE'] = '/tmp/services.php';

// 2. Cargar la aplicación normal
require __DIR__ . '/../public/index.php';
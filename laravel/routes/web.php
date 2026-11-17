<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response('royat-deploy-example laravel '.trim((string) @file_get_contents(base_path('VERSION')))."\n")
        ->header('Content-Type', 'text/plain');
});

Route::get('/health', fn () => response('ok'));

// Shows that the managed database is reachable (set DB_URL from the database page).
Route::get('/db', function () {
    try {
        $v = DB::selectOne('select version() as v')->v;

        return response('db ok: '.strtok($v, ',')."\n")->header('Content-Type', 'text/plain');
    } catch (\Throwable $e) {
        return response("db error: ".class_basename($e)."\n", 500)->header('Content-Type', 'text/plain');
    }
});

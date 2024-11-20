<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UsersController;
use App\Http\Middleware\JWTMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [AuthController::class, 'index'])->name('login');
Route::post('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);

//Route::middleware(['auth'])->group(function () {
//    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//    Route::get('/users', [UsersController::class, 'index'])->name('users');
//});

Route::middleware([JWTMiddleware::class])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/users', [UsersController::class, 'index'])->name('users');
});

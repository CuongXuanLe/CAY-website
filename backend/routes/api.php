<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Api;
use App\Http\Controllers\Api\FooterController;
use App\Http\Controllers\Api\HeaderController;
use App\Http\Controllers\Api\AdminController;
use App\Models\Admin;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/test', function () {
    p("Working");
});


//------------------------------CRUD Footer-----------------------------------
Route::get('/get-footer', [FooterController::class, 'show']);
Route::post('/post-footer', [FooterController::class, 'store']); // Tạo 1 lần 
Route::patch('/patch-footer/{id}', [FooterController::class, 'update']);


//------------------------------CRUD Header-----------------------------------
Route::get('/get-header', [HeaderController::class, 'index']);
Route::post('/post-header', [HeaderController::class, 'store']);
Route::delete('/delete-header/{id}', [HeaderController::class, 'destroy']);
Route::patch('/patch-header', [HeaderController::class, 'update']);


Route::get('/get-admin', [AdminController::class, 'index']);
Route::put('/post-admin/{id}', [AdminController::class, 'update']);
Route::post('/change-password/{id}', [AdminController::class], 'changePassword');
